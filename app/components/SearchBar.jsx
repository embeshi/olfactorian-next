"use client"

import { Input } from "@/components/ui/input"
import Link from "next/link"

const suggestions = [
    {'id': 'rose', 'value':'Rose'},
    {'id': 'amber', 'value':'Amber'},
    {'id': 'oriental', 'value':'Oriental'},
    {'id': 'gardenia', 'value':'Gardenia'},
    {'id': 'incense', 'value':'Incense'},
    {'id': 'clean-musk', 'value': 'Clean Musk'}
]

export default function SearchBar() {
  return (
    <div className="flex flex-col items-center pt-8">
      <div className="w-full max-w-[600px]">
        <div className="relative">
          <SearchIcon className="absolute inset-y-0 w-4 h-4 ml-3 my-auto opacity-50" />
          <Input className="pl-8" placeholder="Search for anything..." type="search" />
        </div>
      </div>
      <section className="flex flex-wrap gap-4 mt-4">
        {suggestions.map(({id, value}) => (
                <Link
                  id={id}
                  className="rounded-full bg-gray-100 px-3 py-2 text-xs transition-colors hover:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50"
                  href={`/search?text=${value}`}
                >
                  {value}
                </Link>
        ))}
      </section>
    </div>
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
