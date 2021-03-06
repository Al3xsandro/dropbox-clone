import React from 'react';
import { Container, Navigation, Form, DropboxLogo } from './style';

const MenuForm: React.FC = () => {
    return (
        <Container>
            <Navigation>
                <h1>
                    <DropboxLogo />
                    <span>DropBox</span>
                </h1>

                <button className="action-close">✕</button>
            </Navigation>
            <Form>
                <span className="title">Registre-se</span>
                <span className="subtitle">preencha o formulário abaixo</span>

                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Sobrenome" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />

                <button>Prosseguir</button>
                <span className="terms">Essa página está sujeita á Política de Privacidade e aos Termos de serviço.</span>
            </Form>
        </Container>
    )
}

export default MenuForm;