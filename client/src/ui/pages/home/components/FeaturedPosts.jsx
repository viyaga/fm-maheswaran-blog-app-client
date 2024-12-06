import { format } from "timeago.js";
import Link from "next/link";
import Image from "next/image";

const FeaturedPosts = () => {

  const posts = [
    { title: "chess", img: "/images/puzzle.jpg", category: "End Games", createdAt: "05/12/2024", slug: "080905" },
    { title: "chess", img: "/images/featured.jpeg", category: "End Games", createdAt: "05/12/2024", slug: "080905" },
    { title: "chess", img: "/images/featured.jpeg", category: "End Games", createdAt: "05/12/2024", slug: "080905" },
    { title: "chess", img: "/images/featured.jpeg", category: "End Games", createdAt: "05/12/2024", slug: "080905" },
  ];

  if (!posts || posts.length === 0) {
    return;
  }

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        {posts[0].img && <Image
          src={posts[0].img}
          className="rounded-3xl object-cover"
          width="895"
          height="600"
        />}
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link href="/" alt="" className="text-blue-800 lg:text-lg">{posts[0].category}</Link>
          <span className="text-gray-500">{format(posts[0].createdAt)}</span>
        </div>
        {/* title */}
        <Link
          href={posts[0].slug}
          alt="" 
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          {posts[0].title}
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        {posts[1] && <div className="lg:h-1/3 flex justify-between gap-4">
          {posts[1].img && <div className="w-1/3 aspect-video">
            <Image
              src={posts[1].img}
              className="rounded-3xl object-cover w-full h-full"
              width="298"
              height="600"
            />
          </div>}
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link href="/" alt=""  className="text-blue-800">{posts[1].category}</Link>
              <span className="text-gray-500 text-sm">{format(posts[1].createdAt)}</span>
            </div>
            {/* title */}
            <Link
              href={posts[1].slug}
              alt="" 
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              {posts[1].title}
            </Link>
          </div>
        </div>}
        {/* third */}
        {posts[2] && <div className="lg:h-1/3 flex justify-between gap-4">
          {posts[2].img && <div className="w-1/3 aspect-video">
            <Image
              src={posts[2].img}
              className="rounded-3xl object-cover w-full h-full"
              width="298"
              height="600"
            />
          </div>}
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link href="/" alt="" className="text-blue-800">{posts[2].category}</Link>
              <span className="text-gray-500 text-sm">{format(posts[2].createdAt)}</span>
            </div>
            {/* title */}
            <Link
              href={posts[1].slug}
              alt="" 
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              {posts[2].title}
            </Link>
          </div>
        </div>}
        {/* fourth */}
        {posts[3] && <div className="lg:h-1/3 flex justify-between gap-4">
          {posts[3].img && <div className="w-1/3 aspect-video">
            <Image
              src={posts[3].img}
              className="rounded-3xl object-cover w-full h-full"
              width="298"
              height="600"
            />
          </div>}
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link href="/" alt="" className="text-blue-800">{posts[3].category}</Link>
              <span className="text-gray-500 text-sm">{format(posts[3].createdAt)}</span>
            </div>
            {/* title */}
            <Link
              href={posts[3].slug}
              alt="" 
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              {posts[3].title}
            </Link>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default FeaturedPosts;
