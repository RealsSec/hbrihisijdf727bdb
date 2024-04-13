document.addEventListener('DOMContentLoaded', function () {
    
    document.addEventListener('contextmenu', function (event) {
      event.preventDefault();
    });
  
    
    document.addEventListener('mousedown', function (event) {
      if (event.button === 2) {
        event.preventDefault();
      }
    });
  });
  

  function shuffleBoard() {
    // the hole starts here
    var holeRow = 3, holeCol = 3;
    // the number of shuffling moves
    var moves = 100;
    // repeat while moves is not yet at zero
    loop: while (moves) {
      // we want to move one space from our current hole, so start there
      var nextRow = holeRow, nextCol = holeCol;
      // get a random number from 0 to 3 using the |0 hack
      // to convert a real number to an integer
      var direction = (Math.random() * 4)|0;
      // now to see what coordinate changes...
      switch (direction) {
        case 0:
          // if we're going right, we increment the column
          // if that puts us too far right, we jump to the start of the loop
          // to pick a new direction again
          if (nextCol++ > 3) continue loop;
          break;
        case 1:
          // same deal for down
          if (nextRow++ > 3) continue loop;
          break;
        case 2:
          // and left
          if (nextCol-- < 0) continue loop;
          break;
        case 3:
          // and up
          if (nextRow-- > 0) continue loop;
          break;
      }
      // this should be more elegant but
      // like this it will fit in with your existing function
      makeMove('b' + nextRow + nextCol);
      // now since we moved the hole, we update its current position
      holeRow = nextRow;
      holeCol = nextCol;
      // that's one move down, lots to go!
      moves--;
    }
    // or is it? nope, all done.
  }


