import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    console.log("yes");
    const formData = await req.formData();
    const session = formData.get("session");
    const message = formData.get("message") as string;
    const submitdetails = { session, message };
    // const { id } = params;
    const id=3498;

    const res = await db.sadd(`user:image:${id}:comments`, submitdetails);
  
    if (res) {
        console.log("yes");
    } else {
        console.log("no");
    }

    return NextResponse.json({
        message: "success",
    },{status:200});
}
