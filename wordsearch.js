//declare new array of arrays for the <--> length of original
//declare every vertical element from original as a horizontal element for new
//call wordSearch


const wordSearch = (letters, word) => { 
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    

    
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }horizontal

    return false;
}

const transpose = function(matrix) {

    const newMatrix = [];
    
    for (let i = 0; i < matrix[0].length; i++) {
      newMatrix.push([]);
      for (let j = 0; j < matrix.length; j++) {
          newMatrix[i][j] = matrix[j][i];
      }
    } return newMatrix;
};

module.exports = wordSearch;
