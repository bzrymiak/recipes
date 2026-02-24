import React from "react";
import TitleCluster from "@/components/titleCluster";
import Button from "@/components/button";

function page() {
  const ingredients = [
    { quantity: "2 cups", name: "chopped frozen broccoli, thawed" },
    { quantity: "6 ounces", name: "cheddar cubed" },
    { quantity: "12", name: "large eggs" },
    { quantity: "3/4 cup", name: "cottage cheese" },
    { quantity: "4 cloves", name: "garlic minced" },
    { quantity: "1 tsp", name: "salt" },
    { quantity: "1 tsp", name: "pepper" },
    { quantity: "6 pieces", name: "bacon, chopped and cooked crisp" },
  ];

  const notes = [
    "Store the frittata in a covered container in the fridge for up to 5 days or in the freezer for several months.",
    // "no notes.",
  ];

  const steps = [
    {
      step: "1",
      desc: "Preheat the oven to 375ºF. Lightly grease a 15x10 jelly roll pan and line with parchment. Grease the parchment.",
    },
    {
      step: "2",
      desc: "Scatter the pan with the chopped broccoli and cubed cheddar.",
    },
    {
      step: "3",
      desc: "In a blender or food processor, combine the eggs, cottage cheese, garlic, salt, and pepper. Blend on high until well combined.",
    },
    {
      step: "4",
      desc: "Pour over the broccoli and cheddar. Sprinkle the top with chopped bacon.",
    },
    {
      step: "5",
      desc: "Bake 20 to 30 minutes, until the frittata is cooked through in the center and firm to the touch. Remove and let cool 5 minutes before cutting into slices and serving.",
    },
  ];

  return (
    <div className="px overflow-hidden">
      <div className="pt-6 mb-2">
        <Button title="Return to Search" cta="./" />
      </div>

      <div className="py grid md:grid-cols-[max-content_2fr] gap-20">
        <section className="flex flex-col gap-12 static">
          <TitleCluster
            title="Sheet Pan Frittata"
            meal="breakfast"
            serv="8"
            prep="10 mins"
            time="40 mins"
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

          <div className="max-w-90 text-wrap">
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
