import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        
        if (!body.username || !body.password) {
            return NextResponse.json(
                { message: "Username and password are required" },
                { status: 400 }
            );
        }

        const user = await client.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        });

        return NextResponse.json({ 
            message: "Signed up successfully",
            userId: user.id 
        });
    } catch (error: any) {
        if (error.code === 'P2002') {
            return NextResponse.json(
                { message: "Username already exists" },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}