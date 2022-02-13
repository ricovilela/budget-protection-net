<p>
  <h1 align="center">Budget Project Net</h1>
</p>

## Descrição

Budget Project Net

## Tech and Tools

<a href="https://docs.nestjs.com/" target="_blank"><img src="https://img.shields.io/badge/Nest-ea2845?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" /></a>
<a href="https://nodejs.org/docs/latest-v15.x/api/" target="_blank"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS" /></a>
<a href="https://www.typescriptlang.org/docs/" target="_blank"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a><br />

<a href="https://github.com/sendgrid/sendgrid-nodejs" target="_blank"><img src="https://img.shields.io/badge/Twilio Sendgrid-F22F46?style=for-the-badge&logo=Twilio&logoColor=white" alt="SendGrid" /></a>
<a href="https://yarnpkg.com/getting-started/install" target="_blank"><img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" /></a>
<a href="https://docs.docker.com/get-started/" target="_blank"><img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /></a>
<a href="https://typicode.github.io/husky/#/" target="_blank"><img src="https://img.shields.io/badge/Husky-42b983?style=for-the-badge&logo=git&logoColor=white" alt="Husky" /></a>
<a href="https://eslint.org/docs/user-guide/getting-started" target="_blank"><img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLINT" /></a>
<a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="Prettier" /></a><br />

<a href="https://azure.microsoft.com/pt-br/overview/" target="_blank"><img src="https://img.shields.io/badge/microsoft%20azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white" alt="Microsoft Azure" /></a>
<a href="https://www.microsoft.com/pt-br/sql-server/sql-server-2019" target="_blank"><img src="https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white" alt="SQL Server" /></a>
<a href="https://gitlab.com/Fortbrasil/microservicos/microservice-sendmail" target="_blank"><img src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab" /></a>

## Conteúdo

