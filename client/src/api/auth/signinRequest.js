import { signinService } from "../../services";


const signinRequest = async (data) => {
    try {
        const res = await signinService(data);
        console.log(res);

    } catch (err) {
        console.log(err);
    }
}

export default signinRequest;