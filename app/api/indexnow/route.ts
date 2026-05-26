import { NextResponse } from "next/server";

const KEY = "quantixtools2025indexnow";
const HOST = "quantixtools.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// POST /api/indexnow — call this after deploying new content
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const urls: string[] = body.urls || [`https://${HOST}/`];

    const payload = {
      host:        HOST,
      key:         KEY,
      keyLocation: KEY_LOCATION,
      urlList:     urls,
    };

    const res = await fetch("https://api.indexnow.org/indexnow", {
      method:  "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body:    JSON.stringify(payload),
    });

    return NextResponse.json({ ok: res.ok, status: res.status, urls });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

// GET /api/indexnow — health check
export async function GET() {
  return NextResponse.json({ ok: true, key: KEY, host: HOST });
}
