
const Button = ({ content = "", handleClick = (() => { }) }) => {

    return (
        <button onClick={handleClick} className="bg-primary-container text-xl font-semibold text-white px-xl py-md font-headline-md text-headline-md border border-black neo-shadow neo-shadow-active transition-all">
            {content}
        </button>
    )
}

export default Button
