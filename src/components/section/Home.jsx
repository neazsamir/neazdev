import { FaRegEnvelope } from "react-icons/fa6";
import { BtnFilled } from '../ui/BtnFilled';
import { SocialMedia } from '../ui/SocialMedia';

export const Home = () => {
	return (
		<section id="home" className="mt-24 md:mt-32">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 items-center">
				<figure className="hero-img order-1 md:order-2">
					<img className="w-full max-w-[360px] mx-auto rounded-full shadow-primary shadow-[0px_0px_20px] animate-up-down" src="myPhoto.jpg" alt="Neaz Mahmud Samir's profile picture" />
				</figure>
				<div className="order-2 md:order-1">
					<h1 className="hero-content font-montserrat text-4xl lg:text-5xl font-extrabold">Hi, I am <strong className="text-primary">Neaz Mahmud</strong></h1>
					<h2 className="hero-content font-bold text-2xl mt-3">A passionate <strong>MERN stack developer</strong></h2>
					<p className="hero-content mt-4">
						I specialize in <strong className="font-normal">full-stack web development</strong> using the <strong className="font-normal">MongoDB, Express, React, and Node.js</strong> stack. I build <strong className="font-normal">responsive</strong>, <strong className="font-normal">user-focused</strong>, and <strong className="font-normal">high-performance</strong> web applications tailored to your business needs. Let's bring your vision to life with a solution that <strong className="font-normal">delivers results</strong>.
					</p>
					<div className="hero-content flex items-center gap-5 justify-center flex-wrap mt-5">
						<BtnFilled icon={<FaRegEnvelope className="text-2xl" />} text="HIRE ME" />
						<SocialMedia />
					</div>
				</div>
			</div>
		</section>
	);
};