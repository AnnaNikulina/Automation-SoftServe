import {expect, Locator, Page} from '@playwright/test';
import {getRandomItem, roles, reasons} from '../helpers/UserDataRegistration';

export class RegistrationPage {
    public page: Page;
    public firstnameInput: Locator;
    public lastnameInput: Locator;
    public usernameInput: Locator;
    public emailInput: Locator;
    public passwordInput: Locator;
    public RegisterButton: Locator;
    public RegisterNowLink: Locator;
    public registrationPageText: Locator;
    public RoleDropdown: Locator;
    public reasonforsignupDropdown: Locator;
    public finishRegistration: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.RegisterNowLink = page.locator("a[data-qa-selector='register_link']");
      this.firstnameInput = page.locator('#new_user_first_name');
      this.lastnameInput = page.locator('#new_user_last_name');
      this.usernameInput = page.locator('#new_user_username');
      this.emailInput = page.locator('#new_user_email');
      this.passwordInput = page.locator('#new_user_password');
      this.RegisterButton = page.locator("input[value='Register']");
      this.registrationPageText = page.locator("h2[class='gl-text-center']");
      this.RoleDropdown = page.locator('#user_role');
      this.reasonforsignupDropdown = page.locator('#user_registration_objective');
      this.finishRegistration = page.locator("button[name='button']")
    }
  
    async goto() {
      await this.page.goto('https://gitlab.testautomate.me/users/sign_in');
    }
  
    async registration(firstname: string, lastname: string, username: string, email: string, password: string) {
      await this.RegisterNowLink.click();
      await this.firstnameInput.fill(firstname);
      await this.lastnameInput.fill(lastname);
      await this.usernameInput.fill(username);
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.RegisterButton.click();
    }

    async selectRoleAndReason() {
      const role = getRandomItem(roles);
      const reason = getRandomItem(reasons);
      await this.RoleDropdown.selectOption({ label: role });
      await this.reasonforsignupDropdown.selectOption({ label: reason });
      await this.finishRegistration.click();
    }
  
  }