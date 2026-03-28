import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { message, email } = await req.json();

  if (!message || !email) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'powdershell <onboarding@resend.dev>',
    to: 'kingston.kdk@gmail.com',
    subject: `new message from ${email}`,
    text: `From: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
