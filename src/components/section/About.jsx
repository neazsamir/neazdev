import { SectionTitle } from '../ui/SectionTittle'
import { BtnFilled } from '../ui/BtnFilled'
import { FaRegEnvelope } from "react-icons/fa";

export const About = () => {
	return (
		<section id="about" className="mt-32">
			<SectionTitle text="ABOUT ME" />
			<div className="mt-10 grid gap-6">
				<p className="about-content text-base leading-relaxed">
					I'm Neaz Mahmud Samir, a dedicated <strong className="font-normal">MERN stack developer</strong> specializing in <strong className="font-normal">responsive websites</strong> and <strong className="font-normal">seamless user experiences</strong>. I focus on converting designs into <strong className="font-normal">mobile-optimized websites</strong> that load fast and work flawlessly across all devices.
				</p>

				<p className="about-content text-base leading-relaxed">
					I’m currently looking for <strong className="font-normal">freelance web development opportunities</strong> to help businesses establish a strong online presence. Let’s work together and bring your ideas to life!
				</p>

				<div className="about-content w-full flex justify-center mt-5">
					<BtnFilled icon={<FaRegEnvelope className="text-2xl" />} text="CONTACT ME" />
				</div>
			</div>
		</section>
	)
}