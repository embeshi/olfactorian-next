import SearchBar from "../components/SearchBar"
import SearchItem from "./components/SearchItem"
import { sampleSearchResults } from "./data/sample"

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <main className="flex-1 grid gap-6 max-w-4xl lg:gap-12 items-start min-h-[calc(100vh_-_theme(spacing.6))_] [&:focus]:outline-none sm:p-6"> */}
        <div className="mx-auto w-full grid gap-2 px-24 [&:focus]:outline-none md:gap-12">
          <SearchBar/>
          <div className="w-full grid gap-6 sm:gap-4 md:gap-6 lg:gap-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-4 md:gap-6">
              {sampleSearchResults.map(({name, summary, type, category, tenacity}) => (
                <SearchItem {...{name, summary, type, category, tenacity}}/>
              ))}
            </div>
          </div>
        </div>
      {/* </main> */}
    </div>
  )
}