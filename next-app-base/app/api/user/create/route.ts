import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";
import { hash } from "bcrypt"

const prisma = new PrismaClient()

/**
 * @swagger
 * /api/user:
 *   post:
 *     tags:
 *      - DB user
 *     description: Returns
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function POST(request: Request) {
  const { name, email, password } = await request.json()
  const hashPassword = await hash(password, 12)
  
  if (!name || !email || !password) {
    return NextResponse.json({message: "invalid inputs"}, {status: 400})
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    }
  })
  
  if (user) return NextResponse.json({message: "email exits!!"}, {status: 400})


  if (password.length < 6) {
    return NextResponse.json({message: "password length should be more than 6 characters"}, {status: 400})
  }

  try {
    const user = await prisma.user.create({
      data: { name, email, password: hashPassword },
    });
    return NextResponse.json({message: "done"}, {status: 201})
  } catch (e) {
    return NextResponse.json({message: e}, {status: 400})
  }
}
