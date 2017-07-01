import { TrainingPage } from './app.po';

describe('training App', () => {
  let page: TrainingPage;

  beforeEach(() => {
    page = new TrainingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
