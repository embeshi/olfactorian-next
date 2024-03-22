import Image from "next/image";
import { CollectionCarousel } from "./components/collection-carousel";

export default function Home() {
  return (
    <main className="px-24">
      <CollectionCarousel/>
    </main>
  );
}
