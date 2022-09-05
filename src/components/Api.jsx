import React, { useEffect, useState } from "react";
import axios from "axios";

const count = 1;

//useState for storing the perticular searched images



//API for loading the random images
function LoadImage() {
    const [Images, setImages] = useState([]);
    useEffect(() => {
        axios.get("https://api.unsplash.com/photos?client_id=j_cMujFs5WOSxXYzY-Kz1jg_EbOIEX-KxOcLZCu9Gzo")
            .then((fetchedImeges) => {
                setImages(fetchedImeges.data);
            })
            .catch((err) => {
                console.log("error to fetch the images");
            });
    }, [count])

    return Images;
}




//api to search perticular images
function SearchImage(query) {
const [newImage, setNewImage] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.unsplash.com/search/photos?query="+query+"&client_id=j_cMujFs5WOSxXYzY-Kz1jg_EbOIEX-KxOcLZCu9Gzo")
            .then((fetchedImege) => {
                console.log(fetchedImege.data);
                setNewImage(fetchedImege.data.results);
            })
            .catch((err) => {
                console.log("error to fetch the images");
            });
    }, [query])

    return newImage;
}
export { LoadImage };
export { SearchImage };
