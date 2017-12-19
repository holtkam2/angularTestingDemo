import { AngularTestingDemoPage } from './app.po';

describe('angular-testing-demo App', () => {
  let page: AngularTestingDemoPage;

  beforeEach(() => {
    page = new AngularTestingDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
