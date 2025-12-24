import React from "react";
import TitleCluster from "@/components/titleCluster";
import Button from "@/components/button";

function page() {
  const ingredients = [
    { quantity: "Group 1", name: "↓ " },
    { quantity: "1 cup", name: "butter" },
    { quantity: "1/2 cup", name: "sugar" },
    { quantity: "2", name: "eggs" },
    { quantity: "2 1/2 tsp", name: "vanilla" },
    { quantity: "1 1/2 cups", name: "brown sugar" },
    { quantity: "Group 2", name: "↓" },
    { quantity: "2 1/2 - 3 cups", name: "flour" },
    { quantity: "2/4 tsp", name: "salt" },
    { quantity: "1 tsp", name: "baking powder" },
    { quantity: "1 tsp", name: "baking soda" },
    { quantity: " ", name: "chocolate chips" },
  ];

  const notes = ["No notes for this recipe."];

  const steps = [
    {
      step: "1",
      desc: "Preheat the oven to 350°. Mix ingredient groups #1 and #2 separately.",
    },
    {
      step: "2",
      desc: "Combine the groups and add chocolate chips.",
    },
    {
      step: "3",
      desc: 'Place golfvall sized portions 2" apart. Bake 9-10 mins or until edges are light brown.',
    },
  ];

  return (
    <div className="px overflow-hidden">
      <div className="pt-6 mb-2">
        <Button title="Return to Search" cta="./" />
      </div>

      <div className="py grid md:grid-cols-[max-content_2fr] gap-20">
        <section className="flex flex-col gap-12 max-w-94">
          <TitleCluster
            title="Chewy Chocolate Chip Cookies"
            meal="dessert"
            serv="24?"
            prep="10 mins"
            time="20 mins"
          />

          <div>
            <h4 className="mb-4">Ingredients</h4>

            {ingredients.map((item, key) => (
              <ul key={item.name}>
                <li className="flex flex-row items-center gap-4">
                  <input
                    type="checkbox"
                    id={key}
                    name={item.name}
                    value={item.name}
                    className="min-w-4.5 min-h-4.5 accent-[#7d746e]"
                  />
                  <label className="flex flex-row flex-wrap">
                    {item.quantity !== " " ? (
                      <p>
                        {" "}
                        <span className="font-bold capitalize mr-2">
                          {item.quantity}
                        </span>
                        {item.name}
                      </p>
                    ) : (
                      <p>{item.name}</p>
                    )}
                  </label>
                </li>
              </ul>
            ))}
          </div>

          <div>
            <h4 className="mb-4">Notes</h4>
            <div className="gap-4">
              {notes.map((notes) => (
                <ul key={notes}>
                  <li className="gap-10">{notes}</li>
                </ul>
              ))}
            </div>
          </div>
        </section>

        <section className="md:mt-25 flex flex-col gap-6 max-w-140 overflow-scroll">
          {steps.map((item, key) => (
            <div key={item.step}>
              <ul>
                <li className="flex flex-row items-center gap-4">
                  <input
                    type="checkbox"
                    id={key}
                    name={item.name}
                    value={item.name}
                    className="min-w-4.5 min-h-4.5 accent-[#7d746e]"
                  />
                  <h4>Step {item.step}</h4>
                </li>
              </ul>

              <p>{item.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default page;
