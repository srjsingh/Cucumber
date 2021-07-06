$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Suraj/git/Cucumber/YatraBDDFramework/src/main/java/Features/FlightBookingMap.feature");
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
        "username"
      ],
      "line": 11
    },
    {
      "cells": [
        "srjsingh636@gmail.com"
      ],
      "line": 12
    },
    {
      "cells": [
        "srjsinghyo@gmail.com"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on cont button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enters password",
  "rows": [
    {
      "cells": [
        "password"
      ],
      "line": 16
    },
    {
      "cells": [
        "Ramram@01"
      ],
      "line": 17
    },
    {
      "cells": [
        "Test@123"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightBookingMapStepDefinition.user_already_on_welcome_page()"
});
formatter.result({
  "duration": 16791004000,
  "status": "passed"
});
formatter.match({
  "location": "FlightBookingMapStepDefinition.title_of_welcome_page_is_yatra()"
});
formatter.result({
  "duration": 26598700,
  "status": "passed"
});
formatter.match({
  "location": "FlightBookingMapStepDefinition.user_clicks_on_login_My_Account_dropdown()"
});
formatter.result({
  "duration": 242451000,
  "status": "passed"
});
formatter.match({
  "location": "FlightBookingMapStepDefinition.login_button_is_visible()"
});
formatter.result({
  "duration": 169133100,
  "status": "passed"
});
formatter.match({
  "location": "FlightBookingMapStepDefinition.loginButtonClickTest()"
});
formatter.result({
  "duration": 4261014800,
  "status": "passed"
});
formatter.match({
  "location": "FlightBookingMapStepDefinition.userNameFieldTest(DataTable)"
});
formatter.result({
  "duration": 393609800,
  "status": "passed"
});
formatter.match({
  "location": "FlightBookingMapStepDefinition.continueButtonTest()"
});
formatter.result({
  "duration": 176905900,
  "status": "passed"
});
formatter.match({
  "location": "FlightBookingMapStepDefinition.passwordFieldTest(DataTable)"
});
formatter.result({
  "duration": 30250568200,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d89.0.4389.72)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1EKAV2N\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.72, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Suraj\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58569}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e90a4b4f943dd82d1f35cda34c964e73\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat stepDefinitions.FlightBookingMapStepDefinition.passwordFieldTest(FlightBookingMapStepDefinition.java:78)\r\n\tat ✽.Then user enters password(C:/Users/Suraj/git/Cucumber/YatraBDDFramework/src/main/java/Features/FlightBookingMap.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FlightBookingMapStepDefinition.loginButtonTest()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightBookingMapStepDefinition.tearDown()"
});
formatter.result({
  "status": "skipped"
});
});