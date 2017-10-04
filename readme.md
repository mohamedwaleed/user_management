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

License
----

Mohamed Waleed
