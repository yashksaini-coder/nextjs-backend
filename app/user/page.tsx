import axios from "axios"

export default async function User(){
    const api = "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    
    const response = await axios.get(api);
    const data = response.data;
    console.log(data.data)

    return(
        <div>
            {data.name}
            {data.email}
    </div>
)}