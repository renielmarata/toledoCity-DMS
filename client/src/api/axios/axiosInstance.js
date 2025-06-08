import { axios } from "../../utils/libs";


const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
    headers: {
        'Content-Type':'application/json',
    }
});

let isRefreshing = false;
let pendingRequests = [];

const processPendingRequests = (error) => {
    pendingRequests.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve();
        }
    });
    pendingRequests = [];
}



axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        if (error?.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    pendingRequests.push({resolve, reject});
                }).then(() => {
                    return axiosInstance(originalRequest);
                })
            }

            isRefreshing = true;

            try {
                await axiosInstance.post(
                    'auth/refresh',
                    {},
                );
                processPendingRequests(null);
                return axiosInstance(originalRequest);
            } catch (error) {
                processPendingRequests(error);
                return Promise.reject(error);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
)

export default axiosInstance;