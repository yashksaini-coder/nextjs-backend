import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        name: "John Doe",
        email: "abc123@gmail.com"
    })
}

export function POST(){
    return NextResponse.json({
        name: "John Doe",
        email: "abc123@gmail.com"
    })
}
