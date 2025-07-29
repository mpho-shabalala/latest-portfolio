

export default function SecondaryBTN({children}){
    return (
        <a
            href="#"
            className="relative overflow-hidden border border-brand-purple text-brand-purple font-semibold mt-4 px-8 py-2 rounded-full w-fit text-2xl group"
        >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                {children}
            </span>
            <span
                className="absolute bottom-0 right-0 w-full h-full bg-brand-purple opacity-100 rounded-full transform  translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-400 ease-in-out"
            ></span>
        </a>

    )
}