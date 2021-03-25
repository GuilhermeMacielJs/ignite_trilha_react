import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'
import React, {useContext} from 'react'

import { Container } from "./style"

export function Summary() {
    const data = useContext(TransactionsContext)
    console.log(data)
    return (
    <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeImg} alt="entradas"/>
            </header>
                <strong>R$ 17.400,00</strong>
        </div>
        <div>
            <header>
                <p>Saídas</p>
                <img src={outcomeImg} alt="saídas"/>
            </header>
                <strong>R$ 1259,00</strong>
        </div>
        <div>
            <header>
                <p>Total</p>
                <img src={totalImg} alt="total"/>
            </header>
                <strong>R$ 16.141,00</strong>
        </div>
    </Container>
    )
}