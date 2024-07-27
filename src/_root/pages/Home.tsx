import PostCard from "@/components/shared/PostCard";
import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import { PostProps } from "@/types";
import { Link } from "react-router-dom";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Car Feed</h2>
          {isPostLoading ? (
            <div className="flex items-center">
              <Loader className="mr-2 animate-spin" /> Loading posts...
            </div>
          ) : isErrorPosts ? (
            <p className="text-red">Error loading posts.</p>
          ) : (
            <div className="flex flex-col flex-1 gap-9 w-full">
              {posts && posts.length > 0 ? (
                posts.map((post: PostProps) => (
                  <div key={crypto.randomUUID()} className="flex justify-center w-full">
                    <PostCard post={post} />
                  </div>
                ))
              ) : (
                <div className="my-44 text-xl text-center text-white">
                  <h1>There is no Car Post Yet, Be the First To Post</h1>
                  <Button className="inline-flex my-6 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150">
                    <Link to="/create-post" className="text-white no-underline">
                      Create Post
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
