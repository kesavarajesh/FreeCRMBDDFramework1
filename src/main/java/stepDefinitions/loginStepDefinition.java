package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class loginStepDefinition {
	
	WebDriver driver;

	@Given("^User is already on Free CRM login page$")
	public void user_already_on_login_page()
	{
		System.setProperty("webdriver.chrome.driver","C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.freecrm.com");
	}
	
	@SuppressWarnings("deprecation")
	@When("^Title of page is Free CRM$")
	public void title_of_loginPage_FreeCRM()
	{
		System.out.println("Initial page title is " + driver.getTitle());		
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", driver.getTitle());
	}
	
	
	//Regular Expressions
	//1.	\"(.*)\"
	//2.	\"([^\"]*)\"
	
	@Then("^User enter \"(.*)\" and \"(.*)\"$")
	public void User_enter_username_and_password(String username, String password) throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);		
	}
	@Then("^User clicks on Login button$")
	public void User_clicks_on_Login_button() throws Throwable {
		WebElement loginBtn= driver.findElement(By.xpath("//input[@type='submit' and @value='Login']"));
		JavascriptExecutor js=(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click()", loginBtn);		
	}
	
	@Then("^User is on home page$")
	public void user_on_home_page1()
	{
		System.out.println("Home Page Title" + driver.getTitle());
		Assert.assertEquals("CRMPRO", driver.getTitle());
	}
	
	@Given("^User is already on Home Page$")
	public void user_on_home_page()
	{
		System.setProperty("webdriver.chrome.driver","C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.freecrm.com");
		
		WebElement loginBtn= driver.findElement(By.xpath("//input[@type='submit' and @value='Login']"));
		
		driver.findElement(By.name("username")).sendKeys("naveenk");
		driver.findElement(By.name("password")).sendKeys("test@123");
		
		JavascriptExecutor js=(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click()", loginBtn);	
	}
	
	
	@When("^User mouse over on contacts menu and selects the New contact link$")
	public void select_NewcontactLink()
	{
		Actions action=new Actions(driver);
		driver.switchTo().frame("mainpanel");
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(), 'Contacts')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	}
	
	@Then("^New contact entry page should be displayed$")
	public void New_Contact_Form_displayed() throws Throwable {
	    // Express the Regexp above with the code you wish you had	    
		Assert.assertTrue(driver.findElement(By.xpath("//legend[contains(text(),'Contact Information')]")).isDisplayed());		
	}
	
	@Then("^User enters contact details \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
	public void User_enters_contact_details_and(String fname, String lname, String position) throws Throwable {
		driver.findElement(By.name("first_name")).sendKeys(fname);
		driver.findElement(By.name("surname")).sendKeys(lname);
		driver.findElement(By.name("company_position")).sendKeys(position);
	}

	@Then("^user clicks save button$")
	public void user_clicks_save_button() throws Throwable {
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}
	

	@Then("^Close the Browser$")
	public void close_browser()
	{
		driver.quit();
	}
}
