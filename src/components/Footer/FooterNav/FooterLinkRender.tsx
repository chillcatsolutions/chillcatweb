import React from 'react'

function FooterLinkRender() {

      type arrayOfLink = {
                  
      }

      const arrayOfLinks: arrayOfLink[] = [
            [{}],
            [],
            [],
            [],
      ]
  return (
    <>
      {
            arrayOfLinks.map( ( link, index )=>{
                  <ul key={index}>
                        <li><a href={link}></a></li>
                  </ul>
            } )
      }
    </>
  )
}

export default FooterLinkRender
