$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/anjal/eclipseP-workspace/FreeCRMBDDFramework1/src/main/java/features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new Deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on Free CRM login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter username and password",
  "rows": [
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on New Deal from Deals menu",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enter deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 6956122266,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.title_of_loginPage_FreeCRM()"
});
formatter.result({
  "duration": 17694132,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.User_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 763467708,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.User_clicks_on_Login_button()"
});
formatter.result({
  "duration": 2840114133,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.User_click_on_New_Deal_from_Deals_menu()"
});
formatter.result({
  "duration": 1435945955,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.User_enter_deal_details(DataTable)"
});
formatter.result({
  "duration": 717503180,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.close_browser()"
});
formatter.result({
  "duration": 904672264,
  "status": "passed"
});
});