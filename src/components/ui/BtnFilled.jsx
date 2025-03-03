export const BtnFilled = ({icon, text}) => {
	return <a href="#contact" className="text-white bg-primary py-3 px-5 inline-flex flex gap-3 justify-center items-center max-w-[300px] w-full rounded-3xl hover:scale-95 transition-transform duration-300 ease-in">
		{icon} {text}
		</a>
}