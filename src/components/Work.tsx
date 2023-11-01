import work_jpg from "../assets/images/cazzphotography.co.uk_botmqy.webp";
import { projects } from "../assets/json/work";
const Work = () => {
  return (
    <section className="page-wide home" style={{ padding: "24px" }}>
      <div className="mb-large">
        <h1 className="mb-tiny">Work</h1>
        <p className="txt-large">
          Client projects and other professional work.
        </p>
      </div>
      {projects.map((project) => (
        <div className="project-preview" key={project.title}>
          <figure className="project-preview__media">
            <a href={project["detail-url"]} target="_blank">
              <img
                width="752"
                height="833"
                src={project.img}
                alt="Screenshot of Cazz Photography"
              />
            </a>
          </figure>
          <div className="project-preview__content">
            <h2 className="project-preview__title">
              <a href={project["detail-url"]} target="_blank">
                {project.title}
              </a>
            </h2>
            <p className="project-preview__desc">{project.description}</p>
            <div className="project-preview__meta">
              <ul className="list list--regular">
                {project["bullet-points"].map((point) => (
                  <li className="list__item" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="project-preview__action">
              <a href={project["detail-url"]} target="_blank" className="btn">
                View Details
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Work;
