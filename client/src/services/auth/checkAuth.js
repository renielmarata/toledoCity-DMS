import { apiEndPoints, axiosInstance } from "../../api"

const checkAuth = async () => {
    return axiosInstance.post(
        apiEndPoints.auth.checkAuth,
    )
}


export default checkAuth;