import {expect, Page} from '@playwright/test';

export class DashboardPage {
    public page: Page;

constructor(page: Page) {
        this.page = page;
}
async checkDashboardURL() {
    await expect(this.page).toHaveURL('https://gitlab.testautomate.me/dashboard/projects');
  }
}