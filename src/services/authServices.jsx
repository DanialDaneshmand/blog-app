const { default: http } = require("./httpServices");

export const signUpApi = async (data) => {
  return await http.post("/user/signup", data).then(({ data }) => data.data);
};

export const signInApi = async (data) => {
  return await http.post("/user/signin", data).then(({ data }) => data.data);
};

export const getUserApi = async () => {
  return await http.get("/user/profile").then(({ data }) => data.data);
};
