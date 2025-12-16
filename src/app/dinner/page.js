import React from 'react'
import Button from "@/components/button.js";
import RecipeCard from '@/components/recipeCard';

function page() {
    const tags = [
        {
            title: "Quick Meals",
            cta: " "
        },
        {
            title: "Low Carb",
            cta: " "
        },
        {
            title: "Sides",
            cta: " "
        },
    ];

    const recipes = [
        {
            title: "Marry Me Chicken",
            time: "20 min",
            desc: "Chicken & Pasta",
            img: "assets/marry-me-chicken.jpg",
            cta: "/dinner/marry-me-chicken",
            tag: "gf"
        },

        {
            title: "Chicken",
            time: "20 min",
            desc: "Chicken & Pasta",
            img: "assets/marry-me-chicken.jpg",
            cta: "/dinner/marry-me-chicken",
            tag: "gf"
        },

    ];

  return (
    <div className="px py">
        <h2 className="mt-8 mb-6">Dinner</h2>

        <div className="flex flex-row gap-2 pb-8">
            {tags.map((item, key) => (

                <div key={item.title}>
                    <Button title={item.title} cta={item.cta}></Button>
                </div>
            ))}
        </div>

        <div className="flex flex-row gap-8">
            {recipes.map((item, key) => (
                // <div id={item.tag} key={item.title} className="max-w-60">
                    <RecipeCard 
                    title={item.title}
                    time={item.time}
                    desc={item.desc}
                    img={item.img}
                    cta={item.cta}
                    id={item.tag}
                    key={item.title}/>
                // {/* </div> */}
            ))}
            
        </div>
    </div>
  )
}

export default page