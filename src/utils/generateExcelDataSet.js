export default function generateExcelDataSet(data) {
  const dataSet = [
    {
      columns: [
        { title: "Nome", width: { wpx: 140 } },
        { title: "Capital", width: { wpx: 150 } },
        { title: "Região", width: { wpx: 105 } },
        { title: "Sub-região", width: { wpx: 130 } },
        { title: "População", width: { wpx: 90 } },
        { title: "Área (km²)", width: { wpx: 90 } },
        { title: "Fuso horário", width: { wpx: 90 } },
        { title: "Nome nativo", width: { wpx: 120 } },
        { title: "Link da Bandeira", width: { wpx: 180 } },
      ],

      data: data.map((country) => {
        return [
          { value: country.translations.por.common },
          { value: country.capital.join(", ") },
          { value: country.region },
          { value: country.subregion },
          { value: country.population },
          { value: country.area },
          { value: country.timezones[0] },
          {
            value:
              country.name.nativeName[Object.keys(country.name.nativeName)[0]]
                ?.common,
          },
          { value: country.flags.svg },
        ];
      }),
    },
  ];

  return dataSet;
}
