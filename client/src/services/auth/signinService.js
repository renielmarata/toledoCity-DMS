import { apiEndPoints, axiosInstance } from "../../api";

const signinService = async (data) => {
    return axiosInstance.post(
        apiEndPoints.auth.signin,
        data,
    );

}

export default signinService;