# Projeto de Automação com Cypress
=====================================

Este repositório contém um projeto de automação utilizando Cypress, um framework de teste popular para aplicações web. O projeto é baseado no Exemplo de Aplicação Web em Vanilla JS de Erick Wendel, disponível em [https://erickwendel.github.io/vanilla-js-web-app-example/](https://erickwendel.github.io/vanilla-js-web-app-example/).

## Estrutura do Projeto

O projeto é organizado em duas pastas principais:

* `page`: contém as classes de objeto de página, que encapsulam os elementos e ações da aplicação web.
* `tests`: contém os arquivos de teste, que utilizam as classes de objeto de página para realizar testes automatizados.
* `config`: contém as configurações de ambiente que poderão ser rodado os testes local, homologação ou produção.

## Separação de Objetos de Página

Neste projeto, separamos a configuração do objeto de página dos arquivos de teste. Essa abordagem permite uma distinção clara entre a configuração do ambiente e a lógica de teste.

A pasta `page` contém o arquivo `registerPage.js`, que define a classe `RegisterPage`. Essa classe encapsula os elementos e ações da página de registro, como digitar nos campos de título e URL, e submeter o formulário.

A pasta `tests` contém o arquivo `registerTests.js`, que importa a classe `RegisterPage` e a utiliza para realizar testes automatizados. Os testes são organizados usando o framework de teste built-in do Cypress, com títulos descritivos e expectativas claras.

## Início Rápido

Para começar a utilizar este projeto, clone o repositório e instale as dependências usando `npm install`. Em seguida, execute os testes usando `npx cypress run`.

