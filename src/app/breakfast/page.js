"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/button.js";
import RecipeCard from "@/components/recipeCard";

const allCards = [
  {
    title: "Sheet Pan Frittata",
    time: "20 min",
    desc: "High-Protein Veggies",
    img: "assets/frittata.jpg",
    cta: "/breakfast/frittata",
    category: ["SAVOURY", "HIGH PROTEIN"],
  },
];

function page() {
  const [card, setCards] = useState(allCards);
  const [currentCard, setCurrentCard] = useState("All");

  const handleBtns = (e) => {
    let word = e.target.value;
    setCurrentCard(word);
  };

  useEffect(() => {
    if (currentCard === "All") {
      setCards(allCards);
    } else {
      const filtered = allCards.filter((card) => {
        return (
          card.category === currentCard || card.category.includes(currentCard)
        );
      });
      setCards(filtered);
    }
  }, [currentCard]);

  return (
    <div className="px py">
      <h2 className="mt-8 mb-6">Breakfast</h2>

      {/* <div className="flex flex-col md:flex-row gap-6 md:gap-2 pb-8">
        {tags.map((item, key) => (
          <div key={item.title}>
            <Button title={item.title} cta={item.cta}></Button>
          </div>
        ))}
      </div> */}

      <section className="flex flex-col md:flex-row gap-6 md:gap-2 pb-8">
        <button
          onClick={handleBtns}
          className="py-2 px-4 rounded-4xl border-myGrey border max-w-max bg-myBeige hover:bg-hover duration-300 ease-in-out"
          type="button"
          value="All"
        >
          View All
        </button>
        <button
          onClick={handleBtns}
          className="py-2 px-4 rounded-4xl border-myGrey border max-w-max bg-myBeige hover:bg-hover duration-300 ease-in-out"
          type="button"
          value="SAVOURY"
        >
          Savoury
        </button>
        <button
          onClick={handleBtns}
          className="py-2 px-4 rounded-4xl border-myGrey border max-w-max bg-myBeige hover:bg-hover duration-300 ease-in-out"
          type="button"
          value="SWEET"
        >
          Sweet
        </button>
        <button
          onClick={handleBtns}
          className="py-2 px-4 rounded-4xl border-myGrey border max-w-max bg-myBeige hover:bg-hover duration-300 ease-in-out"
          type="button"
          value="HIGH PROTEIN"
        >
          High Protein
        </button>
      </section>

      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        {card.map((item, key) => (
          <RecipeCard
            title={item.title}
            time={item.time}
            desc={item.desc}
            img={item.img}
            cta={item.cta}
            id={item.tag}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
