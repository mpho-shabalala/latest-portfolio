
export default function StackLi({img, title, description, key}){
    return (
        <li key={key} className=" py-4 flex items-center border-b">
            <img className="w-12 h-12" src={img} alt="" />
            <div className="flex flex-col ml-4">
                <h2 className="font-semibold">{title}</h2>
                <p>{description}</p>
            </div>
        </li>
    )
}