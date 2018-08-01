Feature: Deal data creation

Scenario: Free CRM Create a new Deal scenario

	Given User is already on Free CRM login page 
	When Title of page is Free CRM 
	Then User enter username and password
	|	username	|	password	|
	|	naveenk	|	test@123	|
	Then User clicks on Login button
	Then User click on New Deal from Deals menu
	Then User enter deal details
	|	title		|	amount	|	probability	|	commission	|
	|	test deal	|	1000	|		50		|		10		|
	|	test deal1	|	2000	|		60		|		20		|
	|	test deal2	|	3000	|		70		|		30		|
	|	test deal3	|	4000	|		80		|		40		|
	Then Close the Browser