import { AngularCalenderPocPage } from './app.po';

describe('angular-calender-poc App', () => {
  let page: AngularCalenderPocPage;

  beforeEach(() => {
    page = new AngularCalenderPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
