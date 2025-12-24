import React from "react";
import Button from "@/components/button.js";

function navbar() {
  return (
    <div className="pb-28 md:pb-18">
      <header className="px pt-7 pb-4 flex flex-col md:flex-row gap-2 justify-between align-baseline">
        <a href="/">
          <h1 className="nav-text hover:text-brown">Recipe Book</h1>
        </a>
        <div className="flex flex-row flex-wrap gap-2">
          <Button title={"Breakfast"} cta={"/breakfast"} />
          <Button title={"Lunch"} cta={"/lunch"} />
          <Button title={"Dinner"} cta={"/dinner"} />
          <Button title={"Dessert"} cta={"/dessert"} />
        </div>
      </header>
    </div>
  );
}

export default navbar;
