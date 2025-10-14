export default function JourneyLi({course, institution, timeframe}) {
  return (
    <li
        // key={index}
    className="flex items-center justify-between  border-b py-4">
        <h2 className=" text-xl font-semibold">{course}</h2>
        <div className="flex flex-col items-end">
            <h3 className="font-bold text-brand-purple">{institution}</h3>
            <p className="text-gray-500">{timeframe}</p>
        </div>
    </li>  
  );
}