import React from "react";
import Button from "@/components/button.js";
import RecipeCard from "@/components/recipeCard";

function page() {
  const tags = [
    {
      title: "Cookies",
      cta: " ",
    },
    {
      title: "Baking",
      cta: " ",
    },
    {
      title: "Party Food",
      cta: " ",
    },
  ];

  const recipes = [
    {
      title: "Chewy Chocolate Chip Cookies",
      time: "20 min",
      desc: "Cookies",
      img: "assets/chewy-cookies.jpg",
      cta: "/dessert/chewy-cookies",
      tag: "cookies",
    },
  ];

  return (
    <div className="px py">
      <h2 className="mt-8 mb-6">Dessert</h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-2 pb-8">
        {tags.map((item, key) => (
          <div key={item.title}>
            <Button title={item.title} cta={item.cta}></Button>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        {recipes.map((item, key) => (
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
