import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import likeBtn from "./assets/images/like-icons-5.png";
import dislikeBtn from "./assets/images/dislike_PNG56.png";
import shareBtn from "./assets/images/share-1.webp"

import LiveChat from "./LiveChat";

const Watchpage = ()=>{
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect(()=>{
        
         dispatch(closeMenu())

    }, [])
    return(
       <div>
         <div className="flex flex-col items-center  justify-center w-[100vw] sm:justify-normal sm:flex md:flex-row">
            <div className="flex flex-col items-center">
                
           <div className="flex justify-center w-[80vw] h-[25vh] sm:w-[70vw] sm:h-[70vh]">
           <iframe 
           width="100%" 
           height="100%" 
           src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?autoplay=1"}
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerpolicy="strict-origin-when-cross-origin"></iframe>
          </div>



           <div className="relative flex flex-wrap py-2 my-3 w-[75vw]"> 
        
            <div className="flex">
            <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="logo" className="h-12 w-18" /> 
            <div>
                 <h2 className="text-sm font-bold">Youtube-channel</h2>
                 <p className="text-xs">31.7k Subscriber</p>
            </div>
            <button className="h-12 px-5 mx-3 text-white bg-black rounded-full hover:bg-zinc-950">Subscribe</button>
            </div>

            <div className="static flex h-10 m-3 sm:ml-5 right-1 md:absolute flex-nowrap">
                    <button className="w-20 h-10 px-6 py-2 rounded-s-full bg-slate-100 hover:bg-slate-300"><img src={likeBtn} alt="like-button" className="w-6"/></button>
                    <button className="w-20 h-10 px-6 py-2 border rounded-e-full bg-slate-100 border-l-slate-400 hover:bg-slate-300"><img src={dislikeBtn} alt="dislike-button" className="w-6"/></button>
                    <button className="w-40 h-10 px-6 py-2 mx-3 my-3 border rounded-full bg-slate-100 hover:bg-slate-300"><img src={shareBtn} alt="share-button" className="inline-block w-6"/> Share</button>
             </div>  

           </div>



            </div>


        <div className=" w-[80vw] m-10 sm:mx-3  h-[20vh] sm:w-[25vw] sm:h-[70vh]">
             <LiveChat/>
        </div>
        
        </div>

        <div className="">
            <CommentContainer/>
        </div>
       </div>
    )
};

export default Watchpage;