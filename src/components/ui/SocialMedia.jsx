import { SiFiverr } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaUpwork } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export const SocialMedia = () => {
	const style = "border border-solid border-primary h-12 w-12 rounded-full flex items-center justify-center hover:text-white hover:bg-primary hover:shadow-primary hover:shadow-[0px_0px_10px] transition-all duration-300 ease-in"
	return (
				<ul className="text-3xl text-primary flex items-center justify-center gap-5">
					<li className={`socialmedia ${style}`}><a target="_blank" href="https://www.facebook.com/share/1EDb3HJ8Zv/"><FaFacebookF /></a>
					</li>
					<li className={`socialmedia ${style}`}><a target="_blank" href="https://github.com/neazsamir/"><FiGithub /></a>
					</li>
					<li className={`socialmedia ${style}`}><a target="_blank" href="https://www.fiverr.com/s/gDPjlpa"><SiFiverr /></a>
					</li>
					<li className={`socialmedia ${style}`}>
					<a target="_blank" href="https://www.facebook.com/share/1EDb3HJ8Zv/"><FaUpwork /></a>
					</li>
					</ul>
	)
}