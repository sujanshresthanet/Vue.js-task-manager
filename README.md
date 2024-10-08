Vue.js Task Manager with User Authentication
============================================

This project is a task management application built using Vue.js and Bootstrap 5, featuring basic user authentication with local storage. The app allows users to register, log in, and manage tasks, with CRUD (Create, Read, Update, Delete) operations on tasks and persistent data storage via local storage.

Table of Contents
-----------------

*   [Installation](#installation)
*   [Setup](#setup)
*   [File Structure](#file-structure)
*   [Running the Application](#running-the-application)
*   [Features](#features)

Installation
------------

Follow the steps below to install and set up the project in your local environment.

### Prerequisites

*   Node.js (version 12 or higher)
*   npm (Node Package Manager)

### Clone the Repository

    git clone https://github.com/your-username/vue-task-manager.git

### Navigate to the Project Directory

    cd vue-task-manager

### Install Dependencies

    npm install

Setup
-----
Make sure you have Vue CLI installed. If you haven’t set up a Vue.js project yet, you can do it using the following commands:

    
    npm install -g @vue/cli
    

File Structure
--------------

    
    vue-task-manager/
    ├── node_modules/                # Project dependencies
    ├── public/
    │   ├── index.html               # Main HTML file
    ├── src/
    │   ├── assets/                   # Static assets
    │   ├── components/               # Vue components
    │   │   ├── UserLogin.vue         # User login component
    │   │   ├── UserProfile.vue       # User profile component
    │   │   ├── UserRegister.vue      # User register component
    │   │   ├── UserTaskManager.vue   # Task manager component
    │   ├── App.vue                   # Main application component
    │   ├── main.js                   # Entry point for Vue app
    │   ├── router.js                 # Vue Router configuration
    ├── .gitignore                    # Git ignore file
    ├── package.json                  # Project metadata and dependencies
    ├── package-lock.json             # Dependency lock file
    

Running the Application
-----------------------

To run the application, use the following command:

    npm run serve

Once the application is running, you can access it in your web browser at `http://localhost:8080`.

Features
--------

*   User registration and login
*   Task management with CRUD operations
*   Persistent data storage using local storage
*   Responsive design with Bootstrap 5
*   Dynamic navigation based on user authentication state
*   User profile update functionality

For any issues or questions, feel free to open an issue on the repository or contact me.