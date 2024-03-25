"use client"

import Link from "next/link"

export default function CollectionTile({name, summary, href, imgSrc}) {
  return (
    // <div className="w-[350px] rounded-md border border-gray-200">
        // <div className="w-[350px] p-4 flex items-center justify-center rounded-lg border border-gray-200">
            <div className="w-[270px] max-w-sm grid gap-2 flex items-center justify-center rounded-lg hover:bg-elevation-2 shadow-elevation-1 duration-200 hover:-translate-y-1 hover:shadow-elevation-2">
                <Link className="aspect-w-1/1 overflow-hidden rounded-lg" href="#">
                    <img
                        alt="Collection cover"
                        className="object-cover"
                        height={400}
                        src={imgSrc}
                        style={{
                        aspectRatio: "300/400",
                        objectFit: "cover",
                        }}
                        width={400}
                    />
                </Link>
                <div className="space-y-1 px-1">
                    <Link className="line-clamp-2 hover:underline hover:line-clamp-none" href={href}>
                        <h3 className="font-medium leading-none">{name}</h3>
                    </Link>
                    <div className="text-xs text-muted-foreground dark:text-gray-400">
                        {summary}
                    </div>
                </div>
            </div>
        // </div>   
    // </div>
  )
}

