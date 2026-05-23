import { NextRequest, NextResponse } from "next/server";

// Rate limiting: simple in-memory store (use Redis in production)
const rateLimit = new Map<string, { count: number; reset: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimit.get(ip);
  if (!limit || now > limit.reset) {
    rateLimit.set(ip, { count: 1, reset: now + 60_000 });
    return true;
  }
  if (limit.count >= 10) return false; // 10 requests per minute
  limit.count++;
  return true;
}

export async function POST(req: NextRequest) {
  // Get client IP for rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: { message: "Too many requests. Please wait a moment." } },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();

    // Validate required fields
    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json({ error: { message: "Invalid request" } }, { status: 400 });
    }

    // Sanitize: max 5000 chars per message to prevent abuse
    const messages = body.messages.map((m: { role: string; content: string }) => ({
      role: m.role,
      content: String(m.content).slice(0, 5000),
    }));

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: body.system || "You are a helpful AI assistant.",
        messages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: { message: data.error?.message || "AI service error" } },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: { message: "Failed to process request. Please try again." } },
      { status: 500 }
    );
  }
}
