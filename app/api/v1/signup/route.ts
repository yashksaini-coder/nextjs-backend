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

        const existingUser = await prisma.user.findUnique({
            where: { username: body.username },
        });

        if (existingUser) {
            return NextResponse.json(
                { message: "Username already exists" },
                { status: 400 }
            );
        }
        
        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password,
            },
        });

        return NextResponse.json({
            message: "User created successfully",
            userId: user.id,
        });
    } catch (error: any) {
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}