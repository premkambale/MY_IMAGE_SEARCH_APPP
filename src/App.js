import './App.css';
import { LoadImage, SearchImage } from "./components/Api";
import Image from './components/Image';
import React, { useState, useEffect } from 'react';

function App() {
  const imgData = LoadImage();
  //useState for searched query
  const [inputQuery, setInput] = useState("");
  const [showSearched, setSearched] = useState(false);
  const [searchQ, setSearchQ] = useState("");

  // console.log(inputQuery);
  const reaceivedImg = SearchImage(searchQ);

  //to call search after clicking search button
  const search = () => {
    setSearchQ(inputQuery);
    setSearched(true);
  }
  return (
    <>
      <div className='mainContainer'>
        <div className='searchContainer'>
          <div className='title'>
            <h1>Stark WALLPAPERS</h1>
          </div>
          <div className='search'>
            <input type="text" placeholder='Search image' onChange={(e) => setInput(e.target.value)} />
            {/* <button onClick={search}>Search</button> */}
            <div className="box-1" onClick={search}>
              <div className="btn btn-one">
                <span onClick={search}>Search</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='imagesContainer'>
        {
          showSearched ? reaceivedImg.map((image, key) => (
            <Image src={image.urls.thumb} key={key} img={image} />
          )) : imgData.map((image, key) => (
            <Image src={image.urls.thumb} key={key} img={image}/>
          ))
        }
      </div>

    </>
  );
}

export default App;
