import React, { useState, useRef } from "react";
import "./Collection.css";
import PlantImage from "../images/leafimage.jpg";
import { data } from "./data";

const Collection = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
    if (copySuccess != "") {
      // copySuccess.style.color = "red";
      console.log("snazzyyooo");
    }
    setTimeout(setCopySuccess, 1500);
  }
  return (
    <>
      <h1 id="database">medicinal plants collection found in the study area</h1>
      <section className="plants-container">
        {data.map(item=>{
      
          return(
        <article className="single-plant">
          <img src={PlantImage} alt="plant image" className="plant-image" />
          <h2>
            botanical name: <span>{item.botanical_name}</span>
          </h2>
          <h3>
            common name: <span>{item.common_name}</span>
          </h3>
          <h3>
            local name: <span>{item.local_name}</span>
          </h3>
          <h3>
            part(s) used: <span>{item.parts_used}</span>
          </h3>
          <h3>
            medicinal uses: <span>{item.medicinal_uses}</span></h3>
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
              href="https://earth.google.com/web/@0,0,0a,22251752.77375655d,35y,0h,0t,0r"
              target="_blank"
            >
              go to google earth engine
            </a>
          </h3>
          <p>
            botanical description:{" "}
            <span>
              Moringa oleifera is a small, graceful, deciduous tree with sparse
              foliage, often resembling a leguminous species at a distance,
              especially when in flower, but immediately recognized when in
              fruit. The tree grows to 8 m high and 60 cm dbh. Bole crooked,
              often forked from near the base. Bark smooth, dark grey; slash
              thin, yellowish. Twigs and shoots shortly but densely hairy. Crown
              wide, open, typically umbrella shaped and usually a single stem;
              often deep rooted. The wood is soft.
              <a
                href="https://go to wikipedia page or article on that plant"
                blank="_target"
              >
                read more....
              </a>
            </span>
          </p>
        </article>

          )
        })}
      </section>
    </>
  );
};

export default Collection;
