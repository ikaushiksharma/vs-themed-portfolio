// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    let { name, email, message } = req.body;
    // console.log(name, email, message);
    const newMessage = await prisma.users.create({
      data: {
        email,
        name,
        message,
      },
    });
  } catch (e: any) {
    return res.send({ status: false, error: e.message });
  }
  return res.json({
    status: true,
    message: 'Your message has been sent',
  });
}
