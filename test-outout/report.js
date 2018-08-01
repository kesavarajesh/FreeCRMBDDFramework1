$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/anjal/eclipseP-workspace/FreeCRMBDDFramework1/src/main/java/features/dealsmap.feature");
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
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User click on New Deal from Deals menu",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enter deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 13
    },
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    },
    {
      "cells": [
        "test deal1",
        "2000",
        "60",
        "20"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal2",
        "3000",
        "70",
        "30"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal3",
        "4000",
        "80",
        "40"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 7285064608,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.title_of_loginPage_FreeCRM()"
});
formatter.result({
  "duration": 20646808,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.User_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 880409838,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.User_clicks_on_Login_button()"
});
formatter.result({
  "duration": 2230783693,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.User_click_on_New_Deal_from_Deals_menu()"
});
formatter.result({
  "duration": 1311139974,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.User_enter_deal_details(DataTable)"
});
formatter.result({
  "duration": 9537894703,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.close_browser()"
});
formatter.result({
  "duration": 691220207,
  "status": "passed"
});
});