import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/libs/database";
import bcrypt from "bcrypt";
import { RegisterDto } from "@/types/user";

/**
 * POST /api/auth/register - 회원가입
 */
export async function POST(request: NextRequest) {
    try {
        const body: RegisterDto = await request.json();

        // 유효성 검사
        if (!body.name || !body.email || !body.password) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Name, email, and password are required",
                },
                { status: 400 },
            );
        }

        // 이메일 중복 체크
        const collection = await getCollection("users");
        const existingUser = await collection.findOne({ email: body.email });

        if (existingUser) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Email already exists",
                },
                { status: 409 },
            );
        }

        // 비밀번호 암호화
        const hashedPassword = await bcrypt.hash(body.password, 10);

        // 사용자 생성
        const newUser = {
            name: body.name,
            email: body.email,
            password: hashedPassword,
            createdAt: new Date(),
        };

        const result = await collection.insertOne(newUser);

        return NextResponse.json(
            {
                success: true,
                data: {
                    id: result.insertedId,
                    name: newUser.name,
                    email: newUser.email,
                },
            },
            { status: 201 },
        );
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Failed to register user",
            },
            { status: 500 },
        );
    }
}
