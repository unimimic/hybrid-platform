"use client"

import '@/styles/globals.css'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();
    let userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    // Make call to backend to create user
    const res = await fetch("http://localhost:3000/api/user/create", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res)

    if (res.ok) {
      const data = await res.json()
      alert(data.message)
      router.push("/login")
      // registration success
    } else {
      const data = await res.json()
      alert(data.message)
      //registration faled
    }
  }

  return (
    <>
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">
                User Name
              </Label>
              <div className="mt-2">
                <Input
                  id="name"
                  name="name"
                  type="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">
                Email address
              </Label>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">
                  Password
                </Label>
              </div>
              <div className="mt-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Button type="submit" className=" w-full">Sign Up</Button>
            </div>
          </form>

          <div className='mt-2'>
            <p className="px-8 text-center text-sm text-muted-foreground">
              <Link
                href="/login"
                className="hover:text-brand underline underline-offset-4"
              >
                have an account? Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}