$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/anjal/eclipseP-workspace/FreeCRMBDDFramework1/src/main/java/features/contacts.feature");
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
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 8073657927,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_loginPage_FreeCRM()"
});
formatter.result({
  "duration": 69345306,
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
  "duration": 593873223,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.User_clicks_on_Login_button()"
});
formatter.result({
  "duration": 2981432962,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.select_NewcontactLink()"
});
formatter.result({
  "duration": 1558234848,
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
  "duration": 644366440,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_save_button()"
});
formatter.result({
  "duration": 1401561296,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_already_on_login_page()"
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      