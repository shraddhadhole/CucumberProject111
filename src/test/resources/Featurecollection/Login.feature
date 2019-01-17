#Author: Shraddha Dhole
#Feature: Login
#Date: 10-12-2018
@Login
Feature: Login feature
  Verify the login feature of mercury tours application

  Background: User accesses login page of Mercury tours application
    When user open "chrome" browser
    And user enters application url "http://newtours.demoaut.com/"
    And user waits "5" seconds to page load
    And user maximizes login page
  
  @SmokeTest
  Scenario: Verify that valid user able to login into Mercury tours application by using valid username and password
    Given user is on Login page of Mercury tours application
    When user enters "Suvidyap1" as username
    And user enters "P@ssword1" as password
    And user clicks on Sign In button
    Then user is on Flight Finder page
    When user clicks on Sign Off button
    Then user is on Sign In page

    @SmokeTest
    Scenario: Verify that invalid user not able to login into Mercury tours application by using username and password
   Given user is on Login page of Mercury tours application
    When user enters "Suvidyap4" as username
    And user enters "P@ssword4" as password
    And user clicks on Sign In button