- [Descrição](#descrição)
- [Tech and Tools](#tech-and-tools)
- [Conteúdo](#conteúdo)
- [Instalação](#instalação)
- [Depois da Instalação](#depois-da-instalação)
- [Solicitando credenciais de desenvolvimento](#solicitando-credenciais-de-desenvolvimento)
- [Solicitando credenciais de produção](#solicitando-credenciais-de-produção)
- [Executando a aplicação no terminal](#executando-a-aplicação-no-terminal)
- [Testes](#testes)
- [Solicitando token para a utilização](#solicitando-token-para-a-utilização)
- [Endereco da API Gateway](#endereco-da-api-gateway)
- [Rotas](#rotas)
- [Templates](#templates)
- [ATENÇÃO](#atenção)
- [VALIDAÇÃO DE EMAIL](#validação-de-email)
- [Outros Scripts](#outros-scripts)
- [Versionamento do projeto](#versionamento-do-projeto)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Credenciais de infra](#credenciais-de-infra)
- [Suporte](#suporte)
- [Stay in touch](#stay-in-touch)
- [License](#license)

## Instalação

```bash
$ yarn install

$ yarn prepare
```
Para criar novos modules com o <a href="https://docs.nestjs.com/" target="_blank">NestJS</a> instale a CLI
```bash
$ npm i -g @nestjs/cli
```
<i>Sempre acompanhe a documentação do NestJS clicando no icone do Nest</i>

## Depois da Instalação
Crie seu arquivo .env pelo exemplo do .env.example para que ao instanciar o Docker ele possa ler as credenciais do banco de teste.
<p>Crie a imagem dos containers com o comando a seguir.</p>

```bash
$ docker-compose -f "docker-compose.yml" up -d --build
```
Finalizando o processo da criação da imagem, suba o Docker.
```bash
$ docker-compose -up
```

Com o container instanciado, rode o script de criação do banco e migration das tabelas.
ATENÇÃO: Se houver erro na criação do banco, verifique seu .env de desenvolvimento tem como valor "localhost" a variável DB-NPL-HOST. Para rodar via docker este mesmo valor deve estar como "mssql-npl"
```bash
$ yarn migration
```
Neste momento a aplicação já está rodando em docker na localhost:3000

## Solicitando credenciais de desenvolvimento
Abrir uma chamado do tipo: <b>requisição</b>, categoria: <b>manutenção de código</b>, localização: <b>TI</b>, solicitando as chaves SMTP-KEY-MICROSERVICE e SMTP-KEY-MICROSERVICE-MAIL-VALIDATION temporárias do servico SendGrid para desenvolvimento e teste com a descrição à seguir.

```text
Demanda: 
Solicitação de chaves do SendGrid para desenvolvimento.

Ao que se destina essa solicitação:
Criação de chaves de test para a manutenção do microserviço de sendmail.
```

## Solicitando credenciais de produção
Abrir uma chamado do tipo: <b>Requisição</b>, categoria: <b>Cloud > Azure > Criação de Recurso</b>, localização: <b>TI</b>, solicitando a criação das variáveis do cofre contento as chaves de acesso com a descrição à seguir.

```text
Demanda: 
Registro de Aplicação 

Ao que se destina essa solicitação:
Criação de credencial no cofre para a utilização do microserviço de sendmail

Origem:
DOMÍNIO DO SEU SERVIÇO
[Ex: web-srv-ti-...]

Cofre:
COFRE DA APLICAÇÃO QUE UTILIZARÁ O MS SENDMAIL
```

## Executando a aplicação no terminal

```bash
# desenvolvimento
$ yarn start

# watch mode de desenvolvimento
$ yarn start:dev

# build para produção
$ yarn build

# modo de produção
$ yarn start:prod
```

## Testes

```bash
# teste unitário
$ yarn test

# teste e2e
$ yarn test:e2e
```

## Solicitando token para a utilização
<h6>Host: <a href="https://login.microsoftonline.com/d47e09d1-17c6-4a6f-b65c-d49d61e186a2/oauth2/v2.0/token" target="_blank">https://login.microsoftonline.com/d47e09d1-17c6-4a6f-b65c-d49d61e186a2/oauth2/v2.0/token</a></h6>

<h4>:POST<br />Form</h4>

```bash
grant_type: client_credentials

client_id: ID DA VARIÁVEL DO COFRE

client_secret: CHAVE DA VARIÁVEL DO COFRE

scope: api://5ce2c13a-f658-464d-8cab-d8c2ea53d86d/.default
```

## Endereco da API Gateway
 <a href="https://apimg.fortbrasil.com.br/email/v1" target="_blank">https://apimg.fortbrasil.com.br/email/v1</a>

## Rotas
<p>
<h3># DOCUMENTAÇÃO</h3>
<h4>:GET<br />/docs</h4>
</p>

<h3># MAIL</h3>

<h4>:POST<br />/scmail</h4>
<p>Envio de e-mail em massa ou individual, com o mesmo conteúdo de mensagem para todos os destinatários. Todos os e-mail são enviados como noreply@fortbrasil.com.br</p>

```bash
# Autenticação por TOKEN requisitado.
Header: { 
  "Content-Type":"application/json",
  "Ocp-Apim-Subscription-Key":"OCP-APIM-SUBSCRIPTION-KEY",
  "authentication":"Bearer TOKEN"
  }

# A variável "OCP-APIM-SUBSCRIPTION-KEY" já estará
# no cofre da aplicação, a partir de quando for feita
# a solicitação do registro do serviço.
```

```bash
Body
{
  # to: Recebe array tanto com uma posição quanto várias.
  "to": ["email1@fortbrasil.com.br","email2@fortbrasil.com.br"], 
  # subject: String do título do e-mail.
  "subject": "Teste de envio",
  # replyTo: OPCIONAL - E-mail de resposta.
  "replyTo": "atendimento@fortbrasil.com.br", 
  # cc: OPCIONAL - E-mail em cópia.
  "cc": "copia@fortbrasil.com.br", 
  # bcc: OPCIONAL - E-mail cópia oculta.
  "bcc": "oculta@fortbrasil.com.br", 
  # text: OBRIGATÓRIO - Texto do corpo do e-mail. Importante para validações.
  "text": "Corpo do email de teste", 
  # html: OPCIONAL - Corpo do e-mail em HTML. Importante ser igual ao do campo text.
  "html": "<html><body><h1>Corpo do email de teste</h1></body></html>", 
  # template: OPCIONAL - Nome do arquivo da pasta template. example.html
  "template": "example", 
  # data: OPCIONAL - Objeto de variáveis que são configuradas no template.
  "data": {"assunto": "Bem vindo a FortBrasil","link": "http://fortbrasil.com.br"}, 
}
```

<h4>:POST<br />/scmail/multiple-data</h4>
<p>Envio de e-mail em massa, com conteúdo dinâmico para cada destinatários.</p>

```bash
# Autenticação por TOKEN requisitado.
Header: { 
  "Content-Type":"application/json",
  "Ocp-Apim-Subscription-Key":"OCP-APIM-SUBSCRIPTION-KEY",
  "authentication":"Bearer TOKEN"
  }

# A variável "OCP-APIM-SUBSCRIPTION-KEY" já estará
# no cofre da aplicação, a partir de quando for feita
# a solicitação do registro do serviço.
```

```bash
Body
{
  # subject: String do título do e-mail.
  "subject": "Teste de envio",
  # replyTo: OPCIONAL - E-mail de resposta.
  "replyTo": "atendimento@fortbrasil.com.br", 
  # cc: OPCIONAL - E-mail em cópia.
  "cc": "copia@fortbrasil.com.br", 
  # bcc: OPCIONAL - E-mail cópia oculta.
  "bcc": "oculta@fortbrasil.com.br", 
  # template: OPCIONAL - Nome do arquivo da pasta template. example.html
  "template": "example", 

  # data: OBRIGATÓRIO - Array de dados dos destinatários que receberão campos de valores diferentes para cada envio no template.
  "data": [
    # to: OBRIGATÓRIO - Recebe entrada única de e-mail do destinatário.
    "to": "email1@fortbrasil.com.br", 
    # text: OBRIGATÓRIO - Texto do corpo do e-mail. Importante para validações.
    "text": "Corpo do email de teste", 
    # html: OPCIONAL - Corpo do e-mail em HTML. Importante ser igual ao do campo text.
    # IMPORTANTE: Se você utilizar uma 'template' este valor não será considerado.
    "html": "<html><body><h1>Corpo do email de teste</h1></body></html>", 
    # data: OPCIONAL/OBRIGATÓRIO - Objeto de variáveis que são configuradas no template.
    # IMPORTANTE: Se você for utilizar 'template' este valor é obrigatório. 
    "data": {"nome": "Nome do Destinatário","senha": "HAUshsuhA12!"}, 
  ]
}
```

## Templates
Para o desenvolvimento de templates, basta desenvolve-la em HTML com os Styles sem referência e salve-a na pasta templates seguindo o padrão com separadores por '-'.<br />
Exemplo: template-de-exemplo.html

```bash
# As variáveis dinâmicas dentro da template devem
# ser setadas como no exemplo:
{
  "data": {
  "nome": "fulano.fort@emailusuario.com.br",
  "senha": "12345678nove"
  }
}
```

Exemplo
```bash
<span>Olá, {{nome}}!</span>
<p>Sua nova senha de acesso é: {{senha}}</p>
```
Para chamar a template na requisição passe o nome da template sem a extensão, exemplo: template-de-exemplo.


## ATENÇÃO
NÃO MODIFIQUE TEMPLATES QUE NÃO SEJAM DA SUA APLICAÇÃO.

## VALIDAÇÃO DE EMAIL
Como boas práticas para não correr o risco do e-mail cair em SPAM, sempre utilize a variável TEXT com o mesmo conteúdo ou semelhante ao que está sendo enviado no corpo do template ou html.

## Outros Scripts

```bash
# pre build
$ yarn prebuild

# inicia modo de desenvolvimento com debug
$ yarn start:debug

# tes com modo watch
$ yarn test:watch

# test com retorno no console
$ yarn test:cov

# teste com mensagem de debug no console
$ yarn test:debug

# modo para commitar sem a necessidade do git add .
$ yarn commit

# copia a pasta templates para a pasta dist
$ copy:templates
```

## Versionamento do projeto
Sempre utilize o fluxo de trabalho de git flow criando updates, features, chores, docs e etc.<br />
Para facilitar criamos um processo que já padroniza esses commits com o comitizen, eslint, prettier e husky que nos auxilia nesse padrão.
<p>Recomendamos que utilize o git flow basta clicar <a href="https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html" target="_blank">aqui</a> e seguir os passos para instalação.</p>
<p><h4>Iniciando o processo de atualização com git flow.</h4>

```bash
# Iniciando uma feature, hotfix ou release com gitflow.
$ git flow feature start nome-da-branch-de-flow

# Para fazer o commit da branch ao repositório, seja atualizando
# a feature ou mesmo finalizando, proceda com o comando a seguir
# e siga os passos solicitados.
$ yarn commit

# Ao finalizar a branch e fazer o commit, finalize sua branch.
$ git flow feature finish nome-da-branch-de-flow

# Feito isso, faca o push para o repositório e crie a solicitação de MR.
$ git push
```
</p>

## Estrutura de pastas
Seguimos a mesma estrutura proposta no NestJS para um melhor entendimento e documentação de fácil compreensão para todos as skills.

    .
    ├── .gitlab
    │   └── logo-fortbrasil.png     # arquivo da logo que vai no README.md
    ├── .husky                      # pasta de configurações do Husky
    │   ├── commit-msg
    │   └── pre-commit
    ├── .vscode
    │   └── settings.json           # somente sets de spell words
    ├── src
    │   ├── database                # configurações para banco de dados
    │   │   └──  migrations         # migrations da aplicação
    │   │   │   └──  ...
    │   ├── shared                  # compartilhados da aplicação
    │   │   ├── azure               # módulo de credenciais da Azure
    │   │   ├── logger              # faz ficar 'bunitinho' o log no console
    │   │   └── shared.module.ts    # registro de módulos de helper
    │   ├── modules                 # pasta dos módulos
    │   └── ...
    ├── test                        # pasta de testes e2e
    │   └── ...
    ├── .env.example                # arquivo de exemplo do .env de desenvolvimento
    ├── .gitignore                  # arquivo de git ignore
    ├── .dockerignore               # arquivo de docker ignore
    ├── docker-composer.yml         # docker compose
    ├── Dockerfile                  # docker file
    ├── package.json                # package configurações system
    ├── nest-cli.json               # configuração da CLI do nest, para criação de novos modulos do serviço
    ├──...
    └── yarn.lock                   # ATENÇÃO: Não suba este arquivo ao repositório

## Credenciais de infra

- Nome do cofre: [dbbudpjctnet-prod]()
  - Variável do usuário da dbase: [DB-BUD-PJCT-NET-USERNAME]()
  - Variável de senha da dbase: [DB-BUD-PJCT-NET-PASSWORD]()
  - Variável do nome da dbase: [DB-BUD-PJCT-NET-DATABASE]()
  - Variável do host da dbase: [DB-BUD-PJCT-NET-HOST]()
  
- Nome da dbase no backoffice: [dbbudpjctnet]()

## Suporte

Visando sempre manter o servico atualizado e com novas funcionalidades compartilhamos da metodologia Spotify, onde todos podem agregar valor a este projeto.
<p>Então, fique a vontade para melhorar essa ferramenta da FortBrasil.</p>

## Stay in touch

- Developer - [Rico Vilela](mailto:rico.vilela@gmail.com)
- [Discord](https://discord.gg/Bef46pRg) 

## License

[MIT licensed](LICENSE).
