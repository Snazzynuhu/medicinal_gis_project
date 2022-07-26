import React, { useState } from "react";
import "./Home.css";
// import logo from "../images/leafimage.jpg";
import logo from "../Medi_plants_images/background.png";
import { data } from "../Collection/data";

const Home = () => {
  const [modal, setModal] = useState(false);
  const openModal=()=>{
    setModal(!modal)
  }
  return (
    <div className="home">
      <h1 id="home">&nbsp;</h1>
      <div className="image-container">
        <img src={logo} alt="background image" />
      </div>
      <h2 class="heading" id="abstract">
        abstract
      </h2>
      <p>
        The practice, knowledge of medicinal plants and the use of the same for
        therapeutic purposes has been an integral part of Nigeria culture since
        medieval times. They occur naturally and are capable of withstanding
        adverse environmental weather conditions and anthropogenic activities.
        However, their over-exploitation, unintentional removal and lack of
        identification and mapping are matters of grave concern. Occurrence of
        medicinal plants in densely populated built up areas are a rarity (e.g.,
        Lagos, Nigeria). Obafemi Awolowo University having a large expanse of
        land with dense vegetation was chosen for the present investigation to
        identify and map the exact GPS location of medicinal plant species found
        in this area. For same model to be used in other educational institute
        in Nigeria. The application of Geographic Information System (GIS) in
        plant taxonomy, ecosystem management and various components of
        biodiversity is reviewed. Incorporation of geo-referenced ground data
        helps in the identification and mapping out of areas susceptible to
        habitat shrinkage and species loss. The project aims at the use of
        geographic information technology in mapping and monitoring of species
        and habitats of common medicinal plants (e.g Chromolaena odorata,
        Ageratum conyzoides and Senna alata) in OAU, Ile-Ife Osun, State,
        Nigeria. The gap between the rate of exploration and conservation is
        analyzed, characterization of habitat and landscape level biodiversity,
        species distribution pattern and modelling. The relationship between the
        land use and medicinal plant species would be implemented to explore the
        plants modeling both spatial and non-spatial data under the GIS
        platform.
      </p>
      <h2 id="about" class="heading">
        introduction
      </h2>
      <p>
        As defined by W.H.O. Medicinal plants are plants in which one or more of
        its parts contains phytochemicals substances such as alkaloid,
        flavonoid, saponin, tannin and other phenolic compounds that can be used
        for therapeutic purposes or which are precursors for the synthesis of
        useful drugs. The use of medicinal plants in both developed and
        developing nations as basis for the treatment of numerous ailments has
        been a practice for thousands of years and their importance to man
        cannot be over-emphasized. Developing countries, Nigeria as a used case,
        statistic shows that 60-85% of its citizens rely on indigenous or herbal
        form of medicine, partly due to the inaccessibility of orthodox medicine
        but the major contributing factor is the fact that it blends readily
        into the socio-cultural lives of the people who have high cultural
        values. The fascinating thing about these medicinal plants is that they
        are easily found around communities with low density of human population
        and less destructive anthropogenic activities. These plants are used for
        the treatment of various diseases such as viral liver disease,
        anti-microbial, anti-inflammatory, anti-cancer etc. All these incredible
        benefits of medicinal plants become meaningless, if they are difficult
        to identify and locate. Over-exploitation and lack of conservation
        measures will lead to an increase in the number of endangered plant
        species and this will ultimately result in their extinction.They serve
        as an alternative to orthodox drugs. Although, modern medicine enjoys
        maximum popularity all over the world. Its side effects are negative
        chemical reactions, therefore, destroying the goal of the use of
        medicine. Due to chemical abuse, there has been a lot of health issues.
        A larger population of the world had been clamoring for drug abatement
        in recent time. Slow rejuvenation of indigenous communities has to be
        taken care of for the present need. These indigenous people before the
        advent of technology and science are in tune with their habitat and
        conversant with these medicinal plants, application, ability to identify
        these medicinal plants without much difficulty and method of usage. But,
        due to urbanization and industrialization this contact with nature was
        cut down literally, consequently the knowledge about the identification
        of plants also deteriorated. It is high time we combine the knowledge
        possess by the indigenous people with GIS and remote sensing to aid the
        proper identification of these medicinal plant that are peculiar to
        these regions and ensure their conservation and increase biodiversity.
      </p>
      <div className="plant_list_container">
        {data.map((item, index) => {
          return (
            <h3 className="plant_name" onClick={openModal}>
              Plant {index + 1}: <span>{item.common_name}</span>
            </h3>
          );
        })}
      </div>
      {modal&&<section className="modal_container">
      <button className="close_btn" onClick={()=>setModal(!modal)}>X</button>
        <article>content about plant goes in here </article>
      </section>}
    </div>
  );
};

export default Home;
