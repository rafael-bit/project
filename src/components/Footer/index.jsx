import Image from "next/image";
import { List, Title, Itens, Main, Container, Cards_item, Content, Card} from "./style";

export default function Footer() {
    return(
        <footer>
            <Main>
                <Container>
                    <Cards_item>
                        <Card>
                            <Content>
                                <Image src="/img.png" width="200px" height="80px"></Image>
                            </Content>
                                <Content>
                                    <Image src="/img2.png" width="40px" height="40px"></Image>
                                    <Image src="/img2.png" width="40px" height="40px"></Image>
                                    <Image src="/img2.png" width="40px" height="40px"></Image>
                                </Content>
                        </Card>
                    </Cards_item>
                    <Cards_item>
                        <Card>
                            <Content>
                                    <List>
                                        <Title>Como Funciona</Title>
                                        <Itens>Perguntas Frequentes</Itens>
                                    </List>
                                    <List>
                                        <Title>Contato</Title>
                                        <Itens>Fala conosco</Itens>
                                    </List>
                                    <List>
                                        <Title>Institucional</Title>
                                        <Itens>Sobre nós</Itens>
                                        <Itens>Termo de uso</Itens>
                                        <Itens>Política de privacidade</Itens>
                                </List>
                            </Content>
                        </Card>
                    </Cards_item>
                    <Content>
                        <Image src="/img.png" width="200px" height="80px"></Image>
                        <Image src="/img.png" width="200px" height="80px"></Image>
                        <Image src="/img.png" width="200px" height="80px"></Image>
                </Content>
                </Container>
            </Main>
        </footer>
    );
}