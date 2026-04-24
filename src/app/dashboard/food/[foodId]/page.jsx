const FoodDetailPage = async ({ params }) => {
  const { foodId } = await params;
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();
  const {

    dish_name,
    image_link,
    alternative_names,
    main_ingredients,
    approximate_nutrition_per_serving,
    cuisine,
    cooking_steps,
  } = data.data;
  // console.log("food in food detail page",food)
 const nutrition = approximate_nutrition_per_serving;
  return (
    <div className="mx-auto container  mt-10  rounded-2xl">
      <div>
        <h2 className="text-2xl font-bold text-center mb-4 text-emerald-700">
          Showing details of you Food:{foodId}
        </h2>
        <div className="border p-5 rounded-2xl border-zinc-600 shadow-md  text-center ">
          <h2 className="text-xl font-bold text-slate-600 text-center">{dish_name}</h2>

          <p className=" text-gray-900 text-md font-medium"><span className="text-xl font-semibold">Cuisine: </span>{cuisine}</p>
          <div className="flex justify-center">
            <img src={image_link} alt={dish_name} width={200} height={200} />
          </div>

<div className="text-center space-y-2">
    <p className="text-md font-medium text-gray-600"><span className="text-lg font-bold">Alternative Names:</span>{alternative_names}</p>
<p className="text-md font-medium text-emerald-700"><span className="text-lg font-bold text-emerald-800">Main Ingredients:  </span> {main_ingredients}</p>
<h3 className="text-xl font-semibold ">Nutrition:</h3>
     
</div>
 <div className="flex justify-center">
  <ul className="list-disc text-md font-medium text-gray-800">
    <li>Calories: {nutrition.calories}</li>
    <li>Protein: {nutrition.protein}</li>
    <li>Carbs: {nutrition.carbohydrates}</li>
    <li>Fat: {nutrition.fat}</li>
    <li>Fiber: {nutrition.fiber}</li>
  </ul>
</div>
<div>

<p className="text-md font-medium text-emerald-700"><span className="text-lg font-bold text-emerald-800">Cooking Steps:</span>{cooking_steps}</p>
</div>
        
        </div>
      </div>
    </div>
  );
};

export default FoodDetailPage;
