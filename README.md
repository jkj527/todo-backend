# todo-backend

Express.js/Prisma/MySQL Todo List App Backend

Getting Started

Prerequisities:

- Docker installed and running
- Node.js and npm installed

1.  Clone the Repository  
    git clone https://github.com/your-username/todo-backend.git
    cd todo-backend

2.  Start the MySQL Database in Docker  
    docker run --name todo-db -e MYSQL_ROOT_PASSWORD=<your-password> -e MYSQL_DATABASE=tododb -p 3306:3306 -d mysql:latest

        docker start todo-db   # Start the database
        docker stop todo-db    # Stop the database

3.  Configure Environment Variables  
    Ensure the .env file exists in the project root and contains the following (use your password from step 2):
    DATABASE_URL="mysql://root:<your-password>@localhost:3306/tododb"

4.  Install Dependencies  
    npm install

5.  Initialize the Database with Prisma  
    npx prisma migrate dev --name init

6.  Start the Server (localhost:4000)  
    npm run dev

API Endpoints  
Method      Endpoint        Description  
GET         /api/tasks      Get all tasks  
POST        /api/tasks      Create a new task  
PUT         /api/tasks/:id  Update a specific task  
DELETE      /api/tasks/:id  Delete a specific task
