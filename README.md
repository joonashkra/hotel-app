# HotelApp

This hotel reservation web application was developed as a teamwork project for a school course. The repository's commit history details each team member's contributions, including my specific work on the project. The project was originally hosted on GitLab per the assignment instructions, which accounts for the GitLab CI files in its history. For clarity and consistency, I later imported the project to GitHub, where my other projects are also hosted.

## Project Overview

The objective of the project was to create a hotel room reservation application with role-based functionality for administrators, customers, and receptionists:

- **Administrator**: Add, view, update, and delete room data.  
- **Customer**: View and search for rooms, make reservations.  
- **Receptionist**: View and modify reservations.

The application features persistent data storage and includes user authentication with sign-up and sign-in functionality.

## Technologies Used

- **React**: Frontend framework for building the user interface.  
- **ASP.NET**: Backend framework for handling business logic and API.  
- **MongoDB**: Database for storing application data.  
- **Docker**: Containerization to streamline application deployment.  
- **GitLab CI**: Used for continuous integration during the initial development phase (removed from this GitHub repository).  
- **Render**: Cloud platform for hosting the application.  

## Running the Application with Docker

To run the application using Docker:

1. Ensure a `.env` file is present in the project root, containing the database connection string and JWT secret.  
2. Build and run the application with the following commands:  

   ```bash
   docker build -t hotelapp .
   docker run --name HotelApp -p 5000:80 --env-file .env hotelapp
