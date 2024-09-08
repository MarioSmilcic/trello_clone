import "../styles/landing2.style.css";
import TrelloTeaser from "../../../assets/trelloTeaser.png";

const Landing2 = () => {
  return (
    <div>
      <div className="landing2__container">
        <h1>Boost Your Productivity with Our Kanban Board</h1>
        <div className="landing2">
          <div className="landing2__left">
            <h2>
              Simplify Task Management with Our Easy Drag-and-Drop Interface
            </h2>
            <p className="landing2__left--text">
              Our intuitive drag-and-drop interface makes organizing tasks
              smooth and efficient. Boost productivity with adaptive workflows
              tailored to team needs. Get started and revolutionize your task
              management today.
            </p>
          </div>
          <div className="landing2__right">
            <img
              src={TrelloTeaser}
              alt="trello-screenshot"
              className="trelloTeaser-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing2;
