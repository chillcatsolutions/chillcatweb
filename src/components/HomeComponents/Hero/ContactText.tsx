import React, { useRef } from 'react'
import { ContactContainer, CopyButton } from '../../../styles/style';
import styled from 'styled-components';

const TypeWrapper = styled.span`
  
  @media (max-width:451px){
    font-size: .85em;
    font-weight: bold;
  }
`;

function ContactText() {
      const copyButtonRef = useRef<any>();
      const copyEmailHandler = () => {
        if (navigator && navigator.clipboard) {
          navigator.clipboard.writeText("contact@chillcatsolutions.com").then(
            function () {
              console.log("Copying to clipboard was successful!");
            },
            function (err) {
              console.error(
                "Async: Could not copy text: contact@chillcatsolutions.com",
                err
              );
            }
          );
        }
      };
  return (
    <>
      <ContactContainer>
        <TypeWrapper id="typewriter">

        </TypeWrapper>
        <CopyButton
          className="buttonShowAnimation"
          ref={copyButtonRef}
          type="button"
          onClick={copyEmailHandler}
          >
          Copy Email
        </CopyButton>
      </ContactContainer>
    </>
  );
}

export default ContactText
