// Write a function that returns the solution to a system of equations x, y, z
// argument provided in a matrix

function solveEq(eq){
  // seperate eq matrix to matrix a and b
  const a = []
  const b = []
  for (let i = 0; i < 3; i += 1) {
    const row = [];
    for (let j = 0; j < 3; j += 1) {
      row.push(eq[i][j]);
    }
    a.push(row);
    b.push(eq[i][3]);
  }
  // calculate matrix of minors
  const mom = [];
  for (let i = 0; i < 3; i += 1) {
    const row = [];
    for (let j = 0; j < 3; j += 1) {
      const sq = [];
      for (let x = 0; x < 3; x += 1) {
        for (let y = 0; y < 3; y += 1) {
          if (x !== i && y !== j) sq.push(a[x][y]);
        }
      }
      const det = determinant(sq);
      row.push(det);
    }
    mom.push(row);
  }
  // calculate matrix of cofactors
  const moc = [[mom[0][0], -mom[0][1], mom[0][2]],
               [-mom[1][0], mom[1][1], -mom[1][2]],
               [mom[2][0], -mom[2][1], mom[2][2]]];
  // adjugate matrix of cofactors    
  const amoc = [[moc[0][0], moc[1][0], moc[2][0]],
                [moc[0][1], moc[1][1], moc[2][1]],
                [moc[0][2], moc[1][2], moc[2][2]]];               
  // find determinant of a
  const a1 = determinant([a[1][1], a[1][2], a[2][1], a[2][2]]);
  const a2 = determinant([a[1][0], a[1][2], a[2][0], a[2][2]]);
  const a3 = determinant([a[1][0], a[1][1], a[2][0], a[2][1]]);
  const aDet = a[0][0] * a1 - a[0][1] * a2 + a[0][2] * a3;
  const aInv = [];
  for (let i = 0; i < 3; i += 1) {
    const row = [];
    for (let j = 0; j < 3; j += 1) {
      row.push(1/aDet * amoc[i][j]);
    }
    aInv.push(row);
  }
  // multiply inverse of matrix a by matrix b
  return [Math.round(aInv[0][0] * b[0] + aInv[0][1] * b[1] + aInv[0][2] * b[2]),
          Math.round(aInv[1][0] * b[0] + aInv[1][1] * b[1] + aInv[1][2] * b[2]),
          Math.round(aInv[2][0] * b[0] + aInv[2][1] * b[1] + aInv[2][2] * b[2])];
}

function determinant(matrix) {
  return matrix[0] * matrix[3] - matrix[1] * matrix[2];
}

module.exports = solveEq;