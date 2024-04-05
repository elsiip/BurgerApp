import { useSelector } from "react-redux";
import PostCard from "./postCard";

export default function PostContainer() {
  const { listOfPosts } = useSelector((state) => state?.post);
  console.log(listOfPosts);
  return (
    <div>
      <h1 className="mb-12 text-2xl font-bold text-center">LIST OF ALL POSTS</h1>
      <div className="grid grid-cols-5 gap-8">
        {Array.isArray(listOfPosts) ? listOfPosts.map((item, i) => (
          <PostCard item={item} key={i} />
        )) : <p>Error: listOfPosts is not an array</p>}
      </div>
    </div>
  );
}