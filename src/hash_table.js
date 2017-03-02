function HashTable() {
  this.SIZE = 16;
  // the array will be instantiated as [undefined, undefined....]
  // the array length should not change in this problem
  this.storage = new Array(this.SIZE);
  this.count = 0;
}

// stores a value in the storage array
HashTable.prototype.set = function(key, value) {
  const hash = hashCode(key, this.SIZE);
  if (!this.storage[hash]) this.storage[hash] = {};
  this.storage[hash][key] = value;
  this.count += 1;
  if (this.count / this.SIZE >= 0.75) this.resize(2);
};

// return a previously stored value
HashTable.prototype.get = function(key) {
  const hash = hashCode(key, this.SIZE);
  return this.storage[hash][key];
};

// returns and removes a key from the hash table
HashTable.prototype.remove = function(key) {
  const hash = hashCode(key, this.SIZE);
  const temp = this.storage[hash][key];
  delete this.storage[hash][key];
  this.count -= 1;
  if (this.count / this.SIZE <= 0.25 && this.SIZE > 16) this.resize(0.5);
  return temp;
};

HashTable.prototype.resize = function(num) {
  const tempObj = {};
  for (let i = 0; i < this.storage.length; i += 1) {
    if (this.storage[i]) {
      for (let key in this.storage[i]) {
        tempObj[key] = this.storage[i][key];
      }
    }
  }
  this.SIZE *= num;
  this.count = 0;
  this.storage = new Array(this.SIZE);
  for (let key in tempObj) {
    this.set(key, tempObj[key]);
  }
};

// returns a number between 0 and size that is unique* and generated from the the inputted string
function hashCode(string, size){
  var hash = 0;
  if (string.length == 0) return hash;
  for (i = 0; i < string.length; i++) {
    var letter = string.charCodeAt(i);
    hash = ((hash<<5)-hash)+letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % size ;
}

module.exports = HashTable;