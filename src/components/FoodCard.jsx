import { StarFill } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
  const {
    id,
    dish_name,
    image_link,
    category,
    rating,
    price,
    origin_and_popularity,
  } = food;

  return (
    <div className="container mx-auto p-3">
      <Card className=" w-full l md:flex-row border border-zinc-200 bg-white overflow-hidden rounded-2xl shadow-md hover:shadow-md transition">
        {/* IMAGE */}
        <div className="relative h-[120px] w-[120px] shrink-0">
          <Image
            src={image_link}
            alt={dish_name}
            fill
            sizes="120px"
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col p-4">
          <div className="flex-1">
            <h2 className="text-lg font-bold ">{dish_name}</h2>
            <p className="text-xs text-zinc-400 font-medium">
              {origin_and_popularity}
            </p>

            <h3 className="text-lg text-gray-600 capitalize font-semibold">
              {category}
            </h3>
          </div>

          {/* FOOTER */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-emerald-700">
                ${price}
              </span>

              <div className="flex items-center gap-1">
                <StarFill className="size-4 fill-yellow-400 text-yellow-400" />
                <StarFill className="size-4 fill-yellow-400 text-yellow-400" />
                <span className="text-xl font-semibold text-gray-600">
                  {rating}
                </span>
              </div>
            </div>

            <Link href={`/dashboard/food/${id}`}>
              <Button
                size="sm"
                className="bg-emerald-600 text-white hover:bg-emerald-700">
                More Details
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FoodCard;
