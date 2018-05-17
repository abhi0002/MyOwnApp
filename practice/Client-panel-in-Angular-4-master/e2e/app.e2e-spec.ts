import { Ang4ClientPage } from './app.po';

describe('ang4-client App', () => {
  let page: Ang4ClientPage;

  beforeEach(() => {
    page = new Ang4ClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
