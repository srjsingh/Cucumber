$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Suraj/git/Cucumber/YatraBDDFramework/src/main/java/Features/hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Testing hook concept",
  "description": "",
  "id": "testing-hook-concept",
  "keyword": "Feature"
});
formatter.before({
  "duration": 256900,
  "status": "passed"
});
formatter.before({
  "duration": 363600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Testing hook feature for concept",
  "description": "",
  "id": "testing-hook-concept;testing-hook-feature-for-concept",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is a valid user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is on login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "hookStepDefinition.user_is_a_valid_user()"
});
formatter.result({
  "duration": 635919600,
  "status": "passed"
});
formatter.match({
  "location": "hookStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 270300,
  "status": "passed"
});
formatter.match({
  "location": "hookStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 269800,
  "status": "passed"
});
formatter.after({
  "duration": 349600,
  "status": "passed"
});
formatter.after({
  "duration": 339900,
  "status": "passed"
});
formatter.before({
  "duration": 312000,
  "status": "passed"
});
formatter.before({
  "duration": 332100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Testing concept for multiple scenario",
  "description": "",
  "id": "testing-hook-concept;testing-concept-for-multiple-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User is flight booking page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters flight details",
  "keyword": "Then "
});
formatter.match({
  "location": "hookStepDefinition.user_is_logged_in()"
});
formatter.result({
  "duration": 156000,
  "status": "passed"
});
formatter.match({
  "location": "hookStepDefinition.user_is_flight_booking_page()"
});
formatter.result({
  "duration": 217800,
  "status": "passed"
});
formatter.match({
  "location": "hookStepDefinition.user_enters_flight_details()"
});
formatter.result({
  "duration": 255400,
  "status": "passed"
});
formatter.after({
  "duration": 247400,
  "status": "passed"
});
formatter.after({
  "duration": 279400,
  "status": "passed"
});
formatter.before({
  "duration": 148800,
  "status": "passed"
});
formatter.before({
  "duration": 328100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Testing multiple scenario",
  "description": "",
  "id": "testing-hook-concept;testing-multiple-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is a sign up page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters valid iputs",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User create new account",
  "keyword": "Then "
});
formatter.match({
  "location": "hookStepDefinition.user_is_a_sign_up_page()"
});
formatter.result({
  "duration": 272100,
  "status": "passed"
});
formatter.match({
  "location": "hookStepDefinition.user_enters_valid_iputs()"
});
formatter.result({
  "duration": 135100,
  "status": "passed"
});
formatter.match({
  "location": "hookStepDefinition.user_create_new_account()"
});
formatter.result({
  "duration": 271600,
  "status": "passed"
});
formatter.after({
  "duration": 228500,
  "status": "passed"
});
formatter.after({
  "duration": 257000,
  "status": "passed"
});
});