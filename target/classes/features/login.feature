Feature: Free CRM login feature 


#Scenario: Free CRM login test scenario 

#	Given User is already on Free CRM login page 
#	When Title of page is Free CRM 
#	Then User enter username and password 
#	Then User clicks on Login button
#	Then User is on home page
#	Then Close the Browser
	
#	#Datadriven without example keyword

#	Given User is already on Free CRM login page 
#	When Title of page is Free CRM 
#	Then User enter "naveenk" and "test@123" 
#	Then User clicks on Login button
#	Then User is on home page
#	Then Close the Browser
# with Examples keyword

#Scenario: User is able to create a new contact
#	
#	Given User is already on Home Page
#	When User mouse over on contacts menu and selects the New contact link
#	Then New contact entry page should be displayed
#	Then Close Browser

Scenario Outline: Free CRM login test scenario

	Given User is already on Free CRM login page 
	When Title of page is Free CRM 
	Then User enter "<username>" and "<password>" 
	Then User clicks on Login button
	Then User is on home page
	Then Close the Browser
	
Examples:
	| username | password |
	| naveenk | test@123 |
	| tom | test456 |