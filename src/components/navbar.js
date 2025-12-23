import React from 'react'
import Button from "@/components/button.js";

function navbar() {
  return (
    <div className="px pt-7 flex flex-row justify-between align-baseline">
        <a href="/">
            <h1 className="nav-text hover:text-brown">Recipe Book</h1>
        </a>
        <div>
            <Button title={"Dinner"} cta={"/dinner"}/>
        </div>
    </div>
  )
}

export default navbar