import React from 'react';
import { Container, HeaderWrapper, DropboxLogo, Header, Content } from './styles.module';

interface Props {
    variant: 'blue' | 'beige' | 'white' | 'black';
    title: string,
    description: string;
}

const Section: React.FC<Props> = ({ variant, title, description }) => {
    const buttonVariant = Math.round(Math.random());
    

    return (
        <Container className={variant}>
            <HeaderWrapper>
                <Header>
                    <h1>
                        <DropboxLogo />
                        <span>Dropbox</span>
                    </h1>

                    <button>{buttonVariant === 0 ? 'Acessar' : 'Interagir'}</button>
                </Header>
            </HeaderWrapper>
            <Content>
                <h2>{title}</h2>
                <p>{description}</p>
            </Content>
        </Container>
    )
} 

export default Section;