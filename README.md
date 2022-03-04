# sales-boomerang-project
 Coding Assessment for Sales Boomerang

I would've liked to add more to the models and routes (store user info, add users, add colors, etc.), but in the 1-2 hour time frame that seemed a little too much.


### Setup
I decided to use MySQL to store the colors so you'll need to create a table for them. I added the necessary SQL under ./server/config/createTable.sql.
Running those scripts will create the table and insert all the necessary colors.
The MySQL credentials can be set in /server/db.config.js. At the moment the password is gibberish.

## Initialize App
To install the dependencies be in the root directory and:
1. run ```npm i```
2. run ```npm build```

To start the app be in the root directory and run ```npm run dev```