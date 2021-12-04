export default function generateDataSet() {
  const dataSet = [
    {
      columns: [
        { title: "Nome", width: { wpx: 80 } }, //pixels width
        { title: "Capital", width: { wch: 40 } }, //char width
        { title: "Região", width: { wpx: 90 } },
        { title: "Sub-região", width: { wpx: 90 } },
        { title: "População", width: { wpx: 90 } },
        { title: "Área", width: { wpx: 90 } },
        { title: "Fuso horário", width: { wpx: 90 } },
        { title: "Nome nativo", width: { wpx: 90 } },
        { title: "Link Bandeira", width: { wpx: 90 } },
      ],

      data: [
        [
          { value: "H1", style: { font: { sz: "24", bold: true } } },
          { value: "Bold", style: { font: { bold: true } } },
          {
            value: "Red",
            style: {
              fill: { patternType: "solid", fgColor: { rgb: "FFFF0000" } },
            },
          },
        ],
        [
          { value: "H2", style: { font: { sz: "18", bold: true } } },
          { value: "underline", style: { font: { underline: true } } },
          {
            value: "Blue",
            style: {
              fill: { patternType: "solid", fgColor: { rgb: "FF0000FF" } },
            },
          },
        ],
        [
          { value: "H3", style: { font: { sz: "14", bold: true } } },
          { value: "italic", style: { font: { italic: true } } },
          {
            value: "Green",
            style: {
              fill: { patternType: "solid", fgColor: { rgb: "FF00FF00" } },
            },
          },
        ],
        [
          { value: "H4", style: { font: { sz: "12", bold: true } } },
          { value: "strike", style: { font: { strike: true } } },
          {
            value: "Orange",
            style: {
              fill: { patternType: "solid", fgColor: { rgb: "FFF86B00" } },
            },
          },
        ],
        [
          { value: "H5", style: { font: { sz: "10.5", bold: true } } },
          { value: "outline", style: { font: { outline: true } } },
          {
            value: "Yellow",
            style: {
              fill: { patternType: "solid", fgColor: { rgb: "FFFFFF00" } },
            },
          },
        ],
        [
          { value: "H6", style: { font: { sz: "7.5", bold: true } } },
          { value: "shadow", style: { font: { shadow: true } } },
          {
            value: "Light Blue",
            style: {
              fill: { patternType: "solid", fgColor: { rgb: "FFCCEEFF" } },
            },
          },
        ],
      ],
    },
  ];

  return dataSet;
}
