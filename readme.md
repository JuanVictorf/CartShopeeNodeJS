# 🛒 Simulador de Carrinho de Compras - Shopee

Este projeto é uma simulação simples de um carrinho de compras inspirado na Shopee, desenvolvido em JavaScript. O objetivo é aplicar conceitos de programação como funções assíncronas, organização em módulos e manipulação de arrays.

## 🚀 Funcionalidades

- ✅ Adicionar itens ao carrinho
- ✅ Remover uma unidade de um item do carrinho
- ✅ Deletar um item inteiro do carrinho
- ✅ Calcular o valor total do carrinho
- ✅ Exibir a lista de itens no carrinho com subtotal de cada item

## 🗂️ Estrutura do Projeto

📦 simulador-carrinho-shopee
┣ 📜 index.js
┣ 📂 services
┃ ┣ 📜 cart.js
┃ ┗ 📜 item.js
┗ 📜 README.md

## 🔧 Tecnologias Utilizadas

- JavaScript
- Node.js (para execução local)

## 🏗️ Como Executar

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/simulador-carrinho-shopee.git
Acesse a pasta do projeto:

cd carrinhoShopeeNode
Execute o projeto (requer Node.js instalado):

node src/index.js
📄 Descrição dos Arquivos
index.js
Arquivo principal que simula o uso do carrinho, adicionando, removendo e exibindo itens.

services/item.js
Contém a função createItem() responsável por criar um item com nome, preço, quantidade e calcular o subtotal.

services/cart.js
Contém as funções responsáveis por gerenciar o carrinho:

addItem(): Adiciona um item ao carrinho.

removeItem(): Remove uma unidade do item (se quantidade for maior que 1, diminui; se for 1, remove do carrinho).

deleteItem(): Remove totalmente o item do carrinho independente da quantidade.

calculateTotal(): Calcula e exibe o valor total do carrinho.

displayCart(): Exibe todos os itens do carrinho com seus respectivos subtotais.

💡 Melhorias Futuras
🔄 Implementar interface web ou linha de comando interativa.

💾 Salvar os dados do carrinho em arquivo JSON ou banco de dados.

👥 Gerenciar múltiplos carrinhos por usuário.

📦 Adicionar funcionalidades como wishlist e histórico de compras.

👨‍💻 Autor
Juan ✨
