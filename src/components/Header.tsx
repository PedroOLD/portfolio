export function Header() {
    return (
        <header className="flex flex-row justify-between px-16 py-6 border-b border-neutral-900 bg-neutral-800">
            <strong className="text-2xl text-blue-900">
                Portfólio
            </strong>

            <ul className="flex flex-row gap-5 text-gray-500 text-xs items-center">
                <li>
                    <a href="">
                        Home
                    </a>
                </li>
                <li>
                    <a href="">
                        Sobre mim
                    </a>
                </li>
                <li>
                    <a href="">
                        Experiência
                    </a>
                </li>
                <li>
                    <a href="">
                        Projetos
                    </a>
                </li>
            </ul>
        </header>
    )
}