import React from "react";
import imgCard from "./assets/image-omelette.jpeg";
import { prerationTime, ingredients, instructions, main } from "./data.js";

const Card = () => {
  return (
    <div className="mx-auto  bg-White md:px-8 md:py-6 flex flex-col gap-y-5 max-w-[40rem] my-0 md:my-12 md:rounded-[10px]">
      <img
        src={imgCard}
        alt="image food"
        className="w-full md:rounded-[15px] sm:rounded-none"
      />

      <article className="px-8 py-6 md:px-0 md:py-0 gap-y-5 flex flex-col">
        <section className="flex flex-col gap-y-4">
          <h1 className="text-4xl  text-DarkCharcoal font-YoungSerif font-extrabold">
            {main.title}
          </h1>
          <p className="text-WengeBrown">{main.paragraph}</p>

          <div className="p-5 bg-RoseWhite rounded-md">
            <h3 className="text-DarkRaspberry font-bold mb-2">
              Preparation Time
            </h3>
            <ul className="ml-2">
              {prerationTime.map((item, i) => (
                <li key={i} className="text-WengeBrown">
                  <span className="bg-Nutmeg h-1 rounded-full p-[3px] inline-block mr-4 leading-1"></span>
                  <span className="font-semibold ">{item.title}</span> {""}
                  {item.context}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-Nutmeg mb-3 font-YoungSerif">
              Ingredients
            </h2>
            <ul className="ml-4">
              {ingredients.map((item, i) => (
                <li key={i}>
                  <span className="bg-Nutmeg h-1 rounded-full p-[3px] inline-block mr-4 leading-1"></span>
                  <span className="text-WengeBrown">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <p className="border"></p>

        <section>
          <h2 className="text-2xl text-Nutmeg mb-3 font-semibold font-YoungSerif">
            Instructions
          </h2>
          <ol>
            {instructions.map((item, i) => (
              <li key={i}>
                <span className="mr-4 text-Nutmeg font-bold">{i + 1}.</span>
                <span className="font-semibold text-WengeBrown">
                  {item.title}
                </span>{" "}
                <span className="text-WengeBrown"> {item.context}</span>
              </li>
            ))}
          </ol>
        </section>
        <p className="border"></p>

        <section className="mb-4">
          <div>
            <h2 className="text-2xl font-semibold text-Nutmeg mb-3 font-YoungSerif">
              Nutrition
            </h2>
            <p className="text-WengeBrown">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div className="mt-4 flex flex-col gap-y-2">
              <div className="grid grid-cols-2 ml-4">
                <span className="text-WengeBrown">Calories</span>
                <span className="font-bold text-Nutmeg">277kcal</span>
              </div>
              <p className="border"></p>
              <div className="grid grid-cols-2 ml-4">
                <span className="text-WengeBrown">Carbs</span>
                <span className="font-bold text-Nutmeg">0g</span>
              </div>
              <p className="border"></p>
              <div className="grid grid-cols-2 ml-4">
                <span className="text-WengeBrown">Protein</span>
                <span className="font-bold text-Nutmeg">20g</span>
              </div>
              <p className="border"></p>
              <div className="grid grid-cols-2 ml-4">
                <span className="text-WengeBrown">Fat</span>
                <span className="font-bold text-Nutmeg">22g</span>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Card;
