"use client";

import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

export default function User(){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const api = "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    useEffect(() => {
        if (api) {
            axios.get(api)
            .then((response) => {
                setData(response.data)
                setLoading(false)
            })
        } else {
            console.error("API URL is not defined");
            setLoading(false);
        }
    }, [])

    if(loading){
        return <h1>Loading...</h1>
    }
    
    return(
        <div>
            {data.name}
            {data.email}
    </div>
)}   