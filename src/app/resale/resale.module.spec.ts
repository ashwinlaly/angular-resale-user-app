import { ResaleModule } from './resale.module';

describe('ResaleModule', () => {
  let resaleModule: ResaleModule;

  beforeEach(() => {
    resaleModule = new ResaleModule();
  });

  it('should create an instance', () => {
    expect(resaleModule).toBeTruthy();
  });
});
