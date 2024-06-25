import React from "react";
import styles from "../styles/coding.module.css";
import utils from "../styles/utils.module.css";
import Cards from "./utils/Cards";
import CardsGrid from "./utils/CardsGrid";

const reqUrl =
  "http://localhost/site/index.php/wp-json/wp/v2/projects?acf_format=standard&_fields=id,title,acf";

export default function Coding() {
  const [codingProjects, setCodingProjects] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(reqUrl);
        if (!req.ok) {
          throw new Error("Failed to fetch data");
        }
        const allProjects = await req.json();
        const codingProjectsData = allProjects.filter(
          (project) => project.acf.section.name === "coding"
        );
        setCodingProjects(codingProjectsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
        // res.status(500).json({ error: 'Failed to fetch data' });
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id="coding"
      className={`${utils.subContainers} ${styles.subContainer}`}
    >
      <h2 className={styles.title}>CODING</h2>
      <div className={styles.skills}>
        <div className={styles.skillsCol}>
          <p>C</p>
          <p>C++</p>
          <p>Python</p>
        </div>
        <div className={styles.skillsCol}>
          <p>Java</p>
          <p>JavaScript</p>
          <p>TypeScript</p>
        </div>
        <div className={styles.skillsCol}>
          <p>CSS</p>
          <p>HTML</p>
        </div>
      </div>
      <div className={styles.projects}>
        <CardsGrid>
          {codingProjects.map((project) => {
            return (
              <Cards
                key={project.id}
                title={project.title.rendered}
                image={project.acf.image}
                link={project.acf.link}
                section={project.acf.section.name}
                audio={undefined}
              />
            );
          })}
          {/* <Cards
            title="MIDI Songwriter"
            image="/images/MIDISong.jpg"
            link="https://github.com/marinananias/MIDI-Songwriter-Prototype"
            section="coding"
          />
          <Cards
            title="MIDI Keyboard"
            image="/images/MIDIKey.png"
            link="https://github.com/marinananias/MIDI-Keyboard"
            section="coding"
          />
          <Cards
            title="This Website"
            image="https://example.com"
            link="https://example.com"
            section="coding"
          /> */}
        </CardsGrid>
      </div>
    </section>
  );
}
