import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();

    client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    return NextResponse.json({ message: "Signed up" });
}