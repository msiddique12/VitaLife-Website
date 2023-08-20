import React from "react";

const Recipe = ({ title, image, ingredients}) => {
    return (
        <div className="border rounded-lg shadow-md m-5 flex flex-col justify-around items-center min-w-[40%] bg-[#FFFFF0]">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className="border rounded-full w-300 h-300 flex flex-col justify-around bg-ivory items-center" src={image} alt=""/>
        </div>
    )
}

export default Recipe