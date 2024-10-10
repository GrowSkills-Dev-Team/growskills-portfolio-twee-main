type Props = {
    children: string | JSX.Element | JSX.Element[],
    className: string
}
  
const HeroTitle = (props: Props) => {
    return(
        <section className={props.className}>
            {props.children}
        </section>
    )
}

export default HeroTitle;