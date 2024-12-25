import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/db";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        if (!body.username || !body.password) {
            return NextResponse.json(
                { message: "Username and password are required" },
                { status: 400 }
            );
        }

        const user = await prisma.user.findUnique({
            where: { 
                username: body.username
            },
        });

        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        if (user.password !== body.password) {
            return NextResponse.json(
                { message: "Invalid password" },
                { status: 401 }
            );
        }

        return NextResponse.json({
            message: "Signed in successfully",
            userId: user.id
        });
    } catch (error: any) {
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}