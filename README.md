

<h1 align="center">Geração de Certificado em PDF</h1> 
<p align="center">Trata-se de um serviço WEB que recebe os dados do aluno e gera um arquivo PDF desse certificado.</p>


### :mag: Sobre o projeto 
O GenerateCertificate é um projeto em construção iniciado como um desafio de aprendizado. No momento conta com um template HTML único não podendo ser feito upload de outro modelo, futuramente será implementado. A versão rodando localmente salva o pdf do certificado assim que é gerado na pasta do projeto. A versão online localizada no link: [https://generatecertificate.herokuapp.com/] apenas esta gerando sem o download automático, o que futuramente também deverá ser implementado.

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express.js](http://expressjs.com/)
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Handlebars-pdf](https://www.npmjs.com/package/handlebars-pdf)
- [Axios](https://www.npmjs.com/package/axios)

### :key: Executar a aplicação

Clone este repositório
$ git clone https://github.com/raissaboeng/generate_certificate.git

Acesse a pasta do projeto no terminal/cmd
$ cd generate_certificate

Instale as dependências
$ npm install

Execute a aplicação em modo de desenvolvimento
$ npm start

O servidor inciará na porta:8081- acesse <http://localhost:8081> 


### :bulb: Melhorias
- [ ] Opção para fazer upload de modelo HTML personalizado;
- [ ] Opção para download do certificado quando gerado no navegador na versão publicada;
- [ ] Criação de test;

