import { ProjectCard } from '../ui/ProjectCard'
import { SectionTitle } from '../ui/SectionTittle'
export const Portfolio = () => {
	const projects = [
		{
			name: 'Temvi',
			id: 1,
			mockup: 'mockup-temvi.png',
			title: 'Fullstack social media platform',
			url: "https://temvi.netlify.app/",
			c: {
				name: 'Neaz Mahmud Samir',
				link: '#',
			}
		},
		{
			name: 'Ordinary Movie',
			id: 2,
			mockup: 'mockup-om.png',
			title: 'Genre Based Movie Suggetion Website',
			url: "https://ordinarymovie.netlify.app",
			c: {
				name: 'Neaz Mahmud Samir',
				link: 'https://ordinarymovie.netlify.app',
			}
		},
		{
			name: 'Gym Center',
			id: 3,
			mockup: 'mockup-gymcenter.png',
			title: 'Landing Page For A Gym Center',
			url: "https://gymcenter-neaz.netlify.app/",
			c: {
				name: 'Not Found',
				link: '#',
			}
		},
		{
			name: 'Drake Portfolio',
			id: 4,
			mockup: 'mockup-drake.png',
			title: 'Portfolio For A Framer Designer',
			url: "https://portfolio-drake.netlify.app/",
			c: {
				name: 'WordPressRiver',
				link: "https://themeforest.net/user/wordpressriver",
			}
		},
		{
			name: 'Nishchinto',
			id: 5,
			mockup: 'mockup-nishchinto.png',
			title: 'Landing Page For A Crypto App',
			url: "https://nischinto.netlify.app/",
			c: {
				name: 'Not Found',
				link: '#'
			}
		},
		{
			name: 'Burger',
			id: 6,
			mockup: 'mockup-burger.png',
			title: 'Landing Page For A Burger Restaurant',
			url: "https://neaz-burger-landing.netlify.app",
			c: {
				name: 'codestarthemes',
				link: "https://themeforest.net/user/codestarthemes"
			}
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