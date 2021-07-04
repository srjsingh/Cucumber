Feature: Yatra Welcome Feature

#Using regular expression

#Scenario: Yatra Welcome Page Scenario

#Given User is already on Welcome Page
#When title of login page is Yatra
#Then User clicks on login My Account dropdown
#Then login button is visible
#Then User clicks login button
#Then user enters "srjsingh636@gmail.com" in username field
#Then close the browser

#Using Examples keyword

Scenario Outline: Yatra Welcome Page Scenario

Given User is already on Welcome Page
When title of login page is Yatra
Then User clicks on login My Account dropdown
Then login button is visible
Then User clicks login button
Then user enters "<username>" in username field
Then close the browser

Examples:
   | username |
   | srjsingh636@gmail.com |
   |Tom@gmail.com |