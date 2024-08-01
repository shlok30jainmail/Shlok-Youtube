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
        <div className="flex justify-center w-[100vw] sm:justify-normal">
            <div className="flex justify-center w-[80vw] h-[25vh] sm:w-[75vw] sm:h-[70vh]">
           <iframe 
           width="100%" 
           height="100%" 
           src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?autoplay=1"}
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </div>
    )
};

export default Watchpage;