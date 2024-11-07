# HotelApp Server

For the server to operate, a MongoDB connection string must be given as an environment variable (.env file in project root).

Server runs on localhost:5000 when running locally:
```console
dotnet build
dotnet run
```

Running server with Docker, build and then run with port-mapping and env-option (.env file must be present in project root):
```console
docker build -t hotelapp_server .
docker run --name HotelAppServer -p 5000:80 --env-file .env hotelapp_server
```