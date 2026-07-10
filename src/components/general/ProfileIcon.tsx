
const ProfileIcon = () => {
  return (
    <div className="flex items-center gap-sm">
      <button className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-transform active:scale-95">
        <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-transform active:scale-95">
        <span className="material-symbols-outlined">local_fire_department</span>
      </button>
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center border border-black overflow-hidden">
        <img className="w-full h-full object-cover" data-alt="A professional headshot of a software engineer, clean lighting, minimalist office background, highly detailed digital portrait style with muted professional colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2B-IZChf_PRSafO9hy_7ifKlK9L3GS9-ll4Hl4osNJCiICMIGsnIoyJ27j4sn1j0Kk66h1UxlwQJvxpoR2fvbBiGVpNwoYV85YWZrBrai43eEV-VjYoLmJ0PC91fgQbuLO8Xb91uTLNdSrAqod21BmRAOVIqAKEnDfHJ6p5RRyOY3B-5u770UP5eX0zLdKxKL8ksUbLu7TOgo6IwGCa5u06fe05mpLsCQm6Yi-UMqzVEU-L1oSxmbkQ" />
      </div>
    </div>
  )
}

export default ProfileIcon
