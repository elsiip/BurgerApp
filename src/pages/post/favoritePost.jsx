import { useMemo } from "react";
import { useSelector } from "react-redux";
import PostCard from "./postCard";

export default function FavoritePost({ usersPost = [] }) {
  const { listOfFavoritesPosts } = useSelector((state) => state?.post);

  return (
    <div className="mt-14">
      <h1 className="mb-12 text-2xl font-bold text-center">LIST OF FAVORITE POSTS</h1>
      <div className="grid grid-cols-5 gap-8">
        {listOfFavoritesPosts.map((item, i) => (
          <PostCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
}