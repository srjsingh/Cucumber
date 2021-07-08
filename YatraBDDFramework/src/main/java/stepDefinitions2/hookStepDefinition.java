package stepDefinitions2;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class hookStepDefinition {

	@Before
	public void setup() {

		System.out.println("Launch the browser");

	}

	@After
	public void tearDown() {

		System.out.println("Close the browser");

	}

	@Given("^User is a valid user$")
	public void user_is_a_valid_user() {

		System.out.println("User is valid");
		
	}

	@When("^User is on login page$")
	public void user_is_on_login_page() {

		System.out.println("User is on login page");
		
	}

	@Then("^User enters username and password$")
	public void user_enters_username_and_password() {

		System.out.println("User enters username and password");
		
	}

}
