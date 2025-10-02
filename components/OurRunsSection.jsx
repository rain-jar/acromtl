'use client'
import { useState } from 'react'

const runs = [
  {
    id: 'sunrise',
    title: 'Wednesdays',
    img: '/run-1.png', // put images in /public
    blurb: 'When : Wed Evenings 7pm \nWhere : from Atwater Market \nPace : 5K & 10K',
  },
  {
    id: 'tempo',
    title: 'Saturdays',
    img: '/run-2.png',
    blurb: 'When : Sat 10am \nWhere : from Little Burgundy Gym \nPace : 5K & 10K',
  },
  {
    id: 'track',
    title: 'SlowAF - Sexy Pace',
    img: '/run-3.png',
    blurb: 'When : Monthly Wed 7pm \nWhere: from Little Burgundy Gym \nMax pace - 6.30min/km',
  },
]

function FlipCard({ title, img, blurb }) {
  return (
    <div
      className="group relative h-56 sm:h-64 lg:h-72 rounded-2xl cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <div
        className="h-full w-full rounded-2xl shadow-lg ring-1 ring-white/10 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front (image) */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]"
        >
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover select-none"
            draggable="false"
          />
          {/* Title bar overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
            <div className="text-sm sm:text-base font-semibold">{title}</div>
          </div>
        </div>

        {/* Back (text) */}
        <div
          className="absolute inset-0 rounded-2xl bg-white/5 p-4 flex items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
          <div className="space-y-2 px-2">
            <div className="text-base sm:text-lg font-semibold">{title}</div>
            <p className="text-sm sm:text-base opacity-80 leading-relaxed whitespace-pre-line">
            {blurb}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function OurRunsSection() {
  return (
    <section className="mt-12 w-full px-4">
      <h2 className="mb-4 text-2xl font-semibold">Our Runs</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {runs.map((r) => (
          <FlipCard key={r.id} title={r.title} img={r.img} blurb={r.blurb} />
        ))}
      </div>
    </section>
  )
}
