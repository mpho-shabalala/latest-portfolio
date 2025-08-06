

export default function SecondaryBTN({type, text, href}){
    return (
        <a
            href={href}
            type={type || ''}
            className="bg-brand-purple w-full text-white md:text-brand-purple md:bg-white border border-brand-purple font-semibold  px-8 py-2 rounded-full md:w-fit text-2xl  text-center"
        >
            {text}
        </a>

    )
}