/**
 * @swagger
 * /api:
 *   get:
 *     tags:
 *      - default
 *     description: Returns
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  console.log("adfasdf")
  return Response.json(data)
}

/**
 * @swagger
 * /api:
 *   post:
 *     tags:
 *      - default
 *     description: Returns
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function POST() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  console.log("adfasdf")
  return Response.json(data)
}