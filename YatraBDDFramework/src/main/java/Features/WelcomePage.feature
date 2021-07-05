#Feature: Yatra Welcome Feature

#Using regular expression

#Scenario: Yatra Welcome Page Scenario

#Given User is already on Welcome Page
#When title of login page is Yatra
#Then User clicks on login My Account dropdown
#Then login button is visible
#Then User clicks login button
#Then user enters "srjsingh636@gmail.com"
#Then user clicks on cont button
#Then user enters "Ramram@01"
#Then user clicks on login button on login page
#Then close the browser

#Using Examples keyword

#Scenario Outline: Yatra Welcome Page Scenario

#Given User is already on Welcome Page
#When title of login page is Yatra
#Then User clicks on login My Account dropdown
#Then login button is visible
#Then User clicks login button
#Then user enters "<username>"
#Then user clicks on cont button
#Then user enters "<password>"
#Then user clicks on login button on login page
#Then close the browser

#Examples:
#   | username | password |
#   | srjsingh636@gmail.com | Ramram@01 |
#   |Tom@gmail.com | Test@123 |