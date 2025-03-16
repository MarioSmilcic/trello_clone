# TrelloClone

A Kanban-style task management application inspired by Trello, built with React and Firebase. This project demonstrates modern React development practices including drag-and-drop functionality, state management, responsive design, and user authentication.

## Features

- **Intuitive Drag-and-Drop Interface**: Easily organize tasks across different lists
- **Responsive Design**: Works on desktop and mobile devices
- **User Authentication**: Secure sign-up and login functionality
- **Real-time Database**: Changes sync instantly across devices
- **Board Management**: Create, update, and delete lists and cards

## Technologies

- **Frontend Framework**: React with Vite
- **State Management**: Zustand
- **Drag and Drop**: dnd-kit
- **Authentication & Database**: Firebase
- **Routing**: React Router DOM
- **Form Management**: React Hook Form with Yup validation
- **Unique IDs**: Nanoid
- **Styling**: Custom CSS

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/trello-clone.git
   cd trello-clone
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with your Firebase configuration
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Firebase Setup

1. Create a new Firebase project in the [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password provider
3. Create a Firestore database
4. Set up appropriate security rules for Firestore
5. Get your Firebase configuration from Project Settings > Your Apps
6. Add configuration to the `.env` file

## Project Structure

```
trello_clone/
├── public/            # Static files
├── src/
│   ├── assets/        # Images and other assets
│   ├── components/    # Reusable components
│   ├── features/      # Feature-based components
│   ├── providers/     # Context providers
│   ├── services/      # Firebase and other services
│   ├── store/         # Zustand stores
│   ├── validations/   # Yup validation schemas
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
└── vite.config.js     # Vite configuration
```

## Usage

### Authentication
- Sign up with email and password
- Sign in with existing credentials
- Sign out from the navigation menu

### Board Management
- Create new lists using the "Add another list" button
- Add cards to lists with the "Add a card" button
- Drag and drop cards between lists
- Edit or delete cards and lists using the respective icons

## Troubleshooting

- **Firebase Authentication Issues**: Ensure your Firebase project has Email/Password authentication enabled
- **Database Write Errors**: Check your Firestore security rules
- **CORS Issues**: Make sure your Firebase project settings allow your domain

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes
5. Push to the branch
6. Open a Pull Request

## License

This project is licensed under the MIT License.

---

**Note**: This project is built for educational purposes and is not affiliated with Trello or Atlassian Corporation.
