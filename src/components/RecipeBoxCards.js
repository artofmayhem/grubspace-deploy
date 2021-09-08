import React from "react";

export default function RecipeCards(props) {
  const {
    recipe_name,
    recipe_source,
    submitted_by,
    recipe_description,
    image_source,
    ingredients,
    instructions,
    category_name,
  } = props;

  return (
    <div
      key="1"
      className={'bg-gray-500'}
      style={{
        margin: "3vh",
        color: 'white',
        opacity: "0.9",
        width: "47vw",
        minWidth: 375,
        padding: "5vh 0",
        boxShadow: "0 0 2vh black",
        fontSize: '1.2rem'
      }}
    >
      <h4 className={'text-4xl'} >{recipe_name}</h4>
      <h6 className={'text-xl'}>"{recipe_description}"</h6>
      <img
        src={image_source}
        alt={recipe_name}
        style={{
          width: "20vw",
          minWidth: '375px',
          margin: "1rem auto",
          border: "2.5vh solid white",
        }}
      />
      <h5><strong className={'mx-2'}>RECIPE SOURCE:</strong> {recipe_source}</h5>
      <h6><strong className={'mx-2'}>SUBMITTED BY:</strong> {submitted_by}</h6>
      <p><strong className={'mx-2'}>CATEGORY:</strong> {category_name}</p>
      <div
        className="flex flex-row flex-wrap justify-center"
        style={{
          margin: "1vh 1vw",
        }}
      >
        <div className="flex flex-col justify-center">
          {ingredients.map((item, idx) => {
            return (
              <p style={{ padding: "0.7em 0" }} key={idx}>
                {item.quantity} {item.ingredient}
              </p>
            );
          })}
        </div>
        <div
          className="flex flex-row flex-wrap-reverse justify-start bg-gray-600 text-white py-10 px-6 text-center"
          style={{ marginBottom: "1rem", border: '3px solid white' }}
        >
         
          {instructions.map((item, idx) => {
            return (
              <p className={'text-xl'} style={{margin: '1rem auto' }} key={idx}>
                {item.step_number}: {item.instruction}
              </p>
            );
          })} 
          <h3 className={'text-3xl'} style={{margin: '10px auto'}}>-Instructions-</h3>
        </div>
      </div>
    </div>
  );
}
