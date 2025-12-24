import React from "react";
import Button from "@/components/button.js";

function navbar() {
  return (
    // <div className="px pt-7 flex flex-row justify-between align-baseline mb-16">
    <div className="pb-18">
      <header className="px pt-7 pb-4 flex flex-row justify-between align-baseline">
        <a href="/">
          <h1 className="nav-text hover:text-brown fixed">Recipe Book</h1>
        </a>
        <div>
          <Button title={"Dinner"} cta={"/dinner"} />
        </div>
      </header>
    </div>
  );
}

export default navbar;
