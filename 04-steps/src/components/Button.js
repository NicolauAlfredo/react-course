export default function Button({ textColor, bgColor, onCLick, children }) {
    return (
        <button
            style={{ backgroundColor: bgColor, color: textColor }}
            onClick={onCLick}>

            {children}
        </button>
    )
}