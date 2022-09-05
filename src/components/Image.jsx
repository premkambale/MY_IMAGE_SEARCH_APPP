import React,{useState} from "react";



const Image =(props)=>{
    const [download,setDownload]=useState(props.img.links.download);
    
    // console.log(props.img.links.download);
    return(
        <>
        <div className="imgMain">
        <img src={props.src} alt=""/>
        <a href={download}>&nbsp; View &nbsp;</a>
        </div>
        </>
    );
}
export default Image;  