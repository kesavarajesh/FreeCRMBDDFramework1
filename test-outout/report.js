$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/anjal/eclipseP-workspace/FreeCRMBDDFramework1/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 41,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User is already on Free CRM login page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Title of page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enter \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 10976155075,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_loginPage_FreeCRM()"
});
formatter.result({
  "duration": 41781686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 12
    },
    {
      "val": "test@123",
      "offset": 26
    }
  ],
  "location": "loginStepDefinition.User_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 652627626,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.User_clicks_on_Login_button()"
});
formatter.result({
  "duration": 2316170238,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_on_home_page()"
});
formatter.result({
  "duration": 27632233,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 805724350,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User is already on Free CRM login page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Title of page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enter \"tom\" and \"test456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 7272970294,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_loginPage_FreeCRM()"
});
formatter.result({
  "duration": 46830031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 12
    },
    {
      "val": "test456",
      "offset": 22
    }
  ],
  "location": "loginStepDefinition.User_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 643991182,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.User_clicks_on_Login_button()"
});
formatter.result({
  "duration": 833367779,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_on_home_page()"
});
formatter.result({
  "duration": 63889245,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[Free CRM software in the cloud powers sales and customer service]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.loginStepDefinition.user_on_home_page(loginStepDefinition.java:57)\r\n\tat ✽.Then User is on home page(C:/Users/anjal/eclipseP-workspace/FreeCRMBDDFramework1/src/main/java/features/login.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginStepDefinition.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});