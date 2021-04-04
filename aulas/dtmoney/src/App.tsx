//Importação de bibliotecas do react
import { useState } from 'react'
import Modal from 'react-modal'


//Importação de contextos
import { TransactionsProvider } from "./hooks/useTransactions";

//Importação de componentes
import { Header } from './components/Header'
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";


//Importação de estilos
import { GlobalStyle } from "./styles/global";


//Vincula o modal no meu elemento identificado como root
Modal.setAppElement('#root')

//Exporta o componente app
export function App() {

  //Criando uma constante de estado para armazenar o valor do modal(true para open, false para close)
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  //Criando uma função para executar ao clique de uma nova transação.
  //Ao assionar a função a constante isNewTransactionModalOpen, receberá o valor = true (abrindo o modal).
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  //Criando uma função para executar ao clique do fechamento do modal.
  //Ao assionar a função a constante isNewTransactionModalOpen, receberá o valor = false (fechando o modal).
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  //O que será retornado quando chamado o componente "App"
  return (

    //Declaração do provider "TransactionsProvider". Dentro do provider será possível utilizar o que é retornado do contexto "TransactionsContext".
    <TransactionsProvider>
      
      {/*Renderiza o componente "Header". Foi declarado uma prop dentro do componente header, dessa forma se tornando obrigatório a declaração da mesma ao chamar o componente. Nesse caso está sendo passado a função de abetura do modal para dentro da prop*/}
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      {/*Renderiza o componente Dashboard.*/}
      <Dashboard />

      {/*Renderiza o componente "NewTransactionModal". Foi declarado um conjunto de props dentro do componente NewTransactionModal, dessa forma se tornando obrigatório a declaração da mesma ao chamar o componente. isOpen = atribui o valor de isNewTransactionModalOpen, onRequestClose = executa a função de fechamento do modal*/}
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}

      />

      {/*Declara o componente de estilziação dentro do componente App, sendo assim, todos os componentes filhos receberam a estilização.*/}
      <GlobalStyle />

      {/*Declaração do fechamento do provider.*/}
    </TransactionsProvider>
  )
}
