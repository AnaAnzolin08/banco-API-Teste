## Banco API - Testes Automatizados

O  projeto contém uma suite de **testes automatizados para a API REST** do projeto [Banco API](https://github.com/AnaAnzolin08/banco-API-Teste).
Os testes são escritos em **JavaScript** e utilizam ferramentas populares como **Mocha**, **Chai** e **Supertest** para validar os endpoints da API.


## 📄 Objetivo

Para garantir que todos os endpoints da API do Banco estejam funcionando corretamente, cobrindo casos de sucesso e falha, e validação seja  automatizada via linha de comando ou relatórios em HTML.

---

## 🧰 Stack Utilizada

* **JavaScript (Node.js)**
* [Mocha](https://mochajs.org/) - framework de testes
* [Chai](https://www.chaijs.com/) - biblioteca de asserções
* [Supertest](https://github.com/visionmedia/supertest) - HTTP assertions para testes de APIs
* [Mochawesome](https://github.com/adamgruber/mochawesome) - gera relatórios de teste em HTML

---

## 📁 Estrutura de Diretórios

```
├── test/                  # Testes organizados por funcionalidad
│   ├──Login.test.js
│   └── transferencias.test.js
├── mochawesome-report/    # Relatório HTML gerado após os testes (auto gerado)
├── .env                   # Arquivo de variáveis de ambiente (usuário precisa criar)
├── package.json
└── README.md
```

---

## ⚙️ Formato do Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3333
```

Altere o valor da `BASE_URL` conforme o ambiente onde a API estiver sendo executada.

---

## 🚀 Como Executar os Testes

1. **Instale as dependências:**

```bash
npm install
```

2. **Execute os testes:**

```bash
npm test
```

3. **Gerar relatório em HTML com o Mochawesome:**

```bash
npx mocha test --reporter mochawesome
```

4. **Acesse o relatório gerado:**

Abra o arquivo:

```
mochawesome-report/mochawesome.html
```

---

## 📖 Documentação das Dependências

* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)
* [Supertest](https://github.com/visionmedia/supertest)
* [dotenv](https://github.com/motdotla/dotenv)
* [Mochawesome](https://github.com/adamgruber/mochawesome)

---

## 🚜 Repositórios Relacionados

* Projeto da API a ser testada: [https://github.com/AnaAnzolin08/banco-API-Teste](https://github.com/AnaAnzolin08/banco-API-Teste)
* Projeto de testes: [https://github.com/juliodelimas/banco-api-tests](https://github.com/juliodelimas/banco-api-tests)

---

