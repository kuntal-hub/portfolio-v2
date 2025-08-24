import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.in",
            port: parseInt(process.env.ZOHO_SMTP_PORT || "465"),
            auth: {
                user: process.env.ZOHO_APP_USER,
                pass: process.env.ZOHO_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: `"Kuntal Maity" <${process.env.ZOHO_APP_USER}>`,
            to: "km7999319@gmail.com, support@kuntalmaity.in",
            subject: "New message from your-website",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
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