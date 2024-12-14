import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    // req.body?

    const data = await req.json();

    console.log(data);

    return NextResponse.json({
        message: "You have been signed up"
    })
}