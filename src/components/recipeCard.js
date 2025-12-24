import React from "react";

function recipeCard({ title, time, desc, img, cta }) {
  return (
    <a
      href={cta}
      className="border border-myGrey rounded-2xl overflow-hidden hover:bg-myBeige hover:ease-in-out duration-200 transition-all max-w-70"
    >
      <div className="img-container">
        <img
          src="/assets/marry-me-chicken.jpg"
          alt="recipe"
          width={1200}
          height={1200}
          className="w-full h-auto"
        />
      </div>

      <div className="p-8">
        <h3 className="mb-2">{title}</h3>
        <h4 className="caption">{time}</h4>

        <p>{desc ?? " "}</p>
      </div>
    </a>
  );
}

export default recipeCard;
