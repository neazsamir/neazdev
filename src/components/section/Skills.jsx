import { SectionTitle } from '../ui/SectionTittle';
import { SkillCard } from '../ui/SkillCard';
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

export const Skills = () => {
	const mySkills = [
		{
			name: 'Tailwind CSS',
			icon: <RiTailwindCssFill />,
			color: "#38bdf8",
			exp: '96%',
		},
		{
			name: 'JavaScript',
			icon: <DiJavascript />,
			color: "#f0db4f",
			exp: '92%',
		},
		{
			name: 'ReactJS',
			icon: <FaReact />,
			color: "#61DBFB",
			exp: '90%',
		},
		{
			name: 'Node.js',
			icon: <IoLogoNodejs />,
			color: "#3C873A",
			exp: '88%',
		},
		{
			name: 'MongoDB',
			icon: <SiMongodb />,
			color: "#47A248",
			exp: '85%',
		},
		{
			name: 'Express.js',
			icon: <SiExpress />,
			color: "#000000",
			exp: '83%',
		},
	];

	return (
		<section id="skills" className="mt-32">
			<SectionTitle text="MY SKILLS" />
			<div className="mt-14 max-w-lg mx-auto">
				{
					mySkills.map((skill, i) => (
						<SkillCard key={i} skill={skill} />
					))
				}
			</div>
		</section>
	);
};