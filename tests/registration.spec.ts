import {test, expect} from '@playwright/test';
import {RegistrationPage} from '../pages/RegistrationPage';
import {DashboardPage} from '../pages/DashboardPage';
import {UserGenerator} from '../helpers/UserGenerator';
import * as fs from 'fs';

test.describe('Registration Test', () => {
  let registrationPage: RegistrationPage;
  let dashboardPage: DashboardPage;
  
  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page); 
    dashboardPage = new DashboardPage(page); 
    await registrationPage.goto();
});

  test('Registration process', async ({ page }) => {
    const user = UserGenerator.generateUser();
    await registrationPage.registration(user.firstName, user.lastName, user.username, user.email, user.password);
    await expect(registrationPage.registrationPageText).toContainText(`Welcome to GitLab,${user.firstName}!`);
    await registrationPage.selectRoleAndReason(user.role, user.reason);
    await dashboardPage.checkDashboardURL()

    const userData = { username: user.username, password: user.password };
    fs.writeFileSync('./resource/user.json', JSON.stringify(userData));
  
  });
});