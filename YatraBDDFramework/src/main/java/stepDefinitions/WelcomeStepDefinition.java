package stepDefinitions;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WelcomeStepDefinition {
	
	WebDriver driver;

	@Given("^User is already on Welcome Page$")
	public void user_already_on_welcome_page() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Suraj\\Desktop\\Selenium Jar\\Chrome Driver\\chromedriver.exe");
		
		Map<String, Object> prefs = new HashMap<String, Object>();

        prefs.put("profile.default_content_setting_values.notifications", 2);

        ChromeOptions options = new ChromeOptions();
        options.setExperimentalOption("prefs", prefs);
		
		driver = new ChromeDriver(options);
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		
		driver.get("http://www.yatra.com");
		
	}
	@When("^title of login page is Yatra$")
	public void title_of_welcome_page_is_yatra() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Flight, Cheap Air Tickets , Hotels, Holiday, Trains Package Booking - Yatra.com", title);
	}
	@Then("^User clicks on login My Account dropdown$")
	public void user_clicks_on_login_My_Account_dropdown(){
	    driver.findElement(By.xpath("//a[@class='dropdown-toggle' and text()='My Account']")).click();
	}
	@Then("^login button is visible$")
	public void login_button_is_visible(){
	    boolean loginButton = driver.findElement(By.id("signInBtn")).isDisplayed();
	    Assert.assertEquals(true, loginButton);
	}

	
}
