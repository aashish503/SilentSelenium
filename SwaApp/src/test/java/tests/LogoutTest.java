package tests;

import org.openqa.selenium.By;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import pages.LoginPage;
import utils.BaseClass;

public class LogoutTest extends BaseClass {

    @BeforeMethod
    public void start() {

        setup();
    }

    @Test
    public void logoutTest() {

        LoginPage lp = new LoginPage(driver);

        lp.login("problem_user", "secret_sauce");

        driver.findElement(By.id("react-burger-menu-btn")).click();

        driver.findElement(By.id("logout_sidebar_link")).click();
    }

    @AfterMethod
    public void close() {

        tearDown();
    }
}