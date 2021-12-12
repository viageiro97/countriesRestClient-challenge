## Desafio Desenvolvedor Front-End 2iBi

Desafio Desenvolvedor Front-End 2iBi

Cliente Rest desenvolvido em React.js, que permite a listagem dos países presentes na API: (restcountries.com), exibindo algumas informações como o seu nome, capital, área, região, e o link para download da bandeira. A aplicação foi desenvolvida com auxílio da biblioteca: Styled Components para estilização, Axios para efectuar as requisições HTTP, react-data-export, para exportar os dados dos países para o formato .xslx (Com estilização das células), e o pacote export-from-json para exportação nos formatos .csv e .xml

## Instruções de instalação e configuração

Para correr o projecto é necessário clonar ou baixar o repositório. Será necessário ter o `node` e `npm` instalados globalmente em sua maquina.
Instalação:
No directório do projecto executar o comando: `npm install`, para instalar as dependências
Para iniciar o servidor: `npm start` e por fim visitar a aplicação em `localhost:3000`

## Funcionalidades

A aplicação possui as seguintes funcionalidades:

- Pesquisa por pais especifico pelo seu nome comum em português (a acentuação pode ser ignorada)
- Filtragem de países por região
- Exportação de dados de países em uma listagem nos formatos: .xlsx, .csv e .xml (Caso o filtro de países por região esteja activado, serão exportados somente os países desta região)
- Visualização de dados detalhados de um pais especifico
