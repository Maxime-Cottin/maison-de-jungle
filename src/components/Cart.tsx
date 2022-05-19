const Cart = () => {
	return (
		<div className="p-8 text-white bg-[#31b572]">
			<h2 className="text-2xl font-bold">Panier</h2>
			<ul>
				<li>Monstera : 8€</li>
				<li>Lierre : 10€</li>
				<li>Fleurs : 15€</li>
			</ul>
			<p className="text-lg font-bold">Total : 33€</p>
		</div>
	);
};

export default Cart;
