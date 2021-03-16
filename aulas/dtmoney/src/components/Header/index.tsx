import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './style'

export function Header() {
    return (
        <Container >
            <Content>
                <img src={logoImg} />
                <button type="button">Nova transação</button>
            </Content>
        </Container >
    )
}