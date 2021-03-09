# ignite_trilha_react
Bootcamp RocketSeat

Módulos, plugins e extenções adicionadas:

//Inicializa um projeto react
yarn init -y

//Instala o react no projeto
yarn add react 

//Instala o react na web
--yarn add react-dom


//Instalação do babel, interface cli e configurações de preset. Depêndencias abaixo instalado em modo de desenvolvedor.
--yarn add @babel/core @babel/cli @babel/preset-env @babel/preset-react -D

//Integração entre o babel e o webpack (faz a conversão).
--yarn add babel-loader


//Instalação do webpack, webpack em cli e o servidor de execução de desenvolvedor do webpack
--yarn add webpack webpack-cli webpack-dev-server -D


// HtmlWebpackPluginsimplifica a criação de arquivos HTML para servir seus pacotes webpack. Isso é especialmente útil para pacotes webpack que incluem um hash no nome do arquivo que muda a cada compilação. Você pode deixar o plugin gerar um arquivo HTML para você, fornecer seu próprio modelo usando modelos Lodash ou usar seu próprio carregador .
--yarn add html-webpack-plugin -D

//Serve para definir variavéis de ambientes sem depender do S.O
--yarn add cross-env -D

//Utilizado para interpretar arquivos css dentro do js.
--yarn add style-loader css-loader -D

//Instalar o sass no projeto react
--yarn add node-sass sass-loader -D