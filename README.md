# Lab 8 - Starter

Yash Patki

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

**Ans)** Within a Github Action workflow that runs whenever new code is pushed to automatically run the tests and report the results efficiently. 

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

**Ans)** No, end to end tests are used to emulate user action from start to finish and check if the application is wroking correctly, but they are not used to test each individual function.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

**Ans)** No, unit tests are used to test individual functions and not the entire application and since the messaging feature is the main part of the application containing several features, it would be better to avoid unit testing it.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

**Ans)** Yes, unit tests are used to test individual parts of code and since the max message length feature is a small part of the messaging feature, it would be better to use unit testing.



# Screenshots

![Screenshot 1](screenshots/Screenshot%20(401).png)
![Screenshot 2](screenshots/Screenshot%20(402).png)
![Screenshot 3](screenshots/Screenshot%20(403).png)
![Screenshot 4](screenshots/Screenshot%20(404).png)