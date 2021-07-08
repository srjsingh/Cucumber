package stepDefinitions2;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class hookStepDefinition {

	// Global hooks: applicable to all scenarios
	@Before
	public void setup() { // it will be executed before every scenario

		System.out.println("Launch the browser");

	}

	@After
	public void tearDown() { // it will be executed after every scenario

		System.out.println("Close the browser");

	}

	// tagged hooks: applicable to only defined scenario
	@Before("@First")
	public void beforeFirst() {

		System.out.println("Before first scenario");

	}

	@After("@First")
	public void afterFirst() {

		System.out.println("After first scenario");

	}

	@Before("@Second")
	public void beforeSecond() {

		System.out.println("Before second scenario");

	}

	@After("@Second")
	public void afterSecond() {

		System.out.println("After second scenario");

	}

	@Before("@Third")
	public void beforeThird() {

		System.out.println("Before third scenario");

	}

	@After("@Third")
	public void afterThird() {

		System.out.println("After third scenario");

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

	@Given("^User is logged in$")
	public void user_is_logged_in(){
		
		System.out.println("User is logged in");
	
	}

	@When("^User is flight booking page$")
	public void user_is_flight_booking_page(){
		
		System.out.println("User is flight booking page");
	
	}

	@Then("^User enters flight details$")
	public void user_enters_flight_details(){
		
		System.out.println("User enters flight details");
		
	}

	@Given("^User is a sign up page$")
	public void user_is_a_sign_up_page(){
		
		System.out.println("User is a sign up page");
		
	}

	@When("^User enters valid iputs$")
	public void user_enters_valid_iputs(){
		
		System.out.println("User enters valid iputs");
		
	}

	@Then("^User create new account$")
	public void user_create_new_account(){
		
		System.out.println("User create new account");
	
	}

}
