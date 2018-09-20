import { ManageCardModule } from './manage-card.module';

describe('ManageCardModule', () => {
  let manageCardModule: ManageCardModule;

  beforeEach(() => {
    manageCardModule = new ManageCardModule();
  });

  it('should create an instance', () => {
    expect(manageCardModule).toBeTruthy();
  });
});
