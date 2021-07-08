package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\Suraj\\git\\Cucumber\\YatraBDDFramework\\src\\main\\java\\Features\\hooks.feature"
		,glue = {"stepDefinitions2"}
		,format = {"pretty", "html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}
		,strict = true
		,monochrome = true
		,dryRun = false
		//,tags = {"@SmokeTest", "@RegressionTest"} // to run specific scenarios with matching tags to skip use ~ before @
		)

public class TestRunner {

}
