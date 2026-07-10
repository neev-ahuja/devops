
const Footor = () => {
    return (
        <footer className="bg-white border-t border-outline-variant py-2xl mt-xl px-margin">
            <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-xl">
                <div className="col-span-2 md:col-span-1 flex flex-col gap-md">
                    <span className="font-headline-md text-headline-md font-extrabold tracking-tight">nleetcode</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">The definitive platform for professional code craft and competitive engineering.</p>
                </div>
                <div className="flex flex-col gap-md">
                    <span className="font-label-caps text-label-caps text-on-surface">PLATFORM</span>
                    <nav className="flex flex-col gap-sm">
                        <a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Problems</a>
                        <a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Contests</a>
                        <a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Leaderboard</a>
                        <a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Premium</a>
                    </nav>
                </div>
                <div className="flex flex-col gap-md">
                    <span className="font-label-caps text-label-caps text-on-surface">COMPANY</span>
                    <nav className="flex flex-col gap-sm">
                        <a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a>
                        <a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a>
                        <a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a>
                        <a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms</a>
                    </nav>
                </div>
                <div className="flex flex-col gap-md">
                    <span className="font-label-caps text-label-caps text-on-surface">SOCIAL</span>
                    <div className="flex gap-md">
                        <a className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:border-black transition-all" href="#">
                            <span className="material-symbols-outlined">code</span>
                        </a>
                        <a className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:border-black transition-all" href="#">
                            <span className="material-symbols-outlined">alternate_email</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-container-max mx-auto mt-2xl pt-xl border-t border-outline-variant/30 text-center">
                <p className="font-label-caps text-label-caps text-on-surface-variant opacity-50">© 2024 NLEETCODE INC. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    )
}

export default Footor
