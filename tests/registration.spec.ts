import {test, expect} from '@playwright/test';
import {RegistrationPage} from '../pages/RegistrationPage';

test.describe('Registration Test', () => {
  let registrationPage: RegistrationPage;
  
  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page); 
    await registrationPage.goto();
});

  test('Registration process', async ({ page }) => {
    const timestamp = Date.now();
    const firstname = `First${timestamp}`;
    const lastname = `Last${timestamp}`;
    const username = `user${timestamp}`;
    const email = `user${timestamp}@example.com`;
    const password = 'StrongPassword123!';
    
    await registrationPage.registration(firstname, lastname, username, email, password);
    await expect(registrationPage.registrationPageText).toContainText(`Welcome to GitLab,${firstname}!`);
    await registrationPage.selectRoleAndReason();
    await expect(registrationPage.page).toHaveURL('https://gitlab.testautomate.me/dashboard/projects');
  });
});