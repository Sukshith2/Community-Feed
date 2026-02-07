import api from "./axios";

export const createPost = (data) => {
  return api.post("/posts", data);
};

// export const getfeed = () => {
//   return api.get("/posts");
// };
export const getfeed = () => {
   return api.get("/posts");  
};