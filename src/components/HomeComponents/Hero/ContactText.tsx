import React, { useRef } from 'react'
import { ContactContainer, CopyButton } from '../../../styles/style';

function ContactText() {
      const copyButtonRef = useRef<any>();
      const copyEmailHandler = () => {
        if (navigator && navigator.clipboard) {
          navigator.clipboard.writeText("chlllcatsolutions@gmail.com").then(
            function () {
              console.log("Copying to clipboard was successful!");
            },
            function (err) {
              console.error(
                "Async: Could not copy text: chillcatsolutions@gmail.com",
                err
              );
            }
          );
        }
      };
  return (
    <>
      <ContactContainer>
        <span id="typewriter">
          Welcome, you can contact us through: chillcatsolutions@gmail.com
        </span>
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
