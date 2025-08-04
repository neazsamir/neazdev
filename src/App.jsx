import { Header } from './components/section/Header'
import { Home } from './components/section/Home'
import { About } from './components/section/About'
import { Skills } from './components/section/Skills'
import { Portfolio } from './components/section/Portfolio'
import { Contact } from './components/section/Contact'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

export const App = () => {
	const sr = ScrollReveal({
		duration: 500,
		easing: 'ease-in',
		distance: '70px',
	})

	useEffect(() => {
	 sr.reveal('.top-nav, .section-title', { origin: 'top', })
	 sr.reveal('.hero-img', { origin: 'right', })
	 sr.reveal('.hero-content', { origin: 'left', interval: 150, })
	 sr.reveal('.socialmedia', { origin: 'left', interval: 300, })
	 sr.reveal('.about-img', { origin: 'left',})
	 sr.reveal('.btn-message', { origin: 'left',})
	 sr.reveal('.about-content, .skill-card, .project-card', { origin: 'bottom', interval: 150,})
	 sr.reveal('.contact-info', { origin: 'top', interval: 150,})
	 sr.reveal('.form-input', { origin: 'top', interval: 150,})
	 
	 
	 
	 
	}, [])
	
	return (
	<div className="px-5 max-w-7xl mx-auto w-full pb-16">
		<Header />
		<Home />
		<About />
		<Skills />
		<Portfolio />
		<Contact />
	</div>
	)
}