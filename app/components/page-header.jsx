"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PageHeader() {
  return (
    <header className="flex items-center px-24 h-14 border-b gap-4 lg:h-20">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
        Olfactorian
      </Link>
      <div className="flex-1 min-w-0 hidden md:flex">
        <form className="flex w-full rounded-lg border">
          <Button className="h-auto p-2 rounded-l-none" variant="icon">
            <SearchIcon className="h-4 w-4" />
            <span className="sr-only">Search the perfumery universe at work...</span>
          </Button>
          <Input className="w-full min-w-0 rounded-none" placeholder="Search..." type="search" />
        </form>
      </div>
      <Button size="sm">Login</Button>
    </header>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
