import React from "react";
import CardsGrid from "./utils/CardsGrid";
import styles from "../styles/music.module.css";
import utils from "../styles/utils.module.css";
import Cards from "./utils/Cards";

const reqUrl =
  "http://localhost/site/index.php/wp-json/wp/v2/projects?acf_format=standard&_fields=id,title,acf";

export default function Music({ id }) {
  const [musicProjects, setMusicProjects] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/fetchProjects?`);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const projects = await response.json();

        const musicProjectsData = projects.filter(
          (project) => project.acf.section.name === "music"
        );

        setMusicProjects(musicProjectsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id={id}
      className={`${utils.subContainers} ${styles.subContainer}`}
    >
      <div className={styles.titleBox}>
        <h2 className={styles.title1}>Making</h2>
        <h2 className={styles.title2}>MUSIC</h2>
      </div>
      <div className={styles.projects}>
        <CardsGrid>
          {musicProjects.map((project) => {
            return (
              <Cards
                key={project.id}
                title={project.title.rendered}
                image={project.acf.image}
                link={project.acf.link}
                section={project.acf.section.name}
                audio={project.acf.audio}
              />
            );
          })}
        </CardsGrid>
      </div>
    </section>
  );
}
