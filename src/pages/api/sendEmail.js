import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Set up the transporter using Outlook/Hotmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com', // Outlook's SMTP server
      port: 587, // Port used for secure connection (TLS)
      secure: false, // Set to false because port 587 doesn't use SSL
      auth: {
        user: process.env.EMAIL_USER, // Your live.com or Outlook email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email, // Sender's email address (from the form)
        to: process.env.EMAIL_USER, // Your email address (the recipient)
        subject: `New message from ${name}`, // Subject of the email
        text: message, // Plain text body
        html: `<p>You have a new message from <strong>${name}</strong>:</p><p>${message}</p>`, // HTML body
      });

      // Return success response
      return res
        .status(200)
        .json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
