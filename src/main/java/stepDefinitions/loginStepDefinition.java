package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

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
	public void user_on_home_page()
	{
		System.out.println("Home Page Title" + driver.getTitle());
		Assert.assertEquals("CRMPRO", driver.getTitle());
	}
	
	@Then("^Close the Browser$")
	public void close_browser()
	{
		driver.quit();
	}
}
