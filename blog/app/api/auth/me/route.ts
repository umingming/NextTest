import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";

/**
 * GET /api/auth/me - 현재 로그인한 사용자 정보
 */
export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session || !session.user) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Not authenticated",
                },
                { status: 401 },
            );
        }

        return NextResponse.json({
            success: true,
            data: session.user,
        });
    } catch (error) {
        console.error("Get user error:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Failed to get user",
            },
            { status: 500 },
        );
    }
}

