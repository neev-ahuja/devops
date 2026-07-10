import Search from "./Search"
import ProfileIcon from "../general/ProfileIcon"
import { useState } from "react"

const NavBar = () => {

  const [isActive , setIsActive] = useState([false , false , false]);

  return (
    <header className="h-16 fixed top-0 left-0 right-0 w-full bg-white z-50 flex items-center justify-between px-lg border-b border-outline-variant shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center gap-md cursor-pointer" onClick={() => setIsActive([false , false , false])}>
        <span className="font-headline-md text-headline-md font-extrabold text-on-surface tracking-tight">nleetcode</span>
      </div>

      <nav className="hidden md:flex items-center gap-xl">
        <a className={`font-body-sm cursor-pointer text-body-sm ${isActive[0] ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:bg-surface-container-low' }  px-sm py-xs transition-colors duration-200`} onClick={() => setIsActive([true, false , false])}>Problems</a>
        <a className={`font-body-sm cursor-pointer text-body-sm ${isActive[1] ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:bg-surface-container-low' }  px-sm py-xs transition-colors duration-200`} onClick={() => setIsActive([false, true , false])}>Contents</a>
        <a className={`font-body-sm cursor-pointer text-body-sm ${isActive[2] ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:bg-surface-container-low' }  px-sm py-xs transition-colors duration-200`} onClick={() => setIsActive([false, false ,true])}>Dicuss</a>
      </nav>

      <div className="flex items-center gap-md">


      </div>

      <Search />

      <ProfileIcon />
    </header>
  )
}

export default NavBar
