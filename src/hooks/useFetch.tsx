import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)

    useEffect(()=>{

        fetch(url)
        .then(res=>res.json())
        .then(res=>setData(res))
        .catch(err=>setError(err.message))
        .finally(()=>setLoading(false))
    },[url])
    
    return {data,loading,error}
}