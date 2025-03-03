import { SectionTitle } from '../ui/SectionTittle'
import { SkillCard } from '../ui/SkillCard'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
export const Skills = () => {
	const mySkills = [
		{
			name: 'HTML5',
			icon: <FaHtml5 />,
			color: "#f06529",
			exp: '98%',
		},
		{
			name: 'CSS3',
			icon: <FaCss3Alt />,
			color: "#2965f1",
			exp: '95%',
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
			name: 'Tailwind CSS',
			icon: <RiTailwindCssFill />,
			color: "#38bdf8",
			exp: '96%',
		},
		{
			name: 'Bootstrap 5',
			icon: <FaBootstrap />,
			color: "#7952b3",
			exp: '95%',
		},
	]
	return (
		<section id="skills" className="mt-32">
			<SectionTitle text="MY SKILLS" />
			<div className="mt-14 max-w-lg mx-auto">
				{
					mySkills.map((skill, i) => {
					return <SkillCard key={i} skill={skill} />
					})
				}
			</div>
		</section>
	)
}