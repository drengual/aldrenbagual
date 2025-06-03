// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    // 1. Create a Nodemailer transporter
    // Use your Gmail account credentials (with App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail", // or 'smtp.gmail.com' for host
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 2. Define email options
    const mailOptions = {
      from: process.env.GMAIL_USER, // Sender address
      to: process.env.RECEIVING_EMAIL, // Your email to receive messages
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    // More detailed error for debugging, but keep client message generic
    return NextResponse.json(
      { message: "Failed to send email.", error: error.message },
      { status: 500 },
    );
  }
}
