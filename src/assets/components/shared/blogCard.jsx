import { Link } from 'react-router-dom';
export default function BlogCard({blog}) {
  return (
    <Link 
    to={{pathname: `/blogs/${blog.id}`}}
    className="">
        {blog.images && blog.images.length > 0 && (
          <img
            className="rounded-2xl mt-10 w-full h-72"
            src={blog.images[0].img}
            alt={blog.images[0].alt}
          />
        )}

        <div className="flex items-center text-gray-500 mt-4 text-sm">
           <p className="border border-purple-600 text-purple-600 rounded-full px-4 py-1">
             {blog.category}
           </p>
           <p className="px-4">
             {blog.createdAt?.toDate().toLocaleDateString()}
           </p>
           <p className="italic">By {blog.author}</p>
         </div>
          <h1 className="text-2xl font-extrabold">{blog.title?.toUpperCase()}</h1>
         <h2 className=" py-4 text-gray-700">{blog.subtitle}</h2>
    </Link>
  );
}
