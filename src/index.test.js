/* global expect, belvethUltPassive */

describe('belvethUltPassive(baseDmg, hits, bonusAD)', function () {

  beforeEach(function () {
    expect(belvethUltPassive).to.be.a('function');
  });

  context('2, 1, 2', function () {

    it('returns 5', function () {
      var output = belvethUltPassive(2, 1, 2);
      expect(output).to.deep.equal(5);
    });

  });

  // context('["html", "css", "javascript"] and ["php", "css", "sql"]', function () {

  //   it('returns ["html", "javascript", "php", "sql"]', function () {
  //     var first = Object.freeze(['html', 'css', 'javascript']);
  //     var second = Object.freeze(['php', 'css', 'sql']);
  //     var output = difference(first, second);
  //     expect(output).to.deep.equal(['html', 'javascript', 'php', 'sql']);
  //   });

  // });

  // context('["a", "link", "to", "the", "past"] and ["the", "adventure", "of", "link"]', function () {

  //   it('returns ["a", "to", "past", "adventure", "of"]', function () {
  //     var first = Object.freeze(['a', 'link', 'to', 'the', 'past']);
  //     var second = Object.freeze(['the', 'adventure', 'of', 'link']);
  //     var output = difference(first, second);
  //     expect(output).to.deep.equal(['a', 'to', 'past', 'adventure', 'of']);
  //   });

  // });

});
