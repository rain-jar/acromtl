export default function WelcomeSection() {
  return (
    <section className="mt-12 w-full px-4">
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* Text (left) */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Welcome to 45.48°N</h2>
          <p className="opacity-80 leading-relaxed">
            We are a run crew based out of Little Burgundy, Montreal. And have been here since 2014, previously as the old Yamajo crew.
          </p>
            <p className="opacity-80 leading-relaxed">
            Whether you've been running for just as long or for a day or even been on the fence about running, come join us!
            </p>

            <p className="opacity-80 leading-relaxed">
            Because...
            </p>
{/*
 
            <p className="opacity-80 leading-relaxedf">
                45.48°N is part of the coordinates for Little Burgundy, which we called home for years with the old Yamajo crew.
                Like many other residents, we built deep connections with this small area. Even more, we built friendships. Little Burgundy is rich with people, stories, music and so much more. We will explore and create new stories on our adventures. Here, at 45.48°N and the around the world.

                Come join us in those adventures!

            </p>
*/}

          {/* Optional small highlight row 
          <div className="flex flex-wrap gap-2">
            <span className="rounded-xl border border-white/10 px-3 py-1 text-xs opacity-80">All paces</span>
            <span className="rounded-xl border border-white/10 px-3 py-1 text-xs opacity-80">Beginner friendly</span>
            <span className="rounded-xl border border-white/10 px-3 py-1 text-xs opacity-80">Weekly meets</span>
          </div>
          */}
        </div>
        

        {/* Image (right) */}
        <div className="rounded-2xl border border-white/10 overflow-hidden">
          <img
            src="/welcome.png"             // add a placeholder image to /public/welcome.jpg
            alt="Welcome to the crew"
            className="w-full md: h-auto relative max-h-[800px]"
            draggable="false"
          />
        </div>
      </div>
    </section>
  )
}
