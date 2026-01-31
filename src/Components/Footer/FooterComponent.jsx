import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import { NavLink } from "react-router-dom";

const FooterComponent = () => {
  return (
    <Footer container className="dark:bg-gray-900 dark:border-gray-700">
      <FooterCopyright by="Biswajit Pradhan™" year={new Date().getFullYear()} />
      <FooterLinkGroup>
        <FooterLink as={NavLink} to="/about">
          About
        </FooterLink>
        <FooterLink as={NavLink} to="/privacy-policy">
          Privacy Policy
        </FooterLink>
        <FooterLink as={NavLink} to="/contact">
          Contact
        </FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
};
export default FooterComponent;
