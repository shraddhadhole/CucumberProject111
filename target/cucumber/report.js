$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Shraddha Dhole"
    },
    {
      "line": 2,
      "value": "#Feature: Login"
    },
    {
      "line": 3,
      "value": "#Date: 10-12-2018"
    }
  ],
  "line": 5,
  "name": "Login feature",
  "description": "Verify the login feature of mercury tours application",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    }
  ]
});
formatter.background({
  "line": 8,
  "name": "User accesses login page of Mercury tours application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "user open \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters application url \"http://newtours.demoaut.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user waits \"5\" seconds to page load",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user maximizes login page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 11
    }
  ],
  "location": "Loginsteps.Open_browser(String)"
});
formatter.result({
  "duration": 17577300134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/",
      "offset": 29
    }
  ],
  "location": "Loginsteps.Enter_Application(String)"
});
formatter.result({
  "duration": 2966301420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "Loginsteps.Waittillpageload(int)"
});
formatter.result({
  "duration": 50551439,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.Maximize_browser()"
});
formatter.result({
  "duration": 1279240836,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify that valid user able to login into Mercury tours application by using valid username and password",
  "description": "",
  "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user is on Login page of Mercury tours application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user enters \"Suvidyap1\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"P@ssword1\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user is on Flight Finder page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Sign Off button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user is on Sign In page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Suvidyap1",
      "offset": 13
    }
  ],
  "location": "Loginsteps.EnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "P@ssword1",
      "offset": 13
    }
  ],
  "location": "Loginsteps.EnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.Clicklogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.Verify_fgtpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.Cicklogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.Verifysignpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 8,
  "name": "User accesses login page of Mercury tours application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "user open \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters application url \"http://newtours.demoaut.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user waits \"5\" seconds to page load",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user maximizes login page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 11
    }
  ],
  "location": "Loginsteps.Open_browser(String)"
});
formatter.result({
  "duration": 9731763857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/",
      "offset": 29
    }
  ],
  "location": "Loginsteps.Enter_Application(String)"
});
formatter.result({
  "duration": 6572405093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "Loginsteps.Waittillpageload(int)"
});
formatter.result({
  "duration": 6916420,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.Maximize_browser()"
});
formatter.result({
  "duration": 1225288304,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify that invalid user not able to login into Mercury tours application by using username and password",
  "description": "",
  "id": "login-feature;verify-that-invalid-user-not-able-to-login-into-mercury-tours-application-by-using-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user is on Login page of Mercury tours application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user enters \"Suvidyap4\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters \"P@ssword4\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user clicks on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user is on sign In page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Suvidyap4",
      "offset": 13
    }
  ],
  "location": "Loginsteps.EnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "P@ssword4",
      "offset": 13
    }
  ],
  "location": "Loginsteps.EnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.Clicklogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});