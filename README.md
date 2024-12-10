# HotelApp
Course project

## Project Topic
The objective is to develop a hotel room reservation application. The application must have different views to allow the administrator, customers and receptionist to work with the application. The administrator must be able to add, view, update and delete room data on the application. The customer must be able to view and search rooms as well as make and manage reservations. The receptionist must be able to view and modify reservations. The application must save data permanently and provide the possibility to sign up and sign in.

### Docker
Running entire app with Docker, build and then run with port-mapping and env-option (.env file with DB connection string & JWT Secret must be present in project root):
```console
docker build -t hotelapp .
docker run --name HotelApp -p 5000:80 --env-file .env hotelapp
```
App is running on localhost:5000.

### Render
Application hosted on Render: https://devops-hotelapp.onrender.com/
App runs on Render with a Docker image located in Docker Hub. Render’s free plan instance will spin down with inactivity. This can delay requests by 50 seconds or more. It sometimes needs a manual restart to start running again.
