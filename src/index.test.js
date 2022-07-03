/* global expect, belvethUltPassive */

describe('belvethUltPassive(baseDmg, hits, bonusAD)', () => {

  beforeEach(() => {
    expect(belvethUltPassive).to.be.a('function');
    expect(belvethUltPassive(8, 10, 100)).to.be.a('number');
  });

  context('(8, 10, 100)', () => {

    it('returns 135', () => {
      const result = belvethUltPassive(8, 10, 100);
      expect(result).to.deep.equal(135);
    })
  })

  context('(5, 1, 100)', () => {

    it('returns 0', () => {
      const result = belvethUltPassive(5, 1, 100);
      expect(result).to.deep.equal(0);
    });

  });

  context('(20, 0, 100)', () => {

    it('returns 0', () => {
      const result = belvethUltPassive(20, 0, 100);
      expect(result).to.deep.equal(0);
    })
  })

  context('(8, 6, 50)', () => {

    it('returns 51', () => {
      const result = belvethUltPassive(8, 6, 50);
      expect(result).to.deep.equal(51);
    })
  })

  context('(8, 25, 0)', () => {

    it('returns 624', () => {
      const result = belvethUltPassive(8, 25, 0);
      expect(result).to.deep.equal(624);
    })
  })

  context('(40, 18, 47)', () => {

    it('returns 1821.1', () => {
      const result = belvethUltPassive(40, 18, 47);
      expect(result).to.deep.equal(1821.1);
    })
  })

  context('(12, 10)', () => {

    it('returns 180', () => {
      const result = belvethUltPassive(12, 10);
      expect(result).to.deep.equal(180);
    })
  })

});
