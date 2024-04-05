
# Digital Resume    

This project is an Angular-based web application designed to help users create and manage their resumes digitally. It provides a user-friendly interface for creating, editing, and sharing resumes in various formats. The application utilizes Angular, NgRx for state management, and Angular Material for UI components.


## version

version is mentioned in dockerfile. don't use any other version


## Features


**User Authentication**: Users can sign up and log in securely to access their resumes.

**Resume Creation**: Users can create their resumes by filling out a form with their personal and professional details.

**Resume Templates**: Multiple resume templates are available for users to choose from when creating their resumes.

**Dashboard**: Users can view and manage their resumes from a centralized dashboard.

**Download Resumes**: Users can download their resumes in different formats and templates.

**Share Profiles**: Users can share their profiles digitally with others via email or social media.

**Profile Editing**: Users can edit their personal details, profile picture, and other information easily.



## Tech Stack


**Angular**: A powerful JavaScript framework for building single-page web applications.

**NgRx**: A state management library for Angular applications, used for managing application state and data flow.

**Angular Material**: A UI component library for Angular applications, providing pre-built components for faster development.

**Express**: A fast, unopinionated, minimalist web framework for Node.js, used for server-side rendering (SSR) with Angular Universal.


## Installation

Clone this Repository

```bash
  git clone https://github.com/AmTripathiDev/Digital-Resume-Frontend.git
  cd Digital-Resume-Frontend
  npm install
  npm start
```
    


## use Docker

you can use docker which will save your time. you don't need to fulfill the requirements

```bash
git clone https://github.com/AmTripathiDev/Digital-Resume-Frontend.git
cd Digital-Resume-Frontend
docker build -t <your-image-name> .
docker run -p 4200:4200 -v .:/src/frontend <your-image-name>
```


## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to help improve the project.

