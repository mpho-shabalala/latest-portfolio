
export default function Status({status, statusText}){
    return (
        <p className={`
            fixed bottom-5 right-5 px-6 py-4 text-white rounded-lg
            ${status? 'bg-brand-green' : 'bg-brand-red'}`}>
            {statusText}
        </p>

    )
}