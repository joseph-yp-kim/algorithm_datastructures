const expect = require('chai').expect;
const HashTable = require('./../src/hash_table');

describe('HashTable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  it('should have a set and get and remove function', () => {
    expect(hashTable.set).to.be.a('function');
    expect(hashTable.get).to.be.a('function');
    expect(hashTable.remove).to.be.a('function');
    expect(hashTable.storage.length).to.eql(16);
  });

  it('should set and get', () => {
    hashTable.set('key','value');
    expect(hashTable.get('key')).to.be('value');
    expect(hashTable.storage.length).to.eql(16);
  });

  it('should set and get multiple values', () => {
    hashTable.set('first key', 'first value');
    hashTable.set('second key', 'second value');
    expect(hashTable.get('first key')).to.be('first value');
    expect(hashTable.get('second key')).to.be('second value');
    expect(hashTable.storage.length).to.eql(16);
  });

  it('should remove value', () => {
    hashTable.set('first key', 'first value');
    expect(hashTable.get('first key')).to.eql('first value');
    expect(hashTable.remove('first key')).to.eql('first value');
    expect(hashTable.get('first key')).to.eql(undefined);
  });

  it('should handle collisions (http://en.wikipedia.org/wiki/Hash_table#Collision_resolution)', () => {
    for (let i = 0; i < 30; i++) {
      const key = 'key ' + i;
      const value = 'value ' + i;
      hashTable.set(key, value);
      expect(hashTable.get(key)).to.be(value);
    }
    for (let i = 0; i < 30; i++) {
      const key = 'key ' + i;
      const value = 'value ' + i;
      expect(hashTable.get(key)).to.be(value);
    }
  });

  // BONUS
  it('should double in size when 75% of the space is filled', () => {
    for (let i = 0; i < 13; i++) {
      const key = 'key ' + i;
      const value = 'value ' + i;
      hashTable.set(key, value);
    }
    expect(hashTable.SIZE).to.equal(32);
  });

  it('should halve in size when less than 25% of the space is used (cannot drop below 16)', () => {
    for (let i = 0; i < 13; i++) {
      const key = 'key ' + i;
      const value = 'value ' + i;
      hashTable.set(key, value);
    }
    expect(hashTable.SIZE).to.equal(32);
    for (let i = 0; i < 5; i++) {
      const key = 'key ' + i;
      hashTable.remove(key);
    }
    expect(hashTable.SIZE).to.equal(16);
  });

});
