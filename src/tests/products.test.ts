import { describe, expect, it } from 'vitest';
import { PRODUCTS_DATA } from '../content/products';

describe('product showcase privacy limits', () => {
  it('publishes no more than two application screenshots per product', () => {
    PRODUCTS_DATA.forEach((product) => {
      expect(product.showcase.length).toBeLessThanOrEqual(2);
    });
  });

  it('keeps every published showcase image accessible', () => {
    PRODUCTS_DATA.forEach((product) => {
      product.showcase.forEach((item) => {
        expect(item.imageSrc).toMatch(/^\/products\//);
        expect(item.imageAlt.trim().length).toBeGreaterThan(0);
      });
    });
  });
});
