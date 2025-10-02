'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
  { src: '/hero-3.png', alt: 'Group run at sunrise' },
  { src: '/hero-2.png', alt: 'City loop by the river' },
  { src: '/hero-1.png', alt: 'Track workout night' },
]

export default function HomeCarousel() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        speed={600}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-56 md:h-80 lg:h-[32rem]"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <img
              src={s.src}
              alt={s.alt}
              className="h-full w-full object-cover select-none"
              draggable="false"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dots styling for dark theme */}
      <style jsx global>{`
        .swiper-pagination-bullet { background: rgba(255,255,255,0.6); opacity: 1; }
        .swiper-pagination-bullet-active { background: #fff; }
      `}</style>
    </div>
  )
}
