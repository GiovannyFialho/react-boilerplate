import {
    Typescript,
    Styledcomponents,
    Jest,
    Storybook,
    Nextdotjs
} from "@styled-icons/simple-icons";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";

import { Wrapper, Title, Techs, Icon } from "./styles";

type Tech =
    | "typescript"
    | "reactJS"
    | "nextJS"
    | "styledComponents"
    | "jest"
    | "storybook";

export type DefaultProps = {
    title: string;
    techs?: Tech[];
};

const Default = ({ title, techs }: DefaultProps) => {
    const techIcons = {
        typescript: <Typescript title="typescript" />,
        reactJS: <ReactLogo title="React JS" />,
        nextJS: <Nextdotjs title="Next JS" />,
        styledComponents: <Styledcomponents title="Styled Components" />,
        jest: <Jest title="Jest" />,
        storybook: <Storybook title="Storybook" />
    };

    return (
        <Wrapper>
            <Title>{title}</Title>

            {techs && (
                <Techs>
                    {techs.map((tech, index) => (
                        <Icon key={index} role="image" title={tech}>
                            {techIcons[tech]}
                        </Icon>
                    ))}
                </Techs>
            )}
        </Wrapper>
    );
};

export default Default;
