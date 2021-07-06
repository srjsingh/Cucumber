package stepDefinitions;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FlightBookingMapStepDefinition {
	
	//data table with maps for parameterization

	WebDriver driver;

	@Given("^User is already on Welcome Page$")
	public void user_already_on_welcome_page() {

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Suraj\\Desktop\\Selenium Jar\\Chrome Driver\\chromedriver.exe");

		driver = new ChromeDriver();

		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);

		driver.get("http://www.yatra.com");

	}

	@When("^title of login page is Yatra$")
	public void title_of_welcome_page_is_yatra() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Flight, Cheap Air Tickets , Hotels, Holiday, Trains Package Booking - Yatra.com", title);
	}

	@Then("^User clicks on login My Account dropdown$")
	public void user_clicks_on_login_My_Account_dropdown() {
		driver.findElement(By.xpath("//a[@class='dropdown-toggle' and text()='My Account']")).click();
	}

	@Then("^login button is visible$")
	public void login_button_is_visible() {
		boolean loginButton = driver.findElement(By.id("signInBtn")).isDisplayed();
		Assert.assertEquals(true, loginButton);
	}

	@Then("^User clicks login button$")
	public void loginButtonClickTest() {
		driver.findElement(By.id("signInBtn")).click();
	}

	@Then("user enters username$")
	public void userNameFieldTest(DataTable username) {

		for(Map<String, String> data1 : username.asMaps(String.class, String.class))
		driver.findElement(By.xpath("//input[@id='login-input']")).sendKeys(data1.get("username"));
	}

	@Then("^user clicks on cont button$")
	public void continueButtonTest() {
		driver.findElement(By.xpath("//button[@id='login-continue-btn']")).click();

	}

	@Then("user enters password$")
	public void passwordFieldTest(DataTable password) {
		for (Map<String, String> data2 : password.asMaps(String.class, String.class)) {
			
			driver.findElement(By.xpath("//input[@id='login-password']")).sendKeys(data2.get("password"));
		
		}
	}

	@Then("^user clicks on login button on login page$")
	public void loginButtonTest() {
		driver.findElement(By.xpath("//button[@id='login-submit-btn']")).click();
	}

	@Then("^close the browser$")
	public void tearDown() {

		driver.close();

	}

}
