# Devops
Repository for Devops -course teamwork

# Project Topic
The objective is to develop a hotel room reservation application. The application must have different views to allow the administrator, customers and receptionist to work with the application. The administrator must be able to add, view, update and delete room data on the application. The customer must be able to view and search rooms as well as make and manage reservations. The receptionist must be able to view and modify reservations. The application must save data permanently and provide the possibility to sign up and sign in. 

# Scope

Functionalities:

  -Users can search for available rooms based on location, dates, and room preferences.
  
  -Users can book, modify, and cancel reservations.
  
  -A user profile management system, allowing users to save preferences and view booking history.
  
  -Administrative interface for hotel staff to manage room availability, bookings, and customer data.

Platform(s):

  -Customer interface would ideally be a web front-end (TBA)
  -Backend made with C# ASP.NET
  -Database made with MongoDB

# Budget
Total Budget: 15k + Continous costs for customer for administration

-Team member salaries are 2500e/month

-Continous costs for continous administration 5000e/month

Infrastructure costs:

  ~300e/month in total for the whole infrastructure
  
    -Compute instance: $40/month
    
    -Database: $40/month
    
    -Storage (100 GB): $5/month
    
    -Networking (moderate traffic): $50/month
    
    -Website hosting (Elastic Beanstalk): $20/month
    
    -CDN: $10/month
    
    -SSL/Firewall: $10/month
    
    -Monitoring and backups: $20/month

Resource limitations:

  -Only two man team

# Risks

-Deadlines

  How to avoid deadlines exceeding
  
    -Clear time management
    
-Faults in the code

  How to avoid faults
  
    -Testing code
    
    -Using best practices
    
-Low productivity

  How to avoid
  
    -Task & Workload management
    
    -Implementing agile project methods and managing a backlog for example in Trello/etc.
    
-Poor risk management

  How to avoid
  
    -Good risk analysis
    
-Bad user feedback

  How to avoid
  
    -Good communication with end users
    
-Lack of knowledge and expertise in certain parts of the development cycle

# Deployment

- Docker Image from Docker Hub that runs on Render's free web service hosting platform

# Project schedule

Schedule:

  -Must be finished until the end of semester (December 2024)

Phases:

  1st phase:
    -Designing the app structure
  2nd phase:
    -Setting up development environment (Repository & CI)
  3rd phase:
    -Implementing designs into code
  4th phase:
    -Testing code
  5th phase:
    -Deploying application (Docker Hub -> Render)
  6th phase:
    -Repeat phases 3-5 until app is ready
  

## Docker
Running entire app with Docker, build and then run with port-mapping and env-option (.env file with DB connection string & JWT Secret must be present in project root):
```console
docker build -t hotelapp .
docker run --name HotelApp -p 5000:80 --env-file .env hotelapp
```
App is running on localhost:5000.

## Render
Application hosted on Render: https://devops-hotelapp.onrender.com/
App runs on Render with a Docker image located in Docker Hub. Render’s free plan instance will spin down with inactivity. This can delay requests by 50 seconds or more. It sometimes needs a manual restart to start running again.