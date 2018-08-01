Feature: Deal data creation

Scenario: Free CRM Create a new Deal scenario

	Given User is already on Free CRM login page 
	When Title of page is Free CRM 
	Then User enter username and password
	|	naveenk	|	test@123	|
	Then User clicks on Login button
	Then User click on New Deal from Deals menu
	Then User enter deal details
	|	test deal	|	1000	|	50	|	10	|
	Then Close the Browser