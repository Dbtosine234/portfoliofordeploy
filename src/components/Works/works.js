import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';

const Works = () => {
	return (
		<section id='works'>
			<h2 className="worksTitle">My Portfolio</h2>
			<span className="worksDesc">Proficient in various programming languages and technologies, with a commitment to continuous learning and innovation</span>
			<div className="worksImgs">
				<img src={Portfolio1} alt="" className="worksImg" />
				<img src={Portfolio2} alt="" className="worksImg" />
				<img src={Portfolio4} alt="" className="worksImg" />
				<img src={Portfolio5} alt="" className="worksImg" />
				
			</div>
			<button className="worksBtn">see more</button>	
		</section>
	);
}

export default Works;
