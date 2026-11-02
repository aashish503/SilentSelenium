package tests;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import pages.LoginPage;
import utils.BaseClass;

public class incorrect extends BaseClass {

    @BeforeMethod
    public void start() {

        setup();
    }

    @Test
    public void invalidLoginTest() {

        LoginPage lp = new LoginPage(driver);

        lp.login("problem_user", "secret_sauce");
    }

    @AfterMethod
    public void close() {

        tearDown();
    }
}