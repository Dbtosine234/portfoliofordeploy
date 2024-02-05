import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png'; 
import { Link } from 'react-scroll';

const Intro = () => {
	return(

		<section id="intro">
			<div className ="introContent">
				<span className="hi">Hi</span>
				<span className="introText">I'm <span className="introName">Emmanuel Tosin</span><br />Software Engineer</span>
				<p className="introPara">I am a software engineer with more than 2 years experience <br />in development and deploymemt of  web app,django, react and lots more </p>
				<Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/> Hire Me</button></Link>
			</div>
			<img src={bg} alt="profile" className="bg" />
		</section>
	);		
}

export default Intro;
