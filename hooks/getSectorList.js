import React, { useState, useEffect } from "react"; 
import { sectorList } from "../utils/api-Request";
const useFetchSectordetails = (returnState) => { 

    useEffect(() => {  
        sectorList().then((res) => returnState(res?.data?.data))
            .catch((error) => {
                console.log(error)
            });
    }, []);
 
};
export default useFetchSectordetails