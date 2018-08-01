/*
 * 
 * Parameterization with header
 * 
 */

package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealStepWithMapDefinition {
	WebDriver driver;

	@Given("^User is already on Free CRM login page$")
	public void user_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com");
	}

	@SuppressWarnings("deprecation")
	@When("^Title of page is Free CRM$")
	public void title_of_loginPage_FreeCRM() {
		System.out.println("Initial page title is " + driver.getTitle());
		// Assert.assertEquals("Free CRM software in the cloud powers sales and customer
		// service", driver.getTitle());
	}

	@Then("^User enter username and password$")
	public void User_enter_username_and_password(DataTable credentials) throws Throwable {

		for (Map<String, String> data : credentials.asMaps()) {
			driver.findElement(By.name("username")).sendKeys(data.get("username"));
			driver.findElement(By.name("password")).sendKeys(data.get("password"));

		}
	}

	@Then("^User clicks on Login button$")
	public void User_clicks_on_Login_button() throws Throwable {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit' and @value='Login']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()", loginBtn);
	}

	@Then("^User click on New Deal from Deals menu$")
	public void User_click_on_New_Deal_from_Deals_menu() throws Throwable {
		Actions action = new Actions(driver);
		driver.switchTo().frame("mainpanel");
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(), 'Deals')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	}

	@Then("^User enter deal details$")
	public void User_enter_deal_details(DataTable dealsData) throws Throwable {

		for (Map<String, String> data : dealsData.asMaps()) {
			driver.findElement(By.id("title")).sendKeys(data.get("title"));
			driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
			driver.findElement(By.id("probability")).sendKeys(data.get("probability"));
			driver.findElement(By.id("commission")).sendKeys(data.get("commission"));
			driver.findElement(By.xpath("//input[@value='Save' and @type='submit']")).click();
			Actions action = new Actions(driver);
			action.moveToElement(driver.findElement(By.xpath("//a[contains(text(), 'Deals')]"))).build().perform();
			driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
		}

	}

	@Then("^Close the Browser$")
	public void close_browser() {
		driver.quit();
	}
}
