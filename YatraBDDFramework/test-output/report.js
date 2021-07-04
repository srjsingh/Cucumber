$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WelcomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Yatra Welcome Feature",
  "description": "",
  "id": "yatra-welcome-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Using regular expression"
    },
    {
      "line": 5,
      "value": "#Scenario: Yatra Welcome Page Scenario"
    },
    {
      "line": 7,
      "value": "#Given User is already on Welcome Page"
    },
    {
      "line": 8,
      "value": "#When title of login page is Yatra"
    },
    {
      "line": 9,
      "value": "#Then User clicks on login My Account dropdown"
    },
    {
      "line": 10,
      "value": "#Then login button is visible"
    },
    {
      "line": 11,
      "value": "#Then User clicks login button"
    },
    {
      "line": 12,
      "value": "#Then user enters \"srjsingh636@gmail.com\" in username field"
    },
    {
      "line": 13,
      "value": "#Then close the browser"
    },
    {
      "line": 15,
      "value": "#Using Examples keyword"
    }
  ],
  "line": 17,
  "name": "Yatra Welcome Page Scenario",
  "description": "",
  "id": "yatra-welcome-feature;yatra-welcome-page-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User is already on Welcome Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "title of login page is Yatra",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on login My Account dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "login button is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enters \"\u003cusername\u003e\" in username field",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "yatra-welcome-feature;yatra-welcome-page-scenario;",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 28,
      "id": "yatra-welcome-feature;yatra-welcome-page-scenario;;1"
    },
    {
      "cells": [
        "srjsingh636@gmail.com"
      ],
      "line": 29,
      "id": "yatra-welcome-feature;yatra-welcome-page-scenario;;2"
    },
    {
      "cells": [
        "Tom@gmail.com"
      ],
      "line": 30,
      "id": "yatra-welcome-feature;yatra-welcome-page-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Yatra Welcome Page Scenario",
  "description": "",
  "id": "yatra-welcome-feature;yatra-welcome-page-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User is already on Welcome Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "title of login page is Yatra",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on login My Account dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "login button is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enters \"srjsingh636@gmail.com\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "WelcomeStepDefinition.user_already_on_welcome_page()"
});
formatter.result({
  "duration": 29335972700,
  "status": "passed"
});
formatter.match({
  "location": "WelcomeStepDefinition.title_of_welcome_page_is_yatra()"
});
formatter.result({
  "duration": 151436199,
  "status": "passed"
});
formatter.match({
  "location": "WelcomeStepDefinition.user_clicks_on_login_My_Account_dropdown()"
});
formatter.result({
  "duration": 331701400,
  "status": "passed"
});
formatter.match({
  "location": "WelcomeStepDefinition.login_button_is_visible()"
});
formatter.result({
  "duration": 432814401,
  "status": "passed"
});
formatter.match({
  "location": "WelcomeStepDefinition.loginButtonClickTest()"
});
formatter.result({
  "duration": 9466018400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "srjsingh636@gmail.com",
      "offset": 13
    }
  ],
  "location": "WelcomeStepDefinition.userNameFieldTest(String)"
});
formatter.result({
  "duration": 274187601,
  "status": "passed"
});
formatter.match({
  "location": "WelcomeStepDefinition.tearDown()"
});
formatter.result({
  "duration": 650169100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Yatra Welcome Page Scenario",
  "description": "",
  "id": "yatra-welcome-feature;yatra-welcome-page-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User is already on Welcome Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "title of login page is Yatra",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on login My Account dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "login button is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enters \"Tom@gmail.com\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "WelcomeStepDefinition.user_already_on_welcome_page()"
});
formatter.result({
  "duration": 31135584000,
  "status": "passed"
});
formatter.match({
  "location": "WelcomeStepDefinition.title_of_welcome_page_is_yatra()"
});
formatter.result({
  "duration": 23251300,
  "status": "passed"
});
formatter.match({
  "location": "WelcomeStepDefinition.user_clicks_on_login_My_Account_dropdown()"
});
formatter.result({
  "duration": 320519900,
  "status": "passed"
});
formatter.match({
  "location": "WelcomeStepDefinition.login_button_is_visible()"
});
formatter.result({
  "duration": 132782300,
  "status": "passed"
});
formatter.match({
  "location": "WelcomeStepDefinition.loginButtonClickTest()"
});
formatter.result({
  "duration": 5464010901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom@gmail.com",
      "offset": 13
    }
  ],
  "location": "WelcomeStepDefinition.userNameFieldTest(String)"
});
formatter.result({
  "duration": 322483900,
  "status": "passed"
});
formatter.match({
  "location": "WelcomeStepDefinition.tearDown()"
});
formatter.result({
  "duration": 749651300,
  "status": "passed"
});
});