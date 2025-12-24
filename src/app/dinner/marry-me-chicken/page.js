import React from "react";
import TitleCluster from "@/components/titleCluster";
import Button from "@/components/button";

function page() {
  const ingredients = [
    { quantity: "3 tbsp", name: "extra-virgin olive oil" },
    { quantity: "4", name: "boneless, skinless chicken breasts" },
    { quantity: " ", name: "kosher salt" },
    { quantity: " ", name: "black pepper" },
    { quantity: "2", name: "garlic cloves" },
    { quantity: "1 tbsp", name: "fresh thyme leaves" },
    { quantity: "1 tsp", name: "crushed red pepper flakes" },
    { quantity: "3/4 cup", name: "low-sodium chicken broth" },
    { quantity: "1/2 cup", name: "finely-chopped sun-dried tomatoes" },
    { quantity: "1/2 cup", name: "heavy cream" },
    { quantity: "1/4 cup", name: "finely grated parmesan" },
    { quantity: " ", name: "torn fresh basil, for serving" },
  ];

  const notes = ["No notes for this recipe."];

  const steps = [
    {
      step: "1",
      desc: "Arrange a rack in center of oven; preheat to 375°. In a large ovenproof skillet over medium-high heat, heat 1 Tbsp. oil. Generously season chicken with salt and black pepper and cook, turning halfway through, until golden brown, about 5 minutes per side. Transfer chicken to a plate.",
    },
    {
      step: "2",
      desc: "In same skillet over medium heat, heat remaining 2 Tbsp. oil. Stir in garlic, thyme, and red pepper flakes. Cook, stirring, until fragrant, about 1 minute. Stir in broth, tomatoes, cream, and Parmesan; season with salt. Bring to a simmer, then return chicken and any accumulated juices to skillet.",
    },
    {
      step: "3",
      desc: "Transfer skillet to oven. Bake chicken until cooked through and an instant-read thermometer inserted into thickest part registers 165°, 10 to 12 minutes.",
    },
    {
      step: "4",
      desc: "Arrange chicken on a platter. Spoon sauce over. Top with basil.",
    },

    {
      step: "5",
      desc: "Arrange a rack in center of oven; preheat to 375°. In a large ovenproof skillet over medium-high heat, heat 1 Tbsp. oil. Generously season chicken with salt and black pepper and cook, turning halfway through, until golden brown, about 5 minutes per side. Transfer chicken to a plate.",
    },
    {
      step: "6",
      desc: "Arrange a rack in center of oven; preheat to 375°. In a large ovenproof skillet over medium-high heat, heat 1 Tbsp. oil. Generously season chicken with salt and black pepper and cook, turning halfway through, until golden brown, about 5 minutes per side. Transfer chicken to a plate.",
    },
  ];

  return (
    <div className="px overflow-hidden">
      <div className="pt-8 md:pt-12 mb-8">
        <Button title="Return to Search" cta="./" />
      </div>

      <div className="py grid md:grid-cols-[max-content_2fr] gap-20">
        <section className="flex flex-col gap-12 static">
          <TitleCluster
            title="Marry Me Chicken"
            meal="dinner"
            serv="4"
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

          <div>
            <h4 className="mb-4">Notes</h4>
            <div className="gap-4">
              {notes.map((notes) => (
                <ul>
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
