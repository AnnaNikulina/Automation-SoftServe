import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import * as fs from 'fs';

test.describe('Sign In Test', () => {
  let loginPage: LoginPage;
  let userData: {username: string, password: string };
  
  test.beforeAll(() => {
    userData = JSON.parse(fs.readFileSync('./resource/user.json', 'utf-8'));
  });

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page); 
    await loginPage.goto();
});

  test('Sign In', async ({ page }) => {
    await loginPage.login( userData.username, userData.password );
    await expect(loginPage.page).toHaveURL('https://gitlab.testautomate.me');
    await expect(loginPage.signInPageText).toContainText('Welcome to GitLab');
  });
});