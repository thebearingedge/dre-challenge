/* global expect, belvethUltPassive */

describe('belvethUltPassive(baseDmg, hits, bonusAD)', () => {

  beforeEach(() => {
    expect(belvethUltPassive).to.be.a('function');
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

  context('(8, 10, 50)', () => {

    it('returns 68', () => {
      const result = belvethUltPassive(8, 10, 50);
      expect(result).to.deep.equal(68);
    })
  })

  context('(8, 10, 0)', () => {

    it('returns 120', () => {
      const result = belvethUltPassive(8, 10, 0);
      expect(result).to.deep.equal(120);
    })
  })

  context('(8, 10)', () => {

    it('returns 120', () => {
      const result = belvethUltPassive(8, 10);
      expect(result).to.deep.equal(120);
    })
  })

});
