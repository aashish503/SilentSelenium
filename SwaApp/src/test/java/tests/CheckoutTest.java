package tests;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import pages.CartPage;
import pages.CheckoutPage;
import pages.InventoryPage;
import pages.LoginPage;
import utils.BaseClass;

public class CheckoutTest extends BaseClass {

    @BeforeMethod
    public void start() {

        setup();
    }

    @Test
    public void checkoutFlowTest() {

        LoginPage lp = new LoginPage(driver);

        lp.login("problem_user","secret_sauce");

        InventoryPage ip = new InventoryPage(driver);

        ip.addProduct();

        ip.openCart();

        CartPage cp = new CartPage(driver);

        cp.clickCheckout();

        CheckoutPage chk = new CheckoutPage(driver);

        chk.checkoutInfo();
    }

    @AfterMethod
    public void close() {

        tearDown();
    }
}