

const Tabs = ({ buttons, children, buttonsContainer = "div" }) => {
    const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}

export default Tabs