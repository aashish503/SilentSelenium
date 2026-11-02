package tests;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import pages.InventoryPage;
import pages.LoginPage;
import utils.BaseClass;

public class AddToCartTest extends BaseClass {

    @BeforeMethod
    public void start() {

        setup();
    }

    @Test
    public void addProductTest() {

        LoginPage lp = new LoginPage(driver);

        lp.login("problem_user", "secret_sauce");

        InventoryPage ip = new InventoryPage(driver);

        ip.addProduct();

        ip.openCart();
    }

    @AfterMethod
    public void close() {

        tearDown();
    }
}