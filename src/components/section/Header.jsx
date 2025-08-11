import { useState, useEffect } from 'react'
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);
	return (
		<header className="mt-4 w-full z-30">
			{/* Top nav bar (Lg screens) */}
			<div className="top-nav rounded-3xl shadow-[2px_2px_10px_0_rgba(0,0,0,0.3)] w-full p-3 px-5 flex items-center justify-between">
				<a href="/"><h2 className="font-montserrat font-extrabold text-2xl">NEAZ</h2></a>
				<nav>
			<ul className="items-center gap-10 font-bold hidden md:flex">
				<li><a className="hover:text-primary transition duration-300 ease-in" href="#home">HOME</a></li>
				<li><a className="hover:text-primary transition duration-300 ease-in" href="#about">ABOUT ME</a></li>
				<li><a className="hover:text-primary transition duration-300 ease-in" href="#portfolio">PORTFOLIO</a></li>
				<li><a className="hover:text-primary transition duration-300 ease-in" href="#reviews">REVIEWS</a></li>
				<li><a className="hover:text-primary transition duration-300 ease-in" href="#contact">CONTACT ME</a></li>
			</ul>
			</nav>
			<button onClick={() => setIsOpen(true)} className="md:hidden">
			<FaBars className="text-3xl" />
			</button>
			</div>
			{/*Side bar (Smaller screens)*/}
			<div className={`fixed top-0 md:hidden max-w-[300px] w-full p-5 h-screen shadow-[-10px_0px_10px_0px_rgba(0,0,0,0.15)] backdrop-blur-lg bg-white/30 transition-all duration-500 ease-in z-[100]  ${isOpen ? 'right-0' : 'right-[-320px]'}`}>
				<button onClick={() => setIsOpen(false)}>
					<FaXmark className="text-4xl mb-7" />
				</button>
				<nav>
			<ul className="flex justify-center flex-col gap-7 font-bold">
				<li onClick={() => setIsOpen(false)}><a className="hover:text-primary transition duration-300 ease-in" href="#home">HOME</a></li>
				<li onClick={() => setIsOpen(false)}><a className="hover:text-primary transition duration-300 ease-in" href="#about">ABOUT ME</a></li>
				<li onClick={() => setIsOpen(false)}><a className="hover:text-primary transition duration-300 ease-in" href="#portfolio">PORTFOLIO</a></li>
				<li onClick={() => setIsOpen(false)}><a className="hover:text-primary transition duration-300 ease-in" href="#reviews">REVIEWS</a></li>
				<li onClick={() => setIsOpen(false)}><a className="hover:text-primary transition duration-300 ease-in" href="#contact">CONTACT ME</a></li>
			</ul>
			</nav>
			</div>
		</header>
	)
}