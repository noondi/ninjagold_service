import { NinjagoldPage } from './app.po';

describe('ninjagold App', function() {
  let page: NinjagoldPage;

  beforeEach(() => {
    page = new NinjagoldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
