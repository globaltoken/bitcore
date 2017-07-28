'use strict';

var should = require('chai').should();
var gltcore = require('../');

describe('Library', function() {
  it('should export primatives', function() {
    should.exist(gltcore.crypto);
    should.exist(gltcore.encoding);
    should.exist(gltcore.util);
    should.exist(gltcore.errors);
    should.exist(gltcore.Address);
    should.exist(gltcore.Block);
    should.exist(gltcore.MerkleBlock);
    should.exist(gltcore.BlockHeader);
    should.exist(gltcore.HDPrivateKey);
    should.exist(gltcore.HDPublicKey);
    should.exist(gltcore.Networks);
    should.exist(gltcore.Opcode);
    should.exist(gltcore.PrivateKey);
    should.exist(gltcore.PublicKey);
    should.exist(gltcore.Script);
    should.exist(gltcore.Transaction);
    should.exist(gltcore.URI);
    should.exist(gltcore.Unit);
  });
});
