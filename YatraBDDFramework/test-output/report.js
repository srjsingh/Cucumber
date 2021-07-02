$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WelcomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Yatra Welcome Feature",
  "description": "",
  "id": "yatra-welcome-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Yatra Welcome Page Scenario",
  "description": "",
  "id": "yatra-welcome-feature;yatra-welcome-page-scenario",
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
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "WelcomeStepDefinition.user_already_on_welcome_page()"
});
formatter.result({
  "duration": 19328994100,
  "status": "passed"
});
formatter.match({
  "location": "WelcomeStepDefinition.title_of_welcome_page_is_yatra()"
});
formatter.result({
  "duration": 89993500,
  "status": "passed"
});
formatter.match({
  "location": "WelcomeStepDefinition.user_clicks_on_login_My_Account_dropdown()"
});
formatter.result({
  "duration": 422627600,
  "status": "passed"
});
formatter.match({
  "location": "WelcomeStepDefinition.login_button_is_visible()"
});
formatter.result({
  "duration": 240375100,
  "error_message": "java.lang.AssertionError: expected:\u003cfalse\u003e but was:\u003ctrue\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.WelcomeStepDefinition.login_button_is_visible(WelcomeStepDefinition.java:49)\r\n\tat ✽.Then login button is visible(WelcomePage.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WelcomeStepDefinition.tearDown()"
});
formatter.result({
  "status": "skipped"
});
});