import logo from "../assets/logo.png";

const Banner = () => {
	return (
		<header className="text-black text-right p-8 border-b-2 border-black flex justify-end flex-row items-center">
			<img src={logo} alt="La maison jungle" className="h-11 w-11" />
			<h1 className="pl-8 text-3xl font-bold">La maison jungle</h1>
		</header>
	);
};

export default Banner;
