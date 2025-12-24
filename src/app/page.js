import Image from "next/image";
import Button from "@/components/button.js";

export default function Home() {
  return (
    <div>
      <section className="px py">
        <h1 className="mt-8">Cookbook</h1>
        <h2 className="text-brown caption">(digitized)</h2>
      </section>

      <section className="pb-16 flex flex-row justify-between align-baseline gap-60">
        <div className="px flex flex-col justify-end gap-2">
          <h3>Navigation</h3>
          <Button title={"Breakfast"} cta={"#"}></Button>
          <Button title={"Lunch"} cta={"#"}></Button>
          <Button title={"Dinner"} cta={"/dinner"}></Button>
          <Button title={"Dessert"} cta={"/dessert"}></Button>
        </div>

        <Image
          src="/assets/home-salad.jpg"
          width="1302"
          height="736"
          alt="pasta salad"
          className="w-auto h-full overflow-hidden max-h-[60vh]"
        ></Image>
      </section>
    </div>
  );
}
