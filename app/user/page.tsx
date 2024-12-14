"use client";

import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

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