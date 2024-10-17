import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
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
    ],
    pages: {
        signIn: "/enter", // 로그인 페이지 경로
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, //30일
    },
    callbacks: {
        async signIn(param: any) {
            console.log("파라미터", param);
            return false;
        },
    },

    secret: "java1234",
    adapter: PrismaAdapter(prisma),
});
