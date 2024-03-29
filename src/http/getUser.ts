import axios from "axios";

const getUser = (name: string) => {
  return axios.get(`https://api.github.com/users/${name}`);
};

export default getUser;
