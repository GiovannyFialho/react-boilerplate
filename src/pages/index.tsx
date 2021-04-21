import Default, { DefaultProps } from "components/Default";

export default function Home(props: DefaultProps) {
    return <Default {...props} />;
}

export async function getStaticProps() {
    return {
        props: {
            title: "React Boilerplate",
            techs: [
                "typescript",
                "reactJS",
                "nextJS",
                "styledComponents",
                "jest",
                "storybook"
            ]
        }
    };
}
