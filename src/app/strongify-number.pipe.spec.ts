import { StrongifyNumberPipe } from './strongify-number.pipe';

describe('StrongifyNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new StrongifyNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
