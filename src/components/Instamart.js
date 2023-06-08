import { useState } from "react";

const Section = (props) => {
  const { title, isVisible, setIsVisible } = props;
  return (
    <>
      <div className="border border-white py-8 px-4">
        <h1>{title}</h1>
        {isVisible ? (
          <>
            <button onClick={() => setIsVisible(false)}>Hide</button>
            <p>{props.description}</p>
          </>
        ) : (
          <button onClick={() => setIsVisible(true)}>Show</button>
        )}
      </div>
    </>
  );
};

const Instamart = () => {
  const [sectionVisible, setSectionVisible] = useState("");
  return (
    <>
      <div className="bg-slate-100 px-4">
        <Section
          title={"About Mart"}
          description={
            "Cheer on your favorite red and white team in eye-popping style with these red & white striped game bib overalls! Each pair is made of 100 percent cotton for a comfortable, breathable fit regardless of the weather and includes easily adjustable shoulder straps for fans with long torsos. Whether you’re on rickety bleachers on a Friday night or trying to get on television at the Sunday morning tailgate, our red & white striped game bibs will make you stand out in the crowd and leave an impression. These particular bib overalls are also great as casual Clauswear for any Saint Nicks who might be taking in a game during the holiday offseason!"
          }
          isVisible={sectionVisible === "about"}
          setIsVisible={() => setSectionVisible("about")}
        />

        <Section
          title={"Team Mart"}
          description={
            "Cheer on your favorite red and white team in eye-popping style with these red & white striped game bib overalls! Each pair is made of 100 percent cotton for a comfortable, breathable fit regardless of the weather and includes easily adjustable shoulder straps for fans with long torsos. Whether you’re on rickety bleachers on a Friday night or trying to get on television at the Sunday morning tailgate, our red & white striped game bibs will make you stand out in the crowd and leave an impression. These particular bib overalls are also great as casual Clauswear for any Saint Nicks who might be taking in a game during the holiday offseason!"
          }
          isVisible={sectionVisible === "team"}
          setIsVisible={() => setSectionVisible("team")}
        />

        <Section
          title={"Details of Mart"}
          description={
            "Cheer on your favorite red and white team in eye-popping style with these red & white striped game bib overalls! Each pair is made of 100 percent cotton for a comfortable, breathable fit regardless of the weather and includes easily adjustable shoulder straps for fans with long torsos. Whether you’re on rickety bleachers on a Friday night or trying to get on television at the Sunday morning tailgate, our red & white striped game bibs will make you stand out in the crowd and leave an impression. These particular bib overalls are also great as casual Clauswear for any Saint Nicks who might be taking in a game during the holiday offseason!"
          }
          isVisible={sectionVisible === "details"}
          setIsVisible={() => setSectionVisible("details")}
        />

        <Section
          title={"Product"}
          description={
            "Cheer on your favorite red and white team in eye-popping style with these red & white striped game bib overalls! Each pair is made of 100 percent cotton for a comfortable, breathable fit regardless of the weather and includes easily adjustable shoulder straps for fans with long torsos. Whether you’re on rickety bleachers on a Friday night or trying to get on television at the Sunday morning tailgate, our red & white striped game bibs will make you stand out in the crowd and leave an impression. These particular bib overalls are also great as casual Clauswear for any Saint Nicks who might be taking in a game during the holiday offseason!"
          }
          isVisible={sectionVisible === "product"}
          setIsVisible={() => setSectionVisible("product")}
        />
      </div>
    </>
  );
};

export default Instamart;
