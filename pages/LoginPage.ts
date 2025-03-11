import {expect, Locator, Page} from '@playwright/test';

export class LoginPage {
  public page: Page;
  public usernameInput: Locator;
  public passwordInput: Locator;
  public loginButton: Locator;
  public signInPageText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user_login');
    this.passwordInput = page.locator('#user_password');
    this.loginButton = page.locator("button[name='button']");
    this.signInPageText = page.locator('.gl-font-size-h1')
  }

  async goto() {
    await this.page.goto('https://gitlab.testautomate.me/users/sign_in');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}