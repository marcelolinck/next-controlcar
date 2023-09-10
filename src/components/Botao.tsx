interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick? : () => void
}

export default function Botao(props: BotaoProps) {

    const cor = props.cor ?? 'gray'

    return (
        <button onClick={props.onClick}className={`
        text-white 
        bg-gradient-to-r from-${cor}-500 to-${cor}-700
        px-4 py-2 rounded-md
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}