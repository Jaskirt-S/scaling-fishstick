import axios from "axios";
const instance= axios.create({
    baseURL:"http://localhost:5000",
    timeout:1500,
})
instance.interceptors.request.use(
    async(config)=>{
        try {
            const accesstoken =localStorage.getItem("accesstoken");
            config.headers.Authorization= `Bearer ${accesstoken}`;
            return config;
        } catch (error) {
            console.log("request Error",error);
        }
    }
)

instance.interceptors.response.use(
    (response)=>{
        console.log("reponse data",response.data);
        return response;
    },
    (error)=>{
        console.log("response error",error)
        if(error.response.status=== 401)
        {
            console.log("Unauthorized error... Redirecting to login...")
        }
    }

)
export default instance;