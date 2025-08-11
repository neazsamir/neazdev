import { SectionTitle } from '../ui/SectionTittle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { AiFillStar } from 'react-icons/ai'
import { useRef } from 'react'

export const Reviews = () => {
  const reviews = [
    {
      profile: {
        name: "Janki P.",
        company: "Breathe Balance",
        role: "Founder",
        avatar: "https://i.postimg.cc/L6HqnP2j/20250807-214430.jpg"
      },
      rating: 5,
      review:
        "Neaz was fantastic to work with. The site matched my vision perfectly, and he responded quickly to every request. His attention to detail made the process stress-free."
    },
    {
      profile: {
        name: "Sikkandar S.",
        company: "Creative Edge Studio",
        role: "Art Director",
        avatar: "https://i.postimg.cc/NGyyTtHj/file-000000005a1061f69a34cb722432c26e.png"
      },
      rating: 5,
      review:
        "Neaz brought my ideas to life with precision and creativity. The final design is clean, functional, and visually striking. Communication was smooth and always on time."
    },
  ]

  // Ref to access swiper instance for pause on hover
  const swiperRef = useRef(null)

  return (
    <section id="reviews" className="mt-32">
      <SectionTitle text="TESTIMONIALS" />
      <h1 className="mt-7 text-2xl font-bold text-center font-montserrat">
        What my clients say?
      </h1>

      <div 
        className="mt-12"
        onMouseEnter={() => swiperRef.current?.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.swiper.autoplay.start()}
      >
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 }
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="flex items-center gap-4">
                  <img
                    src={item.profile.avatar}
                    alt={item.profile.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.profile.name}</h3>
                    <p className="text-sm text-gray-500">{item.profile.role}</p>
                    <p className="text-xs text-primary font-medium">{item.profile.company}</p>
                  </div>
                </div>

                <div className="flex mt-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <AiFillStar key={i} className="text-yellow-400" size={18} />
                  ))}
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}