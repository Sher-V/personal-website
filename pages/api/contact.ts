import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async (req: NextApiRequest, res: NextApiResponse) =>
  new Promise<void>((resolve) => {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.EMAIL,
      to: "beingalwaysrightthere@gmail.com",
      subject: `Message From ${req.body.firstName} ${req.body.lastName}`,
      text: req.body.description + " | Sent from: " + req.body.email,
      html: `<div>${req.body.description}</div><p>Sent from:
    ${req.body.email}</p><p>${JSON.stringify(req.body, null, 3)}</p>`,
    };

    transporter.sendMail(mailData, function (err) {
      if (err) {
        console.log(err);
        res.send({
          success: false,
          message: "An error occurred. Please try again or come back later.",
        });
        resolve();
      } else {
        res.send({
          success: true,
          message: "Thanks for sending an email! I will contact you shortly.",
        });

        resolve();
      }
    });
  });
