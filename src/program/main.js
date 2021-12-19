export const handleFile = (e, setMap, setMapOriginal) => {
  e.preventDefault();

  const reader = new FileReader();
  reader.onload = async (e) => {
    const text = e.target.result;
    const map = text.split(/\r?\n/);

    const cells = [];

    map.forEach((line, y) => {
      [...line].forEach((char, x) => {
        const cell = { x, y, char };
        cells.push(cell);
      });
    });

    setMap({
      rows: map.length,
      cols: map[0].length,
      cells: cells,
    });
    setMapOriginal({
      rows: map.length,
      cols: map[0].length,
      cells: cells,
    });
  };

  return reader.readAsText(e.target.files[0]);
};
