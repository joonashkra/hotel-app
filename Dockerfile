FROM node:20 AS client-build
WORKDIR /app/hotelapp.client
COPY ./hotelapp.client/ .
RUN npm install
RUN npm run build

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["./HotelApp.Server/HotelApp.Server.csproj", "."]
RUN dotnet restore "./HotelApp.Server.csproj"
COPY ./HotelApp.Server/ .
WORKDIR "/src/."
RUN dotnet build "./HotelApp.Server.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./HotelApp.Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=client-build /app/hotelapp.client/dist /app/wwwroot

ENTRYPOINT ["dotnet", "HotelApp.Server.dll"]