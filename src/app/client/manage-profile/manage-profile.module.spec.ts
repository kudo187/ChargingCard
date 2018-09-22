import { ManageProfileModule } from './manage-profile.module';

describe('ManageProfileModule', () => {
  let manageProfileModule: ManageProfileModule;

  beforeEach(() => {
    manageProfileModule = new ManageProfileModule();
  });

  it('should create an instance', () => {
    expect(manageProfileModule).toBeTruthy();
  });
});
