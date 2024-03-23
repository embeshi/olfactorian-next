import Image from "next/image";
import CollectionCarousel from "./components/CollectionCarousel";
import CollectionTile from "./components/CollectionTile";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator";

const sampleCollections = [
  {'name':'Rose', 'imgSrc':"https://img.freepik.com/free-photo/beautiful-rose-nature_23-2150737303.jpg"},
  {'name':'Amber', 'imgSrc':'https://i.pinimg.com/736x/99/1b/e4/991be49786890516523f5421476a89c3.jpg'},
  {'name':'Musk', 'imgSrc':'https://scent-dna.com/cdn/shop/products/white-musk-331275.jpg'},
  {'name':'Sandalwood', 'imgSrc':'https://cdn.shopify.com/s/files/1/0654/1467/files/image_ed2f2911-f404-48f6-90af-a1957b09bc11_1024x1024.png'}
]

export default function Home() {
  return (
    <main className="px-24">
      <CollectionCarousel/>
      <div>
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Popular Collections
          </h2>
          <p className="text-sm text-muted-foreground">
            Top picks for you. Updated daily.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {sampleCollections.map(({name, imgSrc}) => (
                <CollectionTile 
                key = {name}
                name = {name + " Common Materials" }
                summary ={`A collection of common aroma chemicals and natural to compose a ${name} Accord`}
                href="#"
                imgSrc={imgSrc}
              />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        <Separator className="my-4" />
        </div>
      </div>
    </main>
  );
}
