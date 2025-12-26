import React from "react";
import TitleCluster from "@/components/titleCluster";
import Button from "@/components/button";

function page() {
  const ingredients = [
    {
      quantity: "500mL",
      name: "Häagen-Dazs Irish Cream Biscotti ice cream, slightly softened",
    },
    { quantity: "250mL", name: "fresh raspberries" },
    { quantity: "100g", name: "Swiss dark chocolate, chopped" },
  ];

  const notes = ["No notes for this recipe."];

  const steps = [
    {
      step: "1",
      desc: "Line two small baking sheets with parchment paper or foil. Freeze for 10 minutes.",
    },
    {
      step: "2",
      desc: "Fold raspberries into ice cream. Freeze for 4 hours or overnight.",
    },
    {
      step: "3",
      desc: "Using a melon baller, scoop the ice cream to form 1-inch balls and place on sheet.",
    },
    {
      step: "4",
      desc: "Return sheet to freezer. Repeat this process with second sheet. Freeze balls for 30 minutes or until solid.",
    },
    {
      step: "5",
      desc: "Melt chocolate in the microwave or in the top of a double boiler. Dip chilled balls, one at a time, into the melted chocolate. Remove with a fork, letting the excess chocolate drip back into the bowl. Freeze for 1 hour before serving.",
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
            title="Häagen-Dazs Ice Cream Truffles"
            meal="dessert"
            serv="10"
            prep="20 mins"
            time="60 mins"
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
