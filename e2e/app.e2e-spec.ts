import { NominaPage } from './app.po';

describe('nomina App', function() {
  let page: NominaPage;

  beforeEach(() => {
    page = new NominaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
