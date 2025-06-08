import { apiEndPoints, axiosInstance } from "../../api"

const checkRefreshToken = async () => {
    return axiosInstance.post(
        apiEndPoints.auth.checkAuth,
    )
}


export default checkRefreshToken;