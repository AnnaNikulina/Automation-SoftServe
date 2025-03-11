import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test.describe('Sign In Test', () => {
  let loginPage: LoginPage;
  
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page); 
    await loginPage.goto();
});

  test('Sign In', async ({ page }) => {
    await loginPage.login('AnnaNik', '123456789Anna!');
    await expect(loginPage.page).toHaveURL('https://gitlab.testautomate.me');
    await expect(loginPage.signInPageText).toContainText('Welcome to GitLab');
  });
});