import React from "react";
import Button from "./Button";

function Header({ name }) {
	return (
		<header className='header'>
			<h1>{name}'s Tasks</h1>
			<Button color='black' />
		</header>
	);
}

export default Header;
