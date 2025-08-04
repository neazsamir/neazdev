import { SectionTitle } from '../ui/SectionTittle'
import { SocialMedia } from '../ui/SocialMedia'
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useState } from 'react'
import emailjs from 'emailjs-com';
import { Toast } from '../ui/Toast'
export const Contact = () => {
	const styleInput = "outline-none border border-solid border-primary px-4 py-3 rounded-2xl w-full resize-none mb-4"
	
	
	
	const [toast, setToast] = useState(null);
	
const handleToastReset = () => {
    setTimeout(() => setToast(null), 4000);
  };
	
const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
    subject: '',
});
	
	
	
	
	const { subject, message, email, name, whatsapp } = formData;
	
const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
 };
	
	const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(formData).some(value => value.trim() === '')) {
            setToast({ message: "Please fill all the fields!", type: "error" });
            handleToastReset();
            return;
        }

        try {
            await emailjs.send(
                'service_75zh2sh',
                'template_9y45r4g',
                formData,
                '13JE9wDCQBynml5fm'
            );
            setToast({ message: "The message has been successfully sent! Please wait for a reply.", type: "success" });
            handleToastReset();
        } catch (e) {
            setToast({ message: "Failed to send the message! Try again later.", type: "error" });
            handleToastReset();
        } finally {
            setFormData({ name: '', email: '', message: '', subject: '', whatsapp: '' });
        }
    };
	
	
	
	
	return (
		<section id="contact" className="mt-32">
			<SectionTitle text="CONTACT ME" />
			<h1 className="text-center text-2xl mt-10 font-bold font-montserrat">Reach Out To Me</h1>
			<div className="flex justify-center items-center gap-x-14 gap-y-20 flex-wrap mt-16">
				<ul className="flex justify-center flex-col gap-6 font-bold pl-3 py-4 border-l border-l-primary border-solid w-fit">
					<li className="contact-info flex items-center gap-3"><MdEmail className="text-2xl text-primary" /> neaz100k@yahoo.com</li>
					<li className="contact-info flex items-center gap-3"><FaWhatsapp className="text-2xl text-primary" />+880 1306774961</li>
					<li className="contact-info flex items-center gap-3"><MdLocationPin className="text-2xl text-primary" />Bangladesh, Khulna, Bagerhat</li>
					<li><SocialMedia /></li>
				</ul>
				<div className="w-full max-w-xl">
					<form onSubmit={handleSubmit}>
			<div className="grid grid-cols-1 xs:grid-cols-2 items-center gap-x-5">
			<div className="form-input">
			<label htmlFor="subject" className="inline-block mb-3 text-sm text-gray-500">Subject<span className="text-red-500"> *</span></label>
			<input onChange={handleChange} name="subject" value={subject} id="subject" type="text" 		placeholder="Subject" required className={styleInput} />
			</div>
			<div className="form-input">
			<label htmlFor="yourName" className="inline-block mb-3 text-sm text-gray-500">Name <span className="text-red-500"> *</span></label>
			<input onChange={handleChange} name="name" value={name} id="yourName" type="text" 		placeholder="Your Name" required className={styleInput} />
			</div>
			<div className="form-input">
			<label htmlFor="yourEmail" className="inline-block mb-3 text-sm text-gray-500">Email<span className="text-red-500"> *</span></label>
			<input onChange={handleChange} name="email" value={email} id="yourEmail" type="email" 		placeholder="Your Email" required className={styleInput} />
			</div>
			<div className="form-input">
			<label htmlFor="whatsapp" className="inline-block mb-3 text-sm text-gray-500">Whatsapp Number<span className="text-gray-400 text-[10px]"> (Optional)</span></label>
			<input onChange={handleChange} name="whatsapp" value={whatsapp} id="whatsapp" type="number" 		placeholder="Your Whatsapp Number" className={styleInput} />
				</div>
			</div>
			<div className="form-input">
			<label htmlFor="message" className="inline-block mb-3 text-sm text-gray-500">Message<span className="text-red-500">*</span></label>
			<textarea onChange={handleChange} name="message" value={message} rows="4" id="message" type="text" 		placeholder="Your Message" required className={styleInput} />
			</div>
			<button type="submit" className="btn-message bg-primary px-4 py-3 rounded-3xl text-white hover:scale-95 transition-transform duration-300 ease-in flex items-center justify-center gap-3 group">
			Send Message <IoIosSend className="text-2xl rotate-[45deg] group-hover:rotate-0 transition-transform duration-300 ease-in" />
			</button>
			{toast && <Toast message={toast.message} type={toast.type} />}
		</form>
	</div>
</div>
</section>
	)
}