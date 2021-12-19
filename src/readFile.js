export function readFile(
  file = [
    "#########",
    "#       #",
    "# X XX  #",
    "# C  C  #",
    "# S C   #",
    "#       #",
    "#########",
  ]
) {
  const cells = [];

  file.forEach((line, y) => {
    [...line].forEach((char, x) => {
      const cell = { x, y, char };
      // console.log("cell", cell)
      cells.push(cell);
    });
  });

  return {
    rows: file.length,
    cols: file[0].length,
    cells: cells,
  };
}
