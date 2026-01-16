import { useLocation, useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const { state } = useLocation();
const blog=state.blog
  const navigate = useNavigate();
console.log(blog?.content)
  if (!blog) {
    return (
      <div className="text-center mt-10">
        <p>No blog data found.</p>
        <button onClick={() => navigate(-1)} className="text-pink-600 mt-2 underline">
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{blog?.title}</h1>
      <p className="mb-4">{blog?.content.intro}</p>
      <div className="space-y-4">
        {blog?.content.body.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-pink-600">{section.heading}</h3>
            <p>{section.para}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 font-medium">{blog?.content.conclusion}</p>
    </div>
  );
};

export default BlogDetail;
