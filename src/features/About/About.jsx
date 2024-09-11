import "./about.style.css";

const howTo = [
  {
    id: 1,
    subtitle: "Creating Lists and Cards",
    text: "Start by adding a list using the “Add another list” button. Once a list is created, you can add tasks to it by clicking the “Add a card” button within the list.",
  },
  {
    id: 2,
    subtitle: "Managing Tasks",
    text: "Drag and drop cards between lists to prioritize tasks. Click on a card to edit its details or delete it if it’s no longer needed.",
  },
  {
    id: 3,
    subtitle: "Editing Lists",
    text: "Click on the three dots next to a list title to access options for editing or deleting the list.",
  },
  {
    id: 4,
    subtitle: "Board Navigation",
    text: "Use the navigation bar to switch between different sections of the app.",
  },
];

const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">About</h1>
      <div className="about__info">
        <img
          className="about-img"
          src="https://wac-cdn.atlassian.com/dam/jcr:61ffedf7-2fad-4068-820c-20051c3ad3ec/image5.png?cdnVersion=2217"
          alt="kanban"
        />
        <div>
          <p className="about__info--text">
            Welcome to our task management app! This application is designed to
            help you organize and manage your tasks and projects efficiently. We
            hope this app helps you stay organized and enhances your
            productivity. Thank you for using our task management tool! If you
            have any questions or feedback, please feel free to contact us.
          </p>
        </div>
      </div>
      <div>
        <h2 className="about__title">Here’s how it works:</h2>
        {howTo.map((how) => (
          <div key={how.id} className="about__how">
            <div className="about__how--title">
              <span className="about__how--num">{how.id}</span>
              <h3>{how.subtitle}</h3>
            </div>
            <p>{how.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
