import { useBlogs } from '../../../contexts/blogsContext'
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export default function CurrentBlog() {
  const { currBlog, blogs } = useBlogs();
  useEffect(() => {
    console.log(blogs);
  })
  if (!currBlog) {
    return <div className="pt-16 text-center text-gray-500">Loading blog...</div>;
  }

  return (
    <div className="pt-16 max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold">{currBlog.title?.toUpperCase()}</h1>
      <h2 className="text-xl py-4 text-gray-700">{currBlog.subtitle}</h2>

      <div className="flex items-center text-gray-500 text-sm">
        <p className="border border-purple-600 text-purple-600 rounded-full px-4 py-1">
          {currBlog.category}
        </p>
        <p className="px-4">
          {currBlog.createdAt?.toDate().toLocaleDateString()}
        </p>
        <p className="italic">By {currBlog.author}</p>
      </div>

      {currBlog.images && currBlog.images.length > 0 && (
        <img
          className="rounded-2xl mt-10 w-full"
          src={currBlog.images[0]}
          alt={currBlog.title}
        />
      )}

      <article className="prose prose-lg mt-10">
        {/* <ReactMarkdown>{currBlog.content}</ReactMarkdown> */}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            // rehypePlugins={[rehypeRaw]} // optional; only if HTML allowed
          >
            {currBlog.content}
            {/* {`# Some key environmental factors\n\nTooling & Frameworks: Modern frameworks (React, Django, NestJS) provide abstractions ...\n\n## How this could help AI-assisted development\n\nIf you could quantify environmental factors ...\n\n## Limitations\n\nNot all factors are quantifiable ...\n\n**Conclusion:** Environment influences code volume but human judgment is needed.`} */}
          </ReactMarkdown>
      </article>
    </div>
  );
}
