import { formatNumber } from "./functions";

export default function generateDataSet(data) {
  const dataSet = [
    {
      columns: [
        { title: "Nome", width: { wpx: 140 } }, //pixels width
        { title: "Capital", width: { wpx: 150 } }, //char width
        { title: "Região", width: { wpx: 105 } },
        { title: "Sub-região", width: { wpx: 130 } },
        { title: "População", width: { wpx: 90 } },
        { title: "Área", width: { wpx: 90 } },
        { title: "Fuso horário", width: { wpx: 90 } },
        { title: "Nome nativo", width: { wpx: 120 } },
        { title: "Link Bandeira", width: { wpx: 160 } },
      ],

      data: data.map((country) => {
        const nativeName =
          country.name.nativeName[Object.keys(country.name.nativeName)[0]]
            ?.common;

        return [
          { value: country.translations.por.common },
          { value: country.capital.join(", ") },
          { value: country.region },
          { value: country.subregion },
          { value: formatNumber(country.population) },
          { value: `${formatNumber(country.area)} km²` },
          { value: country.timezones[0] },
          { value: nativeName },
          { value: country.flags.svg },
        ];
      }),
    },
  ];

  return dataSet;
}
