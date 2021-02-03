# React Boilerplate ⚛
## Iniciando projeto com este boilerplate
> Caso não tenha yarn instalado na máquina, basta trocar por ```npx create-next-app```
```shell
yarn create next-app -e https://github.com/GiovannyFialho/react-boilerplate
```
## Instalação das dependências
```shell
yarn
```
## Iniciando modo de desenvolvimento
```shell
yarn dev
```
## Testes
### Comando para rodar teste
```shell
yarn test
```
### Observando alterações nos testes
> É preciso ter dado pelo menos o ```git init``` no projeto antes de iniciar esse comando.
```shell
test:watch
```
## Storybook
```shell
yarn storybook
```
## Criação de componente automático
> Utilizando [Plop](https://plopjs.com/) podemos automatizar criação de arquivos, no caso do boilerplate o comando abaixo criar componentes React de forma automática.
### Ao executar esse comando é preciso responder a pergunta do script com relação ao nome do componente
```shell
yarn generate
```
### Ou usar dessa forma onde você faz o comando e já escreve o nome do componente
```shell
yarn generate nomeComponente
```
