import { render, screen } from "@testing-library/react";

import Default, { DefaultProps } from ".";

const props: DefaultProps = {
    title: "React Boilerplate",
    techs: ["typescript"]
};

describe("<Default />", () => {
    it("should render component", () => {
        const { container } = render(<Default {...props} />);

        expect(
            screen.getByRole("heading", { name: /React Boilerplate/i })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("image", { name: /typescript/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
