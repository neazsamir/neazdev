export const ProjectCard = ({project}) => {
	const { mockup, title, name, url } = project
	return (
		<a href={url} target="_blank">
		<div className="project-card shadow-[0px_0px_10px_rgba(0,0,0,0.3)] rounded w-full max-w-[330px] overflow-hidden hover:scale-105 transition-transform duration-300 ease-in group">
		<img src={mockup} alt={name} className="w-full" />
			<div className="p-4">
				<h2 className="text-xl font-bold font-montserrat group-hover:text-primary transition-colors duration-300 ease-in">{title}</h2>
			</div>
		</div>
		</a>
	)
}