import { format } from "timeago.js";
import Link from "next/link";
import Image from "next/image";
import FeaturedPostCard from "./FeaturedPostCard";
import { Card, CardContent } from "@/components/ui/card";

const FeaturedPosts = () => {
  const posts = [
    { title: "Chess Unlocked:Secrets of Grandmaster Play", img: "/images/puzzle.jpg", category: "End Games", createdAt: "05/12/2024", slug: "080905" },
    { title: "Chess Unlocked:Secrets of Grandmaster Play", img: "/images/featured.jpeg", category: "End Games", createdAt: "05/12/2024", slug: "080905" },
    { title: "Chess Unlocked:Secrets of Grandmaster Play", img: "/images/featured.jpeg", category: "End Games", createdAt: "05/12/2024", slug: "080905" },
    { title: "Chess Unlocked:Secrets of Grandmaster Play", img: "/images/featured.jpeg", category: "End Games", createdAt: "05/12/2024", slug: "080905" },
  ];

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <Card className="w-full lg:w-1/2">
        <CardContent className="flex flex-col gap-4 p-4">
          {/* image */}
          {posts[0].img && (
            <Image src={posts[0].img} className="rounded-3xl object-cover" width="895" height="400" alt="" />
          )}
          {/* details */}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-blue-800 lg:text-lg">{posts[0].category}</Link>
            <span className="text-gray-500">{format(posts[0].createdAt)}</span>
          </div>
          {/* title */}
          <Link href={posts[0].slug} className="text-xl lg:text-3xl font-semibold lg:font-bold">
            {posts[0].title}
          </Link>
        </CardContent>
      </Card>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {posts.slice(1).map((post, index) => (
          <FeaturedPostCard key={index} post={post} sNo={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
