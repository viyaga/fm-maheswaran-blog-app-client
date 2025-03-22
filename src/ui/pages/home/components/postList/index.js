import PostListItem from "./PostListItem";
import { getRecentBlogs } from "@/lib/strapi";

const PostList = async () => {
  const page = 1;
  const pageSize = 10;

  const blogs = await getRecentBlogs({ page, pageSize });

  if (blogs?.error) {
    return <p className="text-red-500 text-center">An error occurred. Please try again later.</p>;
  }

  return (
    <div className="my-12">
      {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Recent Posts</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.data?.length > 0 ? (
          blogs.data.map((post, index) => (
            <PostListItem key={index} post={post} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default PostList;
