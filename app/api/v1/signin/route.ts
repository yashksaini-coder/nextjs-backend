import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

export async function POST (req: Request, res: Response) {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).send({ message: 'Email and password are required' })
  }
  const user = users.find(user => user.email === email && user.password === password)
  if (!user) {
    return res.status(401).send({ message: 'Invalid email or password' })
  }
  const token = jwt.sign({ email }, 'secret')
  res.send({ token })
}