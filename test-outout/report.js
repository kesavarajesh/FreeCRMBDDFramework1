$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create new Contact",
  "description": "",
  "id": "free-crm-create-new-contact",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 14,
  "name": "Create a new contact",
  "description": "",
  "id": "free-crm-create-new-contact;create-a-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on Free CRM login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enter \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User mouse over on contacts menu and selects the New contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters contact details \"Tom1\", \"cruise\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks save button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 11553526766,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_loginPage_FreeCRM()"
});
formatter.result({
  "duration": 35571610,
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
  "duration": 684156925,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.User_clicks_on_Login_button()"
});
formatter.result({
  "duration": 4407694221,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.select_NewcontactLink()"
});
formatter.result({
  "duration": 2471191460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom1",
      "offset": 29
    },
    {
      "val": "cruise",
      "offset": 37
    },
    {
      "val": "Manager",
      "offset": 50
    }
  ],
  "location": "loginStepDefinition.User_enters_contact_details_and(String,String,String)"
});
formatter.result({
  "duration": 1609921068,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_save_button()"
});
formatter.result({
  "duration": 1312375348,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 696480348,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Create a new contact",
  "description": "",
  "id": "free-crm-create-new-contact;create-a-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on Free CRM login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enter \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User mouse over on contacts menu and selects the New contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters contact details \"David\", \"Villa\" and \"Admin\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks save button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 7548961292,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_loginPage_FreeCRM()"
});
formatter.result({
  "duration": 81341595,
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
  "duration": 704680102,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.User_clicks_on_Login_button()"
});
formatter.result({
  "duration": 2551347599,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.select_NewcontactLink()"
});
formatter.result({
  "duration": 1253227580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 29
    },
    {
      "val": "Villa",
      "offset": 38
    },
    {
      "val": "Admin",
      "offset": 50
    }
  ],
  "location": "loginStepDefinition.User_enters_contact_details_and(String,String,String)"
});
formatter.result({
  "duration": 408513449,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_save_button()"
});
formatter.result({
  "duration": 1129030422,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 692212053,
  "status": "passed"
});
formatter.uri("login.feature");
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
  "duration": 6467994788,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_loginPage_FreeCRM()"
});
formatter.result({
  "duration": 39032340,
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
  "duration": 691933067,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.User_clicks_on_Login_button()"
});
formatter.result({
  "duration": 2208955628,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_on_home_page1()"
});
formatter.result({
  "duration": 26897394,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 810583635,
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
  "duration": 5816796898,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_loginPage_FreeCRM()"
});
formatter.result({
  "duration": 34641347,
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
  "duration": 707603853,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.User_clicks_on_Login_button()"
});
formatter.result({
  "duration": 673712688,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_on_home_page1()"
});
formatter.result({
  "duration": 33387777,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[Free CRM software in the cloud powers sales and customer service]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.loginStepDefinition.user_on_home_page1(loginStepDefinition.java:59)\r\n\tat ✽.Then User is on home page(login.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginStepDefinition.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});