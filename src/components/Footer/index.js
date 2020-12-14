import React from 'react';
import {ContactContainer, ContactWrapper, ContactH1, ContactCard, ContactIcon} from './ContactElements'
import {FaTelegram, FaAt, FaInstagram} from "react-icons/fa"

const Contact = () => {
    return (
        <>
            <ContactContainer id="contact">
                <ContactH1>Contact Me</ContactH1>
                <ContactWrapper>
                    <ContactCard>
                        <ContactIcon href="mailto:cassidychee@gmail.com">
                            <FaAt />
                        </ContactIcon>
                        <ContactIcon target="_blank" href="https://www.instagram.com/cassidonburi/">
                            <FaInstagram />
                        </ContactIcon>
                        <ContactIcon target="_blank" href="https://t.me/cassibean">
                            <FaTelegram />
                        </ContactIcon>
                    </ContactCard>
                </ContactWrapper>
                </ContactContainer>
        </>
    )
}

export default Contact
