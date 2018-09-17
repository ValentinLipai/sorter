class Sorter {
  constructor() {
	  this.newAdded = [];
	  this.sumElems = [];
	  this.addAfterSort = 0;
	  this.sortCount = 0;
	  this.sortingArr = null;
  }

  add(element) {
	  this.newAdded.push(element);
	  if ( this.sortCount > 0 ) this.addAfterSort = 1;
  }

  at(index) {
	this.concatElems();
    return this.sumElems[index];
  }

  get length() {
	this.concatElems();
	return this.sumElems.length;
  }

  toArray() {
	this.concatElems();
    return this.sumElems;
  }

  sort(indices) {

	if ( indices.length < 2 || this.addAfterSort > 0  ) return false;

	this.sortingArr = ( this.newAdded.length == 0 ) ? this.sumElems : this.newAdded ;

	let sortingElems = [];
	let reversed = [];
	
	for ( let i = 0; i < indices.length; i++)
	{
		sortingElems.push( this.sortingArr[ indices[i] ] );
	}

	reversed = sortingElems.reverse();

	for ( let y = 0; y < indices.length; y++)
	{
		this.sortingArr.splice( indices[y], 1, reversed[y] );
	}

	this.sortingArr = null;
	this.concatElems();
	this.sortCount++;
  }

  setComparator(compareFunction) {
    // your implementation
  }

  concatElems() {
	if ( this.newAdded.length > 0 )
	{		
		this.sumElems = this.sumElems.concat(this.newAdded);
		this.newAdded = [];
	}
  }

}

module.exports = Sorter;