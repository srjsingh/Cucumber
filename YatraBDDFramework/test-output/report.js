$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Suraj/git/Cucumber/YatraBDDFramework/src/main/java/Features/FlightBooking.feature");
formatter.feature({
  "line": 1,
  "name": "Flight booking creation",
  "description": "",
  "id": "flight-booking-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Yatra flight booking",
  "description": "",
  "id": "flight-booking-creation;yatra-flight-booking",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on Welcome Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Yatra",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login My Account dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "login button is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters username",
  "rows": [
    {
      "cells": [
        "srjsingh636@gmail.com"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on cont button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters password",
  "rows": [
    {
      "cells": [
        "Ramram@01"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on login button on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightBookingStepDefinition.user_already_on_welcome_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightBookingStepDefinition.title_of_welcome_page_is_yatra()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightBookingStepDefinition.user_clicks_on_login_My_Account_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightBookingStepDefinition.login_button_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightBookingStepDefinition.loginButtonClickTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightBookingStepDefinition.userNameFieldTest(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightBookingStepDefinition.continueButtonTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightBookingStepDefinition.passwordFieldTest(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightBookingStepDefinition.loginButtonTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightBookingStepDefinition.tearDown()"
});
formatter.result({
  "status": "skipped"
});
});