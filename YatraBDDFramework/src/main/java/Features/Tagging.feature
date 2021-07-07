@FunctionalTest
Feature: Yatra Test

@SmokeTest @RegressionTest
Scenario: Login with valid credentials
Given This is valid login test

@RegressionTest
Scenario: Login with invalid credentials
Given This is invalid login test

@RegressionTest
Scenario: Book a one way flight
Given Booking a one way flight

@SmokeTest
Scenario: Login with numerical usrname
Given This is login numerical usrname

@SmokeTest
Scenario: Login with special character
Given This is invalid login with special character

@RegressionTest
Scenario: Book a business class flight
Given Booking a business class flight

@RegressionTest
Scenario: Book a economy class flight
Given Booking a economy class flight

@RegressionTest
Scenario: Sign up with already used data
Given Create new account with already used data

@SmokeTest @RegressionTest
Scenario: Sign up with invalid data
Given Create new account with invalid data

@SmokeTest @RegressionTest
Scenario: Sign up with valid data
Given Create new account with valid data