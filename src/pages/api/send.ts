/* eslint-disable import/no-anonymous-default-export */
import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = JSON.parse(req.body);
  console.log('body', { name, email, message });
  if (req.method === 'POST') {
    const msg = `
    Name: ${name}\r\n
  Email: ${email}\r\n
  Message: ${message}\r\n
  `;
    console.log('message', msg);

    const data = {
      to: 'marcokammer59@gmail.com',
      from: 'marcokammer59@gmail.com',
      subject: 'New web form message',
      text: msg,
      html: msg.replace(/\r\n/g, '<br>'),
    };
    // try {
    // await sgMail.send(data);
    console.log(data);
  }
  return res.status(200).json({ status: 'OK' });
  // } catch (err) {
  //   return res.status(500).json({
  //     error: (err as Error).message,
  //   });
  // }
}
