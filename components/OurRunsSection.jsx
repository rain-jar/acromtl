'use client'
import { useState } from 'react'

const runs = [
  {
    id: 'sunrise',
    title: 'Beginner & Intermediate Classes',
    img: '/run-1.png', // put images in /public
    blurb: 'When : Wed 6.30pm \nWhere : White Wall Studio \n4532 Av. Laval, Montréal, QC H2T 2C4',
  },
  {
    id: 'tempo',
    title: 'Open Jam Session - Wed',
    img: '/run-2.png',
    blurb: 'When : Wed 7.30pm \nWhere : White Wall Studio \n4532 Av. Laval, Montréal, QC H2T 2C4',
  },
  {
    id: 'track',
    title: 'Open Jam Session - Sundays',
    img: '/run-3.png',
    blurb: 'When : Sunday 3pm \nWhere: Paragym \n5465 Rue de Bordeaux, Montréal, QC H2H 2P9',
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
        {/* Front (image with overlay + centered text) */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]"
        >
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover select-none"
            draggable="false"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Centered text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg sm:text-xl font-semibold text-white drop-shadow-md">
              {title}
            </span>
          </div>
        </div>

        {/* Back (text) */}
        <div
          className="absolute inset-0 rounded-2xl bg-white/5 p-4 flex items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
          <div className="space-y-2 px-2">
            <div className="text-base sm:text-lg font-semibold">{title}</div>
            <p className="text-sm sm:text-base opacity-90 leading-relaxed whitespace-pre-line">
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
      <h2 className="mb-4 text-2xl font-semibold">Come find us at : </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {runs.map((r) => (
          <FlipCard key={r.id} title={r.title} img={r.img} blurb={r.blurb} />
        ))}
      </div>
    </section>
  )
}
