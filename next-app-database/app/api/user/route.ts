import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

/**
 * @swagger
 * /api/user:
 *   get:
 *     tags:
 *      - DB user
 *     description: Returns
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET() {
  const posts = await prisma.user.findMany()
  return Response.json(posts)
}

