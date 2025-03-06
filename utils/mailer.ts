// implement node mailer
import { config } from "@/config";
import { createTransport } from "nodemailer";

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const transporter = createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: config.smtp.secure,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.pass,
  },
});

const generateEmailHTML = (props: EmailTemplateProps): string => {
  const { name, email, subject, message } = props;
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto">
      <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px">
        New Contact Form Submission
      </h2>
      <div style="padding: 20px 0">
        <p style="margin: 10px 0">
          <strong>From:</strong> ${name} (${email})
        </p>
        <p style="margin: 10px 0">
          <strong>Subject:</strong> ${subject}
        </p>
        <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px">
          <strong>Message:</strong>
          <p style="white-space: pre-wrap; margin: 10px 0">${message}</p>
        </div>
      </div>
      <div style="border-top: 2px solid #eee; padding-top: 10px; color: #666; font-size: 12px">
        <p>This email was sent from the contact form on CodeSark Portfolio.</p>
      </div>
    </div>
  `;
};

// write send mail function
export const sendMail = async (
  to: string,
  subject: string,
  text: string,
  templateProps: EmailTemplateProps
): Promise<boolean> => {
  try {
    const mailOptions: MailOptions = {
      from: process.env.NEXT_MAIL_USER || "",
      to,
      subject,
      text,
      html: generateEmailHTML(templateProps)
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
