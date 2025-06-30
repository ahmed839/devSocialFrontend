import axios from "axios";
import { BASE_URL } from "../../env";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./userCard";
import UserCardShimmer from "./UserCardShimmer";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed);
  console.log("feed Data comes from Feed data", feedData);
  const getFeed = async () => {
    if (feedData) return;
    const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
    dispatch(addFeed(res?.data?.user));
  };
  useEffect(() => {
    getFeed();
  }, []);
  return (
    <div className="flex justify-center my-10">
      {!feedData || feedData.length === 0 ? (
        <UserCardShimmer />
      ) : (
        <UserCard user={feedData[0]} />
      )}
    </div>
  );
};
export default Feed;
