package com.mt.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin={"html:target/cucumber","html:target/htmlreports"},
features={"src/test/resources/Featurecollection"},
glue={"com.mt.steps"},
tags={"@SmokeTest"})

public class Testrunner {

	public static void main(String[] args) {
		
	}
	
}
