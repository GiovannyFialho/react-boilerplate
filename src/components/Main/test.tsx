import { render, screen } from "@testing-library/react";

import Main from ".";

describe("<Main />", () => {
    it("renderização de título", () => {
        const { container } = render(<Main />);

        expect(
            screen.getByRole("heading", { name: /React Boilerplate/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });

    it("renderização de backgroundColor correto", () => {
        const { container } = render(<Main />);

        expect(container.firstChild).toHaveStyle({
            "background-color": "#06092b"
        });
    });
});
