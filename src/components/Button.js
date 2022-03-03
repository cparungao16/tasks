import React from "react";

const Button = ({ color }) => {
	return (
		<button style={{ backgroundColor: color }} className='btn'>
			Add
		</button>
	);
};

export default Button;
