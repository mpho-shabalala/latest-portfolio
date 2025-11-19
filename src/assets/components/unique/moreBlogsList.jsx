import {useBlogs} from '../../../contexts/blogsContext';
import {useEffect, useState} from 'react';
import BlogCard from '../shared/blogCard';
export default function MoreBlogsList() {
  const {blogs, currBlog} = useBlogs();
  const [remBlogs, setRemBlogs] = useState([])
  useEffect(() => {
    if (blogs && currBlog) {
      const remaining = blogs.filter(b => b.id !== currBlog.id);
      setRemBlogs(remaining);
    }
  }, [blogs, currBlog]);
  return (
   <div className="grid grid-cols-2 gap-4">
      {remBlogs.map((blog, i) => {
        return <BlogCard key={i} blog = {blog} />
      })}
    </div>
  );
}
