"use client"
import { CardContent, CardFooter, Card } from "@/components/ui/card"

export default function SearchItem({name, summary, type, category, tenacity}){
    return (
        <a href="#" className="group hover:-translate-y-1 hover:shadow-elevation-2">
            <Card className="group-hover:hover:shadow-md group-hove:bg-elevation-2">
                <CardContent className="p-4 md:p-6 grid gap-4">
                <h3 className="text-slate-900 text-md font-semibold">{name}</h3>
                <p className="text-slate-500 text-xs text-ellipsis overflow-hidden line-clamp-4">
                    {summary}
                </p>
                </CardContent>
                <CardFooter className="border-t flex py-2 px-4">
                <div className="flex space-x-4">
                    <div className="flex space-x-1">
                    <div className="flex items-center text-muted-foreground">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9C3 6.5 4.5 4.25 7.5 1.5C10.5 4.25 12 6.5 12 9C12 11.4853 9.98528 13.5 7.5 13.5C5.01472 13.5 3 11.4853 3 9ZM10.9524 8.30307C9.67347 7.82121 8.2879 8.46208 6.98956 9.06259C5.9327 9.55142 4.93365 10.0135 4.09695 9.82153C4.03357 9.55804 4 9.28294 4 9C4 7.11203 5.02686 5.27195 7.5 2.87357C9.66837 4.97639 10.725 6.65004 10.9524 8.30307Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                        {type}
                    </div>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">                     
                        {category}
                    </div>
                    <div className="text-xs text-muted-foreground text-right">{tenacity}</div>
                </div>
                </CardFooter>
            </Card>
        </a>
    )
}