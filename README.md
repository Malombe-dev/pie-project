# Land Management System

This repository contains the Land Management System, a web application built with React and Bootstrap for managing land-related data. The system allows users to sign up, sign in, view land details, and add new land entries.

## Features

- **Sign In**: User authentication to access the system.
- **Sign Up**: Create a new account to use the system.
- **Get Land**: View a list of available lands.
- **Add Land**: Add new land details, including location, cost, size, owner, plot number, and a photo.

## Technologies Used

- **Frontend**: React, React Router, Bootstrap
- **Backend API**: PythonAnywhere (hosted API for managing land data)
- **Styling**: CSS and Bootstrap
- **HTTP Requests**: Axios

## Components

### Main Components
- **`App.js`**: The main application file that sets up routing and navigation.
- **`SignIn`**: Component for user login.
- **`SignUp`**: Component for user registration.
- **`GetLand`**: Component to fetch and display available land details.
- **`AddLand`**: Component to add new land information.

### External Libraries
- `react-router-dom`: For routing between pages.
- `axios`: For making HTTP requests.
- `bootstrap`: For responsive design and styling.

## Setup and Installation

### Prerequisites

Make sure you have the following installed:

- Node.js and npm
- A code editor (e.g., Visual Studio Code)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/land-management-system.git
   cd land-management-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## API Endpoints

The system communicates with the backend API hosted on PythonAnywhere. Below are the key endpoints:

- **Sign In**: `POST /api/signin`
- **Sign Up**: `POST /api/signup`
- **Add Land**: `POST /api/add_land`

## File Structure

```plaintext
src/
├── App.css         # Global styles
├── App.js          # Main application component
├── components/     # Individual components
│   ├── AddLand.js  # Add land form component
│   ├── GetLand.js  # Fetch and display land details
│   ├── SignIn.js   # User login form
│   ├── SignUp.js   # User registration form
└── index.js        # Application entry point
```

## Screenshots

### Landing Page
![Landing Page](link-to-screenshot)

### Add Land Form
![Add Land Form](link-to-screenshot)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Feel free to reach out with any questions or suggestions!
