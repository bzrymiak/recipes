import React from "react";
import Button from "@/components/button.js";
import RecipeCard from "@/components/recipeCard";

function page() {
  const tags = [
    {
      title: "Quick Meals",
      cta: " ",
    },
    {
      title: "Sandwiches",
      cta: " ",
    },
    {
      title: "Salads",
      cta: " ",
    },
  ];

  const recipes = [
    // {
    //   title: "Marry Me Chicken",
    //   time: "20 min",
    //   desc: "Chicken & Pasta",
    //   img: "assets/marry-me-chicken.jpg",
    //   cta: "/dinner/marry-me-chicken",
    //   tag: "gf",
    // },
  ];

  return (
    <div className="px py">
      <h2 className="mt-8 mb-6">Lunch</h2>

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
