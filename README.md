## Setup

` npm install  `

## Running Database Migration
` node node_modules/db-migrate/bin/db-migrate up `

## Test API with Postman
1. Register first the user
2. Copy the generated ` token `and place to the headers with the key ` x-access-token`
3. Fill required body. Set as ` x-www-form-urlencoded `
4. Select Restful method.  ` PUT for update, DELETE for remove, POST for create and GET for display `. 

## Start 
` node app.js `

## Author
Faris Rayhan <frayhan94@gmail.com>