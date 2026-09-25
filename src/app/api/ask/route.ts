import { NextResponse } from "next/server";
import { answerQuestion } from "@/lib/ask";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { question?: unknown };
    const question = typeof body?.question === "string" ? body.question : "";

    if (!question.trim()) {
      return NextResponse.json({ error: "Question is required." }, { status: 400 });
    }

    if (question.length > 500) {
      return NextResponse.json(
        { error: "Question is too long." },
        { status: 400 }
      );
    }

    const result = answerQuestion(question);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
