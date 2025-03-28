
// ---- Post List Component ----
import { getRecentBlogs } from "@/lib/strapi";
import PostListItem from "./PostListItem";

const PostList = async ({ slug }) => {
  const blogs = await getRecentBlogs({ page: 1, pageSize: 6, category: slug });

  if (blogs?.error) {
    return <p className="text-red-500 text-center">An error occurred. Please try again later.</p>;
  }

  return (
    <section className="my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.data?.length > 0 ? (
          blogs.data.map((post) => <PostListItem key={post.id} post={post} />)
        ) : (
          <p className="text-center text-gray-400 col-span-full">No posts available.</p>
        )}
      </div>
    </section>
  );
};

export default PostList;