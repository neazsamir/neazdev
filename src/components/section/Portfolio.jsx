import { ProjectCard } from '../ui/ProjectCard'
import { SectionTitle } from '../ui/SectionTittle'
export const Portfolio = () => {
	const projects = [
	{
		name: 'Breathe balance',
		id: 1,
		mockup: 'https://i.postimg.cc/cCj2KKkf/Screenshot-20250807-233149.png',
		title: 'Landing Page For Online Yoga Classes',
		url: "https://breathebalance.netlify.app/",
	},
	{
		name: 'Temvi',
		id: 2,
		mockup: 'mockup-temvi.png',
		title: 'Fullstack social media platform',
		url: "https://temvi.netlify.app/",
	},
	{
		name: 'Ordinary Movie',
		id: 3,
		mockup: 'mockup-om.png',
		title: 'Genre Based Movie Suggetion Website',
		url: "https://ordinarymovie.netlify.app",
	},
	{
		name: 'Gym Center',
		id: 4,
		mockup: 'mockup-gymcenter.png',
		title: 'Landing Page For A Gym Center',
		url: "https://gymcenter-neaz.netlify.app/",
	},
	{
		name: 'Nishchinto',
		id: 5,
		mockup: 'mockup-nishchinto.png',
		title: 'Landing Page For A Crypto App',
		url: "https://nischinto.netlify.app/",
	},
	{
		name: 'Burger',
		id: 6,
		mockup: 'mockup-burger.png',
		title: 'Landing Page For A Burger Restaurant',
		url: "https://neaz-burger-landing.netlify.app",
	},
]
	return (
		<section id="portfolio" className="mt-32">
			<SectionTitle text="PORTFOLIO" />
			<h1 className="mt-7 text-2xl font-bold text-center font-montserrat"> Some of my recent works </h1>
			<div className="mt-14 flex items-center justify-center gap-7 flex-wrap">
				{
					projects.map(project => {
						return <ProjectCard key={project.id} project={project} />
					})
				}
			</div>
		</section>
	)
}