package tests;

import org.openqa.selenium.By;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import pages.InventoryPage;
import pages.LoginPage;
import utils.BaseClass;

public class Sorting extends BaseClass {

    @BeforeMethod
    public void start() {

        setup();
    }

    @Test
    public void addProductTest() {

        LoginPage lp = new LoginPage(driver);

        lp.login("problem_user", "secret_sauce");

        InventoryPage ip = new InventoryPage(driver);

//        ip.addProduct();
//
//        ip.openCart();
        
        driver.findElement(By.className("product_sort_container")).click();
    }

    @AfterMethod
    public void close() {

        tearDown();
    }
}