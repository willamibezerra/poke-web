// sum.ts
export function sum(a: number, b: number): number {
    return a + b;
}

// sum.test.ts


describe('Testa a função sum', () => {
  it('Deve retornar 3 quando somar 1 + 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('Deve retornar -1 quando somar -1 + 0', () => {
    expect(sum(-1, 0)).toBe(-1);
  });
});
