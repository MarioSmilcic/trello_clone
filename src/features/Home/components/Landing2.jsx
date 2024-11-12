import "../styles/landing2.style.css";
import TrelloTeaser from "../../../assets/trelloTeaser.png";

const Landing2 = () => {
  return (
    <div>
      <div className="landing2__container">
        <h1>Transform Your Workflow with Visual Task Management</h1>
        <div className="landing2">
          <div className="landing2__left">
            <h2>Where Simplicity Meets Productivity</h2>
            <p className="landing2__left--text">
              Experience the evolution of task management with our intuitive
              Kanban system. Built for modern teams and individuals, TrelloClone
              combines powerful features with unmatched simplicity. Our
              drag-and-drop interface ensures seamless organization, while smart
              workflows adapt to your team's unique needs. From agile
              development to content planning, watch your productivity soar as
              you visualize, prioritize, and accomplish more together.
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
