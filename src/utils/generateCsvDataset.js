export default function generateCsvXmlDataset(dados) {
  const fields = {
    nome: "Nome",
    capital: "Capital",
    regiao: "Regiao",
    subregiao: "Subregiao",
    populacao: "Populacao",
    area: "Área (km2)",
    fusohorario: "Fuso Horario",
    nomenativo: "Nome Nativo",
    linkbandeira: "Link Bandeira",
  };

  const data = dados.map((country) => {
    return {
      nome: country.name.common,
      capital: country.capital.join(", "),
      regiao: country.region,
      subregiao: country.subregion,
      populacao: country.population,
      area: country.area,
      fusohorario: country.timezones[0],
      nomenativo:
        country.name.nativeName[Object.keys(country.name.nativeName)[0]]
          ?.common,
      linkbandeira: country.flags.svg,
    };
  });

  return { fields, data };
}
