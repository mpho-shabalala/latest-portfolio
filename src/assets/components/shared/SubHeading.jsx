export default function SubHeading({heading, text}) {
  return (
    <div className="mb-6">
          <h2 className=" mb-2 text-4xl font-bold">{heading}</h2>
          <p className="text-sm text-gray-700">
           {text}
          </p>
        </div>
  );
}