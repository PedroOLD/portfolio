interface Props {
    icon: React.ReactNode,
    text: string,
    link?: string,
    borderType: "purple" | "pink" 

}

export function Anchor(props: Props) {

    if (props.borderType === "pink") {
        return (

            <div className="p-[2px] bg-gradient-to-tr from-pink-500 to-purple-900 rounded overflow-hidden">
                <a 
                    href={props.link} 
                    className="flex gap-2 items-center justify-around text-sm text-white bg-neutral-800 py-1 px-3"
                >    
                    {props.icon}
                    {props.text} 
                </a>
            </div>
        )    
    }

    return (
        <div className="bg-gradient-to-tr from-purple-500 to-blue-800 p-[2px] rounded overflow-hidden ">
            <a 
                href={props.link} 
                className="flex gap-2 items-center justify-around text-sm text-white bg-neutral-800 py-1 px-3"
            >
                {props.icon}
                {props.text}
            </a>
        </div>
    )
}