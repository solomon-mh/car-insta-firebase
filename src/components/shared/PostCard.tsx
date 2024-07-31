import { useState } from "react";
import { Link } from "react-router-dom";
import { PostProps } from "@/types";

const PostCard = ({ post }: { post: PostProps }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="post-card bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <Link to={`/profile/${post.$id}`}>
          <img
            src={post?.imageUrl || "/assets/icons/profile-placeholder.svg"}
            alt="Profile"
            className="rounded-full w-12 h-12 object-cover"
          />
        </Link>
        <div className="ml-4">
          <p className="text-gray-900 font-semibold">{post.carModel}</p>
          <p className="text-gray-600">{post.location}</p>
        </div>
      </div>
      <Link to={`/posts/${post.$id}`}>
        <div className="p-4">
          <p className="text-gray-800 mb-2">{post.caption}</p>
          <p className="text-gray-600 mb-2">Make: {post.carMake}</p>
          <p className="text-gray-600 mb-2">Year: {post.carYear}</p>
          <p className="text-gray-600 mb-2">Price: ${post.carPrice}</p>
          <p className="text-gray-600 mb-2">Mileage: {post.carMileage} miles</p>
          {/* <div className="flex flex-wrap gap-2 mt-2">
            {post.tags.split(",").map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-gray-200 rounded-full px-2 py-1"
              >
                #{tag}
              </span>
            ))}
          </div> */}
        </div>
        {!imageError && post.imageUrl ? (
          <img
            src={post.imageUrl}
            alt="Car"
            className="w-full h-64 object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <p className="text-red-500 text-center py-6 px-12 mx-auto my-4 w-fit border border-gray-600 font-semibold rounded-lg flex-center font-mono">
            Sorry, the image couldn't be loaded 😢
          </p>
        )}
      </Link>
    </div>
  );
};

export default PostCard;
