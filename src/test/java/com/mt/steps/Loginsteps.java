package com.mt.steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Loginsteps {
	
	public WebDriver driver;
	
	@When("^user open \"(.*)\" browser$")
	public String Open_browser(String browser)
	{
		System.out.println("Converting the code eclipse into github");
		
		if(browser.equalsIgnoreCase("chrome"))
		{
			System.setProperty("webdriver.chrome.driver","D:\\Selenium data\\chromedriver_win32(1)\\chromedriver.exe");
			driver=new ChromeDriver();
			System.out.println("Chrome browser open successfully");
		}
		return browser;
		
	}
	
	 @And("^user enters application url \"(.*)\"$")
	public String Enter_Application(String url)
	{
		driver.get(url);
		System.out.println("Application opened successfully");
		return url;
	}
	 
@And("^user waits \"(.*)\" seconds to page load$")
public void Waittillpageload(int timeinseconds)
{
driver.manage().timeouts().pageLoadTimeout(timeinseconds, TimeUnit.SECONDS);
}
	
 @And("^user maximizes login page$")
public void Maximize_browser()
{
driver.manage().window().maximize();	
}

 @Given("^user is on Login page of Mercury tours application$")
 public void Verify_loginpage()
 {
	boolean act_flag= driver.findElement(By.xpath("//img[@src='/images/featured_destination.gif']")).isDisplayed();
	System.out.println("Image is displayes : "+act_flag);
 }
 
 @When("^user enters \"(.*)\" as username$")
 public String EnterUsername(String username)
 {
	 driver.findElement(By.xpath("//input[@name='userName']")).sendKeys(username);
	return username;
	 
 }
 
 @And("^user enters \"(.*)\" as password$")
 public String EnterPassword(String password)
 {
	 driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
	return password;
 }
 
 @And("^user clicks on Sign In button$")
 public void Clicklogin()
 {
	 driver.findElement(By.xpath("//input[@name='login']")).click();
	 
 }
 
 @Then("^user is on Flight Finder page$")
 public void Verify_fgtpage()
 {
	 boolean act_flag1=driver.findElement(By.xpath("//img[@src='/images/masts/mast_flightfinder.gif']")).isDisplayed();
	 System.out.println("Flight finder page displayed"+act_flag1);
 }
 
 @When("^user clicks on Sign Off button$")
 public void Cicklogout()
 {
	 driver.findElement(By.linkText("SIGN-OFF")).click();
	 
 }
 
 @Then("^user is on Sign In page$")
 public void Verifysignpage()
 {
	boolean act_flag2= driver.findElement(By.xpath("//img[@src='/images/masts/mast_signon.gif']")).isDisplayed();
	 System.out.println("verify that sign in page :"+act_flag2);
 }
 


}
