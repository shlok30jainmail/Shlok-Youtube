import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const Watchpage = ()=>{
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect(()=>{
        
         dispatch(closeMenu())

    }, [])
    return(
        <div>
           <iframe 
           width="900" 
           height="450" 
           src={"https://www.youtube.com/embed/"+searchParams.get("v")}
           title="YouTube video player" 
           frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
};

export default Watchpage;