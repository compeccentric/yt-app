import axios from "axios";
const KEY = "AIzaSyAXVis09t7srq1ey_UMtcJjf_U7q8yUSWA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
