import axios from "axios"
import Loading from "./loading";
export default async function User(){
    const api = "http://localhost:3000/api/v1/user/details";
    
    const response = await axios.get(api);
    await new Promise(r=> setTimeout(r, 5000));
    const data = response.data;
    console.log(data.data)

    return(
        <div>
            {data.name}
            <br></br>
            {data.email}
        </div>
)}