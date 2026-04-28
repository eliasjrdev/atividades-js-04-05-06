# 📦 Atividades JS 04, 05 e 06

## Sobre o Projeto

Este repositório reúne uma série de exercícios práticos em JavaScript com foco em:

* Lógica de programação
* Estruturas condicionais
* Loops
* Funções (declaradas, anônimas, arrow, callbacks, recursivas)
* Simulação de sistemas no terminal com Node.js

Os exercícios foram organizados em três blocos principais:

* **Atividades 04** - Sistemas simulados (cadastro, finanças, login, estoque, chatbot)
* **Atividades 05** - Exercícios de lógica e funções reutilizáveis
* **Atividades 06** - Sistema de RPG com diferentes tipos de funções

---

## ⚙️ Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

* Node.js (versão 14 ou superior recomendada)

Para verificar se já possui:

```bash node -v ```

---

## Instalação

Clone o repositório:

```bash git clone https://github.com/eliasjrdev/atividades-js-04-05-06.git```

Acesse a pasta:

```bash cd atividades-js-04-05-06```

---

## Dependências

Este projeto utiliza o pacote:

* `readline-sync` - para entrada de dados via terminal

Para instalar:

```bash npm install readline-sync```

⚠️ Importante:
Se você não instalar essa dependência, os scripts que pedem entrada de dados irão falhar.

---

## Como Executar

Todos os arquivos são executados diretamente com Node.js.

Exemplo:

```bash node cadastro.js```

Ou:

```bash
node financas.js
node login.js
node estoque.js
node techbot.js
```

## Como Testar

Ao executar os scripts:

* O terminal irá solicitar entradas (nome, idade, valores, etc.)
* Basta digitar as informações e pressionar **Enter**
* O resultado será exibido diretamente no console

Exemplo de fluxo:

```bash
Digite seu nome: João
Digite sua idade: 25
Está empregado? (true/false): true
```
