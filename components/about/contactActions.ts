"use server";

import { config } from "@/config";
import { sendMail } from "./../../utils/mailer";

interface IContactForm {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const SEND_EMAIL_TO = "savinaykumar@outlook.com";

export async function sendMailContactEmail(
  data: IContactForm
): Promise<boolean> {
  try {
    const mail = await sendMail(
      config.smtp.to,
      `New Contact Form: ${data.name}`,
      `From: ${data.email}\n\nName: ${data.name}\n\nSubject: ${data.subject}\n\nMessage: ${data.message}`,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      }
    );
    console.log("Contact form email sent:", mail);
    return true;
  } catch (error) {
    console.error("Error sending contact form email:", error);
  }
  return false;
}
