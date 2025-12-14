import Image from "next/image";
import Button from "@/components/button.js";

export default function Home() {
  return (
    <div>
      
      

      <section className="px py">
        <h1 className="mt-8">Recipe Book</h1>
        <h2>(digitized)</h2>
      </section>

      <section className="px py">
        <Button title={"view all"} cta={"https://stardewvalleywiki.com/Stardew_Valley_Wiki"}></Button>

      </section>
    </div>
  );
}
