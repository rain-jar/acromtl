import { Instagram } from 'lucide-react'

export default function TeamCard({ member }) {
  return (
    
    <article className="group rounded-2xl ring-1 ring-white/10 overflow-hidden bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          draggable="false"
        />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold">{member.name}</h3>
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} on Instagram`}
              className="rounded-xl border border-white/10 p-2 hover:bg-white/5"
            >
              <Instagram className="h-4 w-4" />
            </a>
          )}
        </div>

        <p className="text-sm opacity-80">{member.role}</p>
        <p className="text-sm opacity-80 leading-relaxed">{member.bio}</p>
      </div>
    </article>
    
  )
}
