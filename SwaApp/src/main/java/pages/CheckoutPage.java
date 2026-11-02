package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class CheckoutPage {

    WebDriver driver;

    public CheckoutPage(WebDriver driver) {
        this.driver = driver;
    }

    By firstName = By.id("first-name");
    By lastName = By.id("last-name");
    By postalCode = By.id("postal-code");

    By continueBtn = By.id("continue");

    By finishBtn = By.id("finish");

    public void checkoutInfo() {

//        driver.findElement(firstName).sendKeys("Ashish");
        driver.findElement(By.id("first-name")).sendKeys("Ashish");
//        driver.findElement(lastName).sendKeys("Tester");
        driver.findElement(By.id("last-name")).sendKeys("Zeba");
//        driver.findElement(postalCode).sendKeys("410206");
        driver.findElement(By.id("postal-code")).sendKeys("415012");
//        driver.findElement(continueBtn).click();
        driver.findElement(By.id("continue")).click();
//        driver.findElement(finishBtn).click();
    }
}
