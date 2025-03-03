export const ProjectCard = ({project}) => {
	const { mockup, title, name, c } = project
	return (
		<div className="project-card shadow-[0px_0px_10px_rgba(0,0,0,0.3)] rounded w-full max-w-[330px] overflow-hidden hover:scale-105 transition-transform duration-300 ease-in group">
		<img src={mockup} alt={name} className="w-full" />
			<div className="p-4">
		{
			c && <span className="mb-3 inline-block font-bold text-[7px] text-gray-400">UI/UX By: <a href={c.link} target="_blank" className="underline font-extrabold font-montserrat hover:text-primary transition duration-300 ease-in">{c.name}</a> | Converted by me </span>
		}
				<h2 className="text-xl font-bold font-montserrat group-hover:text-primary transition-colors duration-300 ease-in">{title}</h2>
			</div>
		</div>
	)
}