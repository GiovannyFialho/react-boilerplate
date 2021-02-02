import { Wrapper, Title, Description, Logo, Illustration } from "./styles";

const Main = ({
    title = "React Boilerplate",
    description = "Typescript, ReactJS, NextJS, Styled Components, Jest e Storybook"
}) => (
    <Wrapper>
        <Logo
            src="/img/logo.svg"
            alt="Imagem de um átomo e React avaçado escrito ao lado."
            title="Logo react avaçado"
        />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Illustration
            src="/img/hero-illustration.svg"
            alt="Desenvolvedor de frente para a tela com o código"
            title="Ilustração curso de React avançado"
        />
    </Wrapper>
);

export default Main;
