import { apiEndPoints, axiosInstance } from "../../api";


const checkAuth = async () => {
    return await axiosInstance.post(
        apiEndPoints.auth.checkAuth,
        {}
    )
}

export default checkAuth;