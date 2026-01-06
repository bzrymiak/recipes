"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/button.js";
import RecipeCard from "@/components/recipeCard";

// const tags = [
//   {
//     title: "Cookies",
//     cta: " ",
//   },
//   {
//     title: "Baking",
//     cta: " ",
//   },
//   {
//     title: "Chocolate",
//     cta: " ",
//   },
// ];

const allCards = [
  {
    title: "Chewy Chocolate Chip Cookies",
    time: "20 min",
    desc: "Cookies",
    img: "assets/chewy-cookies.jpg",
    cta: "/dessert/chewy-cookies",
    category: ["COOKIES", "CHOCOLATE"],
  },
  {
    title: "Häagen-Dazs Ice Cream Truffles",
    time: "120 min",
    desc: "Ice Cream Treat",
    img: "assets/hd-truffles.png",
    cta: "/dessert/hd-truffles",
    category: ["ICE CREAM", "CHOCOLATE"],
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
      <h2 className="mt-8 mb-6">Dessert</h2>

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
          value="COOKIES"
        >
          Cookies
        </button>
        <button
          onClick={handleBtns}
          className="py-2 px-4 rounded-4xl border-myGrey border max-w-max bg-myBeige hover:bg-hover duration-300 ease-in-out"
          type="button"
          value="CHOCOLATE"
        >
          Chocolate
        </button>
        <button
          onClick={handleBtns}
          className="py-2 px-4 rounded-4xl border-myGrey border max-w-max bg-myBeige hover:bg-hover duration-300 ease-in-out"
          type="button"
          value="ICE CREAM"
        >
          Ice Cream
        </button>
      </section>

      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        {card.map((card, key) => (
          <RecipeCard
            key={card.title}
            title={card.title}
            time={card.time}
            desc={card.desc}
            img={card.img}
            cta={card.cta}
            id={card.tag}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
