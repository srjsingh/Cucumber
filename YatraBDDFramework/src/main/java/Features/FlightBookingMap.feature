Feature: Flight booking creation

Scenario: Yatra flight booking

Given User is already on Welcome Page
When title of login page is Yatra
Then User clicks on login My Account dropdown
Then login button is visible
Then User clicks login button
Then user enters username
 | username |
 | srjsingh636@gmail.com |
 | srjsinghyo@gmail.com  |
Then user clicks on cont button
Then user enters password
 |password |
 | Ramram@01 |
 | Test@123  |
Then user clicks on login button on login page
Then close the browser