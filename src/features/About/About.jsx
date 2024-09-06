import "./about.style.css";

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>

      <p>
        Welcome to our task management app! This application is designed to help
        you organize and manage your tasks and projects efficiently.
      </p>

      <h2>How It Works</h2>
      <div className="about-list"></div>
      <ul>
        <li>
          <span className="about-span">Creating Lists and Cards - </span>Start
          by adding a list using the “Add another list” button. Once a list is
          created, you can add tasks to it by clicking the “Add a card” button
          within the list.
        </li>
        <li>
          <span className="about-span">Managing Tasks - </span>Drag and drop
          cards between lists to prioritize tasks. Click on a card to edit its
          details or delete it if it’s no longer needed.
        </li>
        <li>
          <span className="about-span">Editing Lists - </span>Click on the three
          dots next to a list title to access options for editing or deleting
          the list.
        </li>
      </ul>

      <h2>Technologies Used:</h2>
      <div className="about-list">
        <ul>
          <li>
            <span className="about-span">React:</span> For building the user
            interface.
          </li>
          <li>
            <span className="about-span">React Router:</span>
            For handling navigation and routing within the app.
          </li>
          <li>
            <span className="about-span">Zustand:</span> For state management.
          </li>
          <li>
            <span className="about-span">@dnd-kit:</span> For implementing the
            drag-and-drop functionality.
          </li>
          <li>
            <span className="about-span">Vanilla CSS:</span> For styling the
            components.
          </li>
        </ul>
      </div>
      <p>
        We hope this app helps you stay organized and enhances your
        productivity. Thank you for using our task management tool! If you have
        any questions or feedback, please feel free to contact us.
      </p>
    </div>
  );
};

export default About;
