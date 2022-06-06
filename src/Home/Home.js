import React from "react";
import "./Home.css";
import logo from "../images/leafimage.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1 id="home">Home page</h1>
      <div className="image-container">
        <img src={logo} alt='background image' />
      </div>
      <p>
        author:monierabdelghani@yahoo.com <br/>ABSTRACT The present study represents
        an attempt to document information on the traditional medicinal plants
        that used in Nigeria. A compiled check list of these plants including
        their Latin names, families, parts used, medicinal uses, and name in
        different Nigerian states is the main purpose of this study. All
        available information about either the traditional medicinal plants or
        ethnobotanical surveys in Nigeria was consulted. The study showed that
        325 species and 95 families of medicinal plants were recognized as being
        used by most of the people in Nigeria for the treatment of various
        common diseases. Fabaceae has the largest number of species (42),
        followed by Asteraceae (22), Euphorbiaceae (20), Acanthaceae (13) and
        Apocynaceae (12). The largest genera were Euphorbia (6 species), Cola
        and Hibiscus (5 species for each), Albizia, Acacia, Combretum and Ficus
        (4 species for each), Acalypha, Allium, Clerodendrum and Cleome (3
        species for each). The study revealed that traditional medicinal
        practices have a wide acceptability among the Nigerian people, probably
        because they believe in its effectiveness. The medicinal uses are
        varied, and the plant parts that are used ranged from leaves, roots,
        stem, bark to fruits only, or a combination of two or more in a species
        or with those of other species. Enduring and sustainable conservation
        efforts should be implemented to safeguard these important medicinal
        plants. Keywords: Ethnomedicine, diversity, distribution, traditional
        healers, Nigeria.
      </p>
      <h2 id="about">INTRODUCTION</h2>
      <p>
        Medicinal plants constitute an effective source of both traditional and
        modern medicine. These plants have been shown to have genuine utility
        and about 80% of the rural population depends on them as primary health
        care (Akinyemi, 2000). Plants have been used as sources of remedies for
        the treatment of many diseases since ancient times and people of all
        continents especially Africa have this old tradition. Despite the
        remarkable progress in synthetic organic medicinal products of the
        twentieth century, over 25% of prescribed medicines in industrialized
        countries are derived directly or indirectly from plants (Newman et al.,
        2000). However, plants used in traditional medicine are still
        understudied (Kirby, 1996). In developing countries, notably in West
        Africa, new drugs are not often affordable. Thus, up to 80% of the
        population uses medicinal plants as remedies (Kirby, 1996; Hostellmann
        and Marston, 2002). According to the World Health Organization (WHO) the
        definition of traditional medicine may be summarized as the sum total of
        all the knowledge and practical, whether explicable or not, used in the
        diagnosis, prevention and elimination of physical, mental or social
        imbalance and relying exclusively on practical experience and
        observation handed down from generation to generation, whether verbally
        or in writing. Traditional medicine might also be considered as a solid
        amalgamation of dynamic medical known-how and ancestral experience. In
        Africa, traditional healers and remedies made from plants play an
        important role in the health of millions of people. Traditional medicine
        has been described by the WHO as one of the surest means to achieve
        total health care coverage of the world’s population. Numerous medicines
        have been derived from the knowledge of tropical forest people and
        clearly there will be more in the future. This alone is reason enough
        for any and all programs to be concerned with the conservation,
        development, and protection of tropical forest regions. It has been
        estimated that in developed countries such as United States, plant drugs
        constitute as much as 25% of the total drugs, while in fast developing
        countries such as China and India, the
      </p>
    </div>
  );
};

export default Home;
