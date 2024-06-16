import React from 'react'
import { Footer } from 'flowbite-react';

const FooterLayout = () => {
  return (
    <Footer container>
        <Footer.Copyright href="#" by="STMIK Dharma Negara" year={2023} />
        <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
    </Footer>
  )
}

export default FooterLayout