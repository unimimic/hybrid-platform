"use client"

import { LayoutDashboard } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'


export function SideBar() { 
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <LayoutDashboard className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click s
          </SheetDescription>
        </SheetHeader>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Main Page</AccordionTrigger>
              <AccordionContent>
                <Link href="/about">
                  <div>
                    About
                  </div>
                </Link>
                <Link href="/api-doc">
                  <div>
                    Api
                  </div>
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </SheetContent>
    </Sheet>
  )
}