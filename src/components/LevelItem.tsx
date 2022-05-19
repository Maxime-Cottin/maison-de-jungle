import sun from "../assets/sun.svg";
import water from "../assets/water.svg";

interface LevelItemProps {
	isLight: boolean;
	level: number;
	name: string;
}

const LevelItem = ({ isLight, level, name }: LevelItemProps) => {
	const range = [1, 2, 3];

	return (
		<div
			className="flex pb-2"
			id={name.replace(" ", "-") + (isLight ? "-sun" : "-water")}
		>
			{range.map((rangeElem: any, key) =>
				level >= rangeElem ? (
					<img
						key={key}
						src={isLight ? sun : water}
						alt={(isLight ? "sun" : "water") + "-icon"}
						className="h-4 pr-1"
					/>
				) : null
			)}
		</div>
	);
};

export default LevelItem;
