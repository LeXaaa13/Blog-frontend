import React from "react";

import "./HeaderBlock.scss";

const HeaderBlock = (props) => {
	const { title, description, imageUrl } = props;
	return (
		<div
			className="header-block"
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			<div className="container">
				<div className="header-block__overlay">
                    
                </div>
				<div className="header-block__center">
					<h1>{title}</h1>
					<h3>{description}</h3>
				</div>
			</div>
		</div>
	);
};

export default HeaderBlock;
