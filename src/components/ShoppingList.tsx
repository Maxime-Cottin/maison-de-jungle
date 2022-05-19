import { useState } from "react";
import { plantList } from "../datas/plantList";
import LevelItem from "./LevelItem";

const ShoppingList = () => {
	// console.log(plantList);

	function levelDesc(light: number) {
		switch (light) {
			case 1:
				return "peu";
			case 2:
				return "modérément";
			case 3:
				return "beaucoup";
			default:
				break;
		}
	}

	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	return (
		<ul className="flex flex-wrap gap-8">
			{plantList.map((plant, key) => (
				<li key={key} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
					<div>
						<img
							src={plant.cover}
							alt={"Photo de " + plant.name}
							className="h-64 w-64 rounded-2xl"
						/>
						<p>{plant.name}</p>
						<LevelItem isLight={true} level={plant.light} name={plant.name} />
						<LevelItem isLight={false} level={plant.water} name={plant.name} />
					</div>
					<p
						id={plant.name.replace(" ", "-") + "-popup"}
						className={`px-16 py-8 bg-white rounded-2xl border-black border absolute ${
							hovered ? `block` : `hidden`
						}`}
					>
						Le {plant.name} à besoin de{" "}
						<span className="text-orange-500 font-bold">
							{levelDesc(plant.light)} de soleil
						</span>{" "}
						et{" "}
						<span className="text-blue-500 font-bold">
							{levelDesc(plant.water)} d'eau
						</span>
					</p>
				</li>
			))}
		</ul>
	);
};

export default ShoppingList;
