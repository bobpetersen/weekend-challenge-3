Weekend Challenge 3 / To Do App

[X] Create all folders and files.
    [X] HTML        [x] modules     [x] public      [x] vendors
    [X] Server      [x] models      [x] scripts
    [X] Client      [x] routes      [x] styles
[ ] Connect - HTML - Client - Server - Database 

//----------FRONT END------------\\
[ ] submit button
[ ] delete button
[ ] input field for task
[ ] table for list of tasks

<-------CLIENT-------->
[ ] app controller
    [ ] GET
    [ ] POST
    [ ] PUT
    [ ] DELETE

<---------CSS---------->    
[ ] bootstrap
[ ] make pretty

//-------------SERVER-------------\\
[ ] route
    [ ] GET
    [ ] POST
    [ ] PUT
    [ ] DELETE

//------------DATABASE-------------\\
[ ] create in mongoose
[ ] schima
[ ] mongo db
[ ] create todo in db to test GET connection

Here are the specific components for the challenge:

Using AngularJS, create a front end experience that allows a user to create a task.
When the task is created, it should be stored inside of a database (MongoDB)
Whenever a task is created the front end should refresh to show all tasks that need to be completed.

Each task should have an option to 'Complete' or 'Delete'.

When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete. ng-class will come in handy!)

Whether or not a task is complete should also be stored in the database.

Deleting a task should remove it both from the Front End as well as the Database.

Make sure that you also show us your best styling chops.

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Think through your Schema for Mongoose and how you will structure your data. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

STRETCH GOALS
Implement Bootstrap to make your app look FABULOUS.
In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task. Once again, you can interrupt this however you would like.
Move the inputs into a form and use ng-submit so that the user can hit enter to add a new task.
Add front-end validation to the 'make-a-task' form.
Add a category field for the task. Allow users to filter by task category.
Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.