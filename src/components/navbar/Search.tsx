
const Search = () => {
  return (
    <div className="hidden sm:flex items-center gap-sm px-md py-xs bg-surface-container-low border border-outline-variant rounded-lg">
      <span className="material-symbols-outlined text-on-surface-variant">search</span>
      <input className="bg-transparent border-none focus:ring-0 text-body-sm w-32 lg:w-64 outline-none" placeholder="Search problems..." type="text" />
    </div>
  )
}

export default Search
