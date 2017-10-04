# User managment
It is an appliation for managing users and groups

# Project structure
  - Backend ( Node js )
  - Frontend ( React )
# Installation
    # Manual run
    1- prerequisite: nodejs ( >= 8.4.0), npm , mysql
    2- cd backend
    3- npm install
    4- create database called user_managment (or whatever you want)
    5- modify backend/config/config.json to point to your connection urls (mysql, database name)
    6- $ node_modules/.bin/sequelize db:migrate
    7- $ node_modules/.bin/sequelize db:seed:all
    8- $ npm start
    9- $ cd frontend
    10- $ npm install
    11- $ npm start
    12- Make sure that port 8080 and 3000 is free to use
    13- Navigate to http:localhost:8080 on your browser and start using the app

# Commands
| Command | Purpose |
| ------ | ------ |
| npm install | install project dependencies |
| npm test | run project unit tests |
| npm run test:watch | run project unit tests but in watch mode |
| npm start | start the server |

# Api documnetation
   - The project uses swagger to document the rest api
   - To see api documetation in visual mode from you browser navigate to ( http://localhost:3000/api-docs )
   - If you changed the application running port (change the port in the following file backen/public/api-docs/index.html in line 77)
   - or you can get the api specs from swagger yaml file in the following directory (backend/public/user-managment.yml)

# Search functionality
Search works in 2 way
1- Basic search : type any word in the textbox and the application will search the whole system but if you want something specific you have to use advanced search
2- Advanced search : type your query as the following
```
group:[name=group and id=1],user:[email=ali@gmail.com]
```
where group and user are the entity the you want to search and inside the []
you have the properties that you want to filter on it
If the parser fails to identify your query it will consider it a basic search


# Deploy the backend using docker
- prerequisite -> docker, docker-compose
- cd to project directory where docker-compose.yml exists
- make sure that the port 3000 is free
- run this command in yoour terminal
```sh
docker-compose up -d
```
now the backend running on port 3000

License
----

Mohamed Waleed
