Feature: Free CRM Create new Contact
Scenario Outline: Create a new contact
	Given User is already on Free CRM login page 
	When Title of page is Free CRM 
	Then User enter "<username>" and "<password>" 
	Then User clicks on Login button
	Then User mouse over on contacts menu and selects the New contact link
	Then User enters contact details "<firstname>", "<lastname>" and "<position>"
	Then user clicks save button
	Then Close browser
	
Examples:
	|	username	|	password	|	firstname	|	lastname	|	position	|
	|	naveenk		|	test@123	|	Tom1		|	cruise		|	Manager		|
	|	naveenk		|	test@123	|	David		|	Villa		|	Admin		|	