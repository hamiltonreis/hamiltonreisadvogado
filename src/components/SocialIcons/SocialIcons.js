import React from 'react';

import './SocialIcons.css'

const SocialIcons = (props) => {
	return (
		<div className={props.class}>
			<a target="_blank" title="Nossa página no Facebook" href="https://www.facebook.com/people/Hamilton-Reis-Advocacia/61587226859776/" rel="noreferrer"><i className="fa fa-facebook"></i></a>
			<a target="_blank" title="Nosso perfil no Instagram" href="https://instagram.com/hamiltonreis.adv" rel="noreferrer"><i className="fa fa-instagram"></i></a>
		</div>
	);
}

export default SocialIcons;