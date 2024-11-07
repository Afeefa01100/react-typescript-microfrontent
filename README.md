Microfrontend Architecture with React and TypeScript
This repository demonstrates a simple microfrontend architecture where two React applications (App1 and App2) are hosted inside a container application. Communication between the apps is achieved through messages (via events or a shared state).

Overview
App1: A React app running on port 3001.
App2: A React app running on port 3002.
Container App: The main app running on port 3000, which hosts App1 and App2.
Both App1 and App2 can send messages to each other, and there are navigation buttons ("Go to App1" and "Go to App2") to allow users to switch between them.

Features
Microfrontend setup with React and TypeScript
App1 and App2 can communicate with each other via messages.
Simple container app to load and host App1 and App2.
Buttons to navigate between App1 and App2.
Prerequisites
Node.js (>= 14.x)
npm (>= 7.x)
Getting Started
Follow these steps to set up and run the project on your local machine.

1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies for all apps
Install dependencies for App1, App2, and the Container App.

In the root directory of the project, there should be separate folders for App1, App2, and the container app. Run the following commands for each app:

For App1:

bash
Copy code
cd app1
npm install
For App2:

bash
Copy code
cd app2
npm install
For the Container App:

bash
Copy code
cd container
npm install
3. Running the apps
To run the apps locally, use the following commands for each app.

App1: Runs on port 3001.
bash
Copy code
cd app1
npm start
App2: Runs on port 3002.
bash
Copy code
cd app2
npm start
Container App: Runs on port 3000.
bash
Copy code
cd container
npm start
Once all apps are running, you can open the following URLs in your browser:

Container App: http://localhost:3000
App1: http://localhost:3001
App2: http://localhost:3002
4. Communication Between Apps
App1 can send messages to App2.
App2 can send messages to App1.
The messages are communicated using a simple event-based system or shared state.
You can experiment with the communication by interacting with the buttons in the Container App.

5. Navigation
In the container app, you'll see buttons to navigate between App1 and App2:

Go to App1: Navigates to App1.
Go to App2: Navigates to App2.
These buttons are designed to simulate a simple flow of a microfrontend application.

Folder Structure
The project follows a simple folder structure:

bash
Copy code
/root-directory
  /container
    - (Container App files)
  /app1
    - (App1 files)
  /app2
    - (App2 files)
  README.md
Each app is self-contained with its own package.json, and the container app is responsible for managing and rendering the microfrontends.

Technology Stack
React: For building the UI of each app.
TypeScript: For type safety and static typing.
npm: For package management and running the apps.
Microfrontend architecture: Using multiple independent React apps loaded into a container.
