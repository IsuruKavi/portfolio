import { useEffect, useState } from "react";


export const useTest=()=>{
    const [num,setNum]=useState(0);
    //const [currentNum,setCurrentNum]=useState("zero");

    useEffect(()=>{
        console.log("Run for first time")
        setNum(1)
    },[])

    useEffect(()=>{
      console.log("second effect run",num)
    },[num])

    return {num,setNum}
}