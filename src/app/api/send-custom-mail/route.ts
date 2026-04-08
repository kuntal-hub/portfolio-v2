import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { from, to, subject, text, html } = await request.json();

        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.in",
            port: parseInt(process.env.ZOHO_SMTP_PORT || "465"),
            auth: {
                user: process.env.ZOHO_APP_USER,
                pass: process.env.ZOHO_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from,
            to,
            subject,
            text,
            html,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 },
        );
    } catch (error) {
        return new NextResponse("Failed to send message.", { status: 500 })
    }
}