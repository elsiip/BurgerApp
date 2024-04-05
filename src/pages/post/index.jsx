import { useEffect, useState } from "react";
import axios from "axios";
import PostContainer from "./postContainers";
import FavoritePost from "./favoritePost";
import { useDispatch } from "react-redux";
import { setListOfPosts, setListFavoritePosts } from "../../store/slices/post.slice";
import { useFetch } from "../../utils/useFetch";

export default function Users() {
  const [usersPost, setUsersPost] = useState([]);
  const dispatch = useDispatch();

  const {fetcher, data, isLoading} = useFetch();

  useEffect(() => {
    fetcher("/weather?city=sydney");
  },[])

  console.log(isLoading)
  console.log(data)

  return (
    <main className="container mx-auto">
      <PostContainer />
      <FavoritePost usersPost={usersPost} /> {/* Pass data post sebagai prop ke komponen FavoritePost */}
    </main>
  );
}