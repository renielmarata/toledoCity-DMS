import { apiEndPoints, axiosInstance } from "../../api"

const refreshAccessTokenService = async () => {
    return axiosInstance.post(
        apiEndPoints.auth.refreshAccessToken,
    )
}


export default refreshAccessTokenService;