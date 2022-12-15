type FooterType = {
    titleForfooter: string
}

export const Footer = (props: FooterType) => {
    return(
        <div>{props.titleForfooter}</div>
    );
}