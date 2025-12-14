import Image from "next/image";
import Button from "@/components/button.js";

export default function Home() {
  return (
    <div className="px py">
      

      <Button title={"testing"} cta={"https://stardewvalleywiki.com/Stardew_Valley_Wiki"}></Button>

      <section>
        <h1 className="mt-8">Recipe Book</h1>
        <h2>(digitized)</h2>
      </section>
    </div>
  );
}
