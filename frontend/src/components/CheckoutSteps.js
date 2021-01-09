import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
// this is my checkout code 1
function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <Nav className="justify-content-center mb-4">
      <NavItem>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Sign in</Nav.Link>
          </LinkContainer>
        ) : (
          <NavLink disabled> Sign in</NavLink>
        )}
      </NavItem>
      <NavItem>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <NavLink disabled> Shipping</NavLink>
        )}
      </NavItem>
      <NavItem>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </NavItem>
      <NavItem>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </NavItem>
    </Nav>
  );
}

export default CheckoutSteps;
