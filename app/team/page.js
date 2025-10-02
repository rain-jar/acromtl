import TeamCard from '../../components/TeamCard'
import team from '../../data/team.json'

export const metadata = { title: 'Team • Running Crew' }

export default function TeamPage() {
  return (
    <main className="w-full px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Team</h1>
        <p className="mt-2 opacity-80">
          Meet our teachers and staff that serve the community
        </p>
      </header>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => <TeamCard key={m.id} member={m} />)}
      </section>
    </main>
  )
}
