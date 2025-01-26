import axios from "axios";

const axiosSecure = axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://task-hive-server-zeta.vercel.app'
  });

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;