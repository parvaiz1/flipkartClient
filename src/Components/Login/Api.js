import axios from "axios"

export const SignUpApi =async (data)=>{
try{
    return await  axios.post(`https://flip-api-mu.vercel.app/UserAPI/signup`,data)
}catch(err){
    console.log(("api call fail", err))
}
}

export const LoginApi = async (data)=>{
    try{
        return await axios.post("https://flip-api-mu.vercel.app/UserAPI/Login",data)
    }catch(err){
        console.log("api error is", err)
    }
}

export const getProducts= async()=>{
    try{
return await axios.get("https://flip-api-mu.vercel.app/UserAPI/getProduct")
    }catch(err){
        console.log("error while fetching", err)
    }
}

export const getJSONProducts= async()=>{
    try{
return await axios.get("https://dummyjson.com/products")
    }catch(err){
        console.log("error while fetching", err)
    }
}

export const getDetailedProducts=async(id)=>{
    try{
        return await axios.get(`https://flip-api-mu.vercel.app/UserAPI/getDetailedProducts/${id}`)
    }catch(err){
        console.log("error while fetching api", err)
    }
}