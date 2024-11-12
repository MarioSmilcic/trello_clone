import "./about.style.css";
import { technologies } from "./helpers/technologies";

const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <h1 className="about__title">About TrelloClone</h1>
        <div className="about__description">
          <p>
            TrelloClone is a demo project showcasing modern React development
            practices and implementation of a Kanban-style task management
            system. This project serves as a practical demonstration of building
            a complex, interactive web application using React and contemporary
            front-end technologies.
          </p>
          <p className="about__demo-note">
            Built for educational purposes, this clone demonstrates core
            functionalities like drag-and-drop task management, state management
            with Zustand, and responsive design principles. While inspired by
            Trello, this is a simplified version focused on demonstrating
            technical implementation rather than providing a full-featured
            production service.
          </p>
        </div>
      </div>

      <div className="about__technologies">
        <h2 className="about__subtitle">Technologies</h2>
        <div className="about__tech-grid">
          {technologies.map((category) => (
            <div key={category.id} className="about__tech-category">
              <h3 className="about__tech-category-title">
                {category.category}
              </h3>
              <div className="about__tech-items">
                {category.items.map((item) => (
                  <div key={item.name} className="about__tech-item">
                    <div className="about__tech-item-header">
                      <span className="about__tech-name">{item.name}</span>
                    </div>
                    <p className="about__tech-description">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
