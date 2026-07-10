import Button from "../components/general/Button"
import CodeDisplay from "../components/general/CodeDisplay"

const LandingPage = () => {
  return (
    <div>
      <div className="flex justify-between mx-25 mt-15">
        <div className="space-y-lg mt-20">
          <div className="inline-flex items-center gap-sm px-md py-xs bg-secondary-container/20 border border-secondary text-on-secondary-container rounded-full">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: 'FILL 1' }}>military_tech</span>
            <span className="font-label-caps text-label-caps text-sm">SEASON 24 NOW LIVE</span>
          </div>
          <h1 className="font-display text-display leading-tight text-black font-bold text-4xl">Master the craft of code</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[40vw]">The premium destination for competitive programmers.
            Solve complex algorithmic challenges, climb the global leaderboard,
            and get hired by top-tier tech companies.</p>
          <div>
            <Button content="Start Solving" handleClick={() => console.log("WORKING")} />
            <button className=" text-xl font-semibold text-black px-xl py-md mx-4 translate-1 font-headline-md text-headline-md border border-black transition-all">View Problems</button>
          </div>
        </div>

        <div className="mt-15">
          <CodeDisplay />
        </div>
      </div>

      <section className="py-2xl mx-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
          <div className="bg-white p-lg border border-outline-variant neo-shadow flex flex-col gap-sm">
            <span className="font-label-caps text-label-caps text-on-surface-variant">ACTIVE PROBLEMS</span>
            <span className="font-display text-[40px] leading-none font-bold">2,842+</span>
            <div className="flex items-center gap-xs text-secondary">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span className="text-body-sm font-bold">12 new today</span>
            </div>
          </div>
          <div className="bg-white p-lg border border-outline-variant neo-shadow flex flex-col gap-sm">
            <span className="font-label-caps text-label-caps text-on-surface-variant">SUBMISSIONS / MIN</span>
            <span className="font-display text-[40px] leading-none font-bold">450+</span>
            <div className="flex items-center gap-xs text-primary">
              <span className="material-symbols-outlined text-sm">bolt</span>
              <span className="text-body-sm font-bold">High Load</span>
            </div>
          </div>
          <div className="bg-white p-lg border border-outline-variant neo-shadow flex flex-col gap-sm">
            <span className="font-label-caps text-label-caps text-on-surface-variant">GLOBAL CONTESTS</span>
            <span className="font-display text-[40px] leading-none font-bold">120</span>
            <div className="flex items-center gap-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">calendar_month</span>
              <span className="text-body-sm font-bold">Next in 4h</span>
            </div>
          </div>
          <div className="bg-white p-lg border border-outline-variant neo-shadow flex flex-col gap-sm">
            <span className="font-label-caps text-label-caps text-on-surface-variant">COMMUNITY REVIEWS</span>
            <span className="font-display text-[40px] leading-none font-bold">89k</span>
            <div className="flex items-center gap-xs text-secondary">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span className="text-body-sm font-bold">Peer reviewed</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2xl text-center">
        <div className="bg-primary-container p-2xl border border-black neo-shadow text-white relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-white rotate-45 transform"></div>
          </div>
          <div className="relative z-10 space-y-lg">
            <h2 className="font-display text-display text-3xl font-bold">Ready to solve?</h2>
            <p className="font-body-lg text-body-lg text-white/90  mx-auto">
              Don't just write code. Master the algorithms that power the world's most innovative technology.
            </p>
            <div className="pt-md">
              <button className="bg-white text-on-primary-container px-2xl py-md font-headline-md text-headline-md border border-black neo-shadow neo-shadow-active transition-all">
                Create Free Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
