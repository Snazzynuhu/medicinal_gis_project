import React, { useState, useRef } from "react";
import "./Collection.css";
import { data } from "./data";
import Navbar from "../Navbar/Navbar";

const Collection = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  const [showMenu] = React.useState(false);
  const [plantCollection, setPlantCollection] = useState(data)

  const [searchText, setSearchText] = React.useState("");

  const handleChange=(e)=>{
    const text = e.target.value
    setSearchText(e.target.value);
    console.log('text', e.target.value);
    const filteredList = plantCollection.filter( data  =>
      data.botanical_name.toLowerCase().contains(text.toLowerCase())
    );
    console.log('t', text);
    console.log('t2', filteredList);
    setPlantCollection(filteredList);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('text', searchText);
    console.log('1', data)
    // const newData =  data.filter(datum=> datum.botanical_name.startsWith(searchText));
    // setPlantCollection(newData)
    // console.log('here', newData);
    const filteredList = plantCollection.filter( data  =>
    data.botanical_name.toLowerCase().startsWith(searchText.toLowerCase())
  );
  setPlantCollection(filteredList);
  console.log("filteredList", filteredList);

  };

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
    if (copySuccess !== "") {
      // copySuccess.style.color = "red";
      console.log("snazzyyooo");
    }
    setTimeout(setCopySuccess, 1500);
  }
  return (
    <>
    <Navbar showMenu={showMenu}/>

    <form onSubmit={handleSubmit}>
        <div className="searchBox">
          <input type="text" className="searchInput" name="searchText" value={searchText}  onChange={handleChange} />
          <button className="searchBtn" type="submit">
            Search
          </button>
        </div>
      </form>
      <h1 id="database" className="medi_heading">
        medicinal plants collection found in the study area
      </h1>
      <section className="plants-container">
        {plantCollection.map((item) => {
          return (
            <article className="single-plant" key={item.common_name}>
              <img src={item.image} alt="" className="plant-image" />
              <h2 className="botanical_name">
                botanical name: <span>{item.botanical_name}</span>
              </h2>
              <h3 className="common_name">
                common name: <span>{item.common_name}</span>
              </h3>
              <h3 className="local_name">
                local name: <span>{item.local_name}</span>
              </h3>
              <h3 className="part_used">
                part(s) used: <span>{item.parts_used}</span>
              </h3>
              <h3 className="medicinal_uses">
                medicinal uses: <span>{item.medicinal_uses}</span>
              </h3>
              <button onClick={copyToClipboard} className="copy-btn">
                click to copy coordinates
              </button>
              {copySuccess}

              <form>
                <input
                  className="lat-long-input"
                  type="text"
                  ref={textAreaRef}
                  value={item.coordinates}
                />
              </form>

              <h3>
                click:{" "}
                <a
                  className="link_googlearth"
                  href="https://earth.google.com/web/@0,0,0a,22251752.77375655d,35y,0h,0t,0r"
                  target="_blank" rel="noreferrer"
                >
                  go to google earth engine
                </a>
              </h3>
              <p className="plant_description">
                botanical description:{" "}
                <span>
                  {(item.description).substring(0,250)}
                  <a href={item.url} blank="_target">
                    read more....
                  </a>
                </span>
              </p>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Collection;
