import { AppPage } from '../page-objects/pages/app.po';

describe('App Organízate', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Title should be blank', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('');
  });
});
