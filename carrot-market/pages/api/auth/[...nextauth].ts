import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient, User as PrismaUser } from "@prisma/client";
import NextAuth, { Account, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: "Ov23li7LOAF55VT9LogL",
            clientSecret: "0f34b5478c89e45ac3890707428dee4f43f3f6d2",
        }),

        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },

            async authorize({ email, password }: any) {
                const user = await prisma.user.findUnique({
                    where: { email },
                });

                if (!user || !user.password) {
                    console.log("해당 이메일은 없음");
                    return null;
                }

                const pwcheck = await bcrypt.compare(password, user.password);
                if (!pwcheck) {
                    console.log("비번틀림");
                    return null;
                }
                return user;
            },
        }),
    ],
    pages: {
        signIn: "/enter", // 로그인 페이지 경로
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, //30일
    },
    callbacks: {
        async signIn({
            account,
            user,
        }: {
            account: Account | null;
            user: User;
        }) {
            const { name, email, image } = user;
            if (!account || !email) {
                return false;
            }

            const existingUser = await prisma.user.upsert({
                where: { email },
                create: {
                    email,
                    name,
                    image,
                },
                update: {},
            });

            const {
                provider,
                providerAccountId,
                access_token,
                token_type,
                scope,
            } = account;
            const tokenConfig = {
                accessToken: access_token,
                tokenType: token_type,
                scope: scope,
            };

            await prisma.account.upsert({
                where: {
                    provider_providerAccountId: {
                        provider,
                        providerAccountId,
                    },
                },
                create: {
                    provider,
                    providerAccountId,
                    ...tokenConfig,
                    user: { connect: { id: existingUser.id } },
                },
                update: tokenConfig,
            });
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                const { email, name, image, phone } = user as PrismaUser;
                token.user = { email, name, image, phone };
            }
            return token;
        },
        async session({ session, token: { user } }) {
            return Object.assign(session, { user });
        },
    },

    secret: "java1234",
    adapter: PrismaAdapter(prisma),
});
