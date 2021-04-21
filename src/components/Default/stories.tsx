import { Meta, Story } from "@storybook/react/types-6-0";

import Default, { DefaultProps } from ".";

export default {
    title: "Default",
    component: Default,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        techs: {
            control: {
                type: "inline-check",
                options: [
                    "typescript",
                    "reactJS",
                    "nextJS",
                    "styledComponents",
                    "jest",
                    "storybook"
                ]
            }
        }
    }
} as Meta;

export const Basic: Story<DefaultProps> = (args) => <Default {...args} />;

Basic.args = {
    title: "React Boilerplate",
    techs: [
        "typescript",
        "reactJS",
        "nextJS",
        "styledComponents",
        "jest",
        "storybook"
    ]
};
