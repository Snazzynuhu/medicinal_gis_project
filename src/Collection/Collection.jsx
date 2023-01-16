import React, { useState, useRef } from "react";
import "./Collection.css";
<<<<<<< HEAD:src/Collection/Collection.js
// import PlantImage from "../images/leafimage.jpg";
=======
>>>>>>> c93f87527b834ecd24ddff44cf2d9001cdab9409:src/Collection/Collection.jsx
import { data } from "./data";
import Navbar from "../Navbar/Navbar";

const Collection = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  const [showMenu] = React.useState(false);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
<<<<<<< HEAD:src/Collection/Collection.js
    if (copySuccess !== "") {
      // copySuccess.style.color = "red";
      console.log("snazzyyooo");
=======
    if (copySuccess !== " ") {
      copySuccess.style.color = "red";
>>>>>>> c93f87527b834ecd24ddff44cf2d9001cdab9409:src/Collection/Collection.jsx
    }
    setTimeout(setCopySuccess, 1500);
  }
  return (
    <>
    <Navbar showMenu={showMenu}/>
      <h1 id="database" className="medi_heading">
        medicinal plants collection found in the study area
      </h1>
      <section className="plants-container">
        {data.map((item) => {
          return (
<<<<<<< HEAD:src/Collection/Collection.js
            <article className="single-plant" key={item.common_name}>
              <img src={item.image} alt="" className="plant-image" />
=======
            <article className="single-plant">
              <img src={item.image} alt="randommage" className="plant-image" />
>>>>>>> c93f87527b834ecd24ddff44cf2d9001cdab9409:src/Collection/Collection.jsx
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
<<<<<<< HEAD:src/Collection/Collection.js
                  target="_blank" rel="noreferrer"
=======
                  target="_blank"
                  rel="noreferrer"
>>>>>>> c93f87527b834ecd24ddff44cf2d9001cdab9409:src/Collection/Collection.jsx
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
