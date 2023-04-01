const gameField = [
  ['x', 'o', null],
  ['x', null, 'o'],
  ['x', 'x', null],
];

const checkWins = (array) => {
  const moves = [...array[0], ...array[1], ...array[2]];

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [x, y, z] = winningCombinations[i];

    if (moves[x]) {
      if (moves[x] === moves[y] && moves[x] === moves[z]) {
        if (i <= 2) return `"${moves[x]}" победил, так как есть 3 заполненные клетки по горизонтали`;
        if (i <= 5) return `"${moves[x]}" победил, так как есть 3 заполненные клетки по вертикали`;
        return `"${moves[x]}" победил, так как есть 3 заполненные клетки по диагонали`;
      }
    }
  }

  for (let i = 0; i < moves.length; i++) {
    if (!moves[i]) return 'игра не окончена';
  }

  return 'ничья';
};
console.log(checkWins(gameField));
