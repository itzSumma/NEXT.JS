import FoodCard from "@/components/FoodCard";


const FoodPage = async() => {
const res =await fetch ("https://phi-lab-server.vercel.app/api/v1/lab/foods");
const data =await res.json();
const foods = data.data
console.log(foods)

    return (
        <div>
            <h2 className="text-2xl text-center font-bold text-emerald-900  mt-10"><span className="text-emerald-700">Total dishes we have:</span>{foods.length}🍽️ items</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                   foods.map(food => <FoodCard key={food.id} food={food}>

                   </FoodCard>)
                }
            </div>
        </div>
    );
};

export default FoodPage;