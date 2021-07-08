Feature: Testing hook concept

@First
Scenario: Testing hook feature for concept
Given User is a valid user
When User is on login page
Then User enters username and password

@Second
Scenario: Testing concept for multiple scenario
Given User is logged in
When User is flight booking page
Then User enters flight details

@Third
Scenario: Testing multiple scenario
Given User is a sign up page
When User enters valid iputs
Then User create new account