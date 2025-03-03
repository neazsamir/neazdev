export const SkillCard = ({skill}) => {
	const { icon, color, name, exp } = skill
	return (
		<div className="skill-card shadow-[0px_0px_10px_rgba(0,0,0,0.2)] p-3 rounded-xl relative w-full overflow-hidden flex items-center font-montserrat font-bold gap-3 group mb-5">
		<span style={{ color }} className="text-4xl group-hover:scale-[1.3] transition-transform duration-300 ease-in">{icon}</span> <span>{name}</span> <span className="ml-auto text-primary">{exp}</span>
		<div style={{ width: exp }} className="absolute -left-1 bottom-0 h-1 rounded-full bg-primary" />
		</div>
	)
}