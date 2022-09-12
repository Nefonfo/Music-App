export const LyricRow = ({text, active = false}) => {
    return (
        <p className={`text-white font-bold text-4xl md:text-5xl ${!active ? 'opacity-20': 'opacity-75' }`}>{text}</p>
    )
}
