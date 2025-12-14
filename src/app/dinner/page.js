import React from 'react'
import Button from "@/components/button.js";

function page() {
    const tags = [
        {
            title: "Gluten-Free",
            cta: "/"
        },
        {
            title: "Low-Carb",
            cta: "/"
        },
        {
            title: "Quick Meals",
            cta: "/"
        },
    ];

  return (
    <div>
        <section className="px py">
        <h2 className="mt-8 mb-6">Dinner</h2>

        <div className="flex flex-row gap-2">
            {tags.map((item, key) => (

                <div key={item.title}>
                    <Button title={item.title} cta={item.cta}></Button>
                </div>
            ))}
        </div>
        </section>

    </div>
  )
}

export default page