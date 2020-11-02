import { Item } from './item';

describe('Item', () => {
  it('should create an instance', () => {
    expect(new Item("Pepperoni pizza",6.99,6.99,"",1,"")).toBeTruthy();
  });
});
