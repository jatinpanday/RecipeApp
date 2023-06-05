import React from 'react';
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title} <small style={{ fontSize: "16px" }}>{calories}</small> </h1>
            <img className={style.image} src={image} alt="" />
            <ol className={style.ingredients}>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
        </div>
    );
};
export default Recipe;