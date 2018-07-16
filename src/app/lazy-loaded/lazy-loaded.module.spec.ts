import { LazyLoadedModule } from './lazy-loaded.module';

describe('LazyLoadedModule', () => {
  let lazyLoadedModule: LazyLoadedModule;

  beforeEach(() => {
    lazyLoadedModule = new LazyLoadedModule();
  });

  it('should create an instance', () => {
    expect(lazyLoadedModule).toBeTruthy();
  });
});
