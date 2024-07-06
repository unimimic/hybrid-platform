"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"
import { useTransition } from 'react'
import { usePathname, useRouter } from '../navigation'

export function TranslateToggle() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function setLocale(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Languages className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLocale("zh-tw")}>
          zh-tw
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale("en")}>
          en
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}