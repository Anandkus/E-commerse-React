import React from 'react'
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
const Contact = () => {
  const { user, isAuthenticated } = useAuth0();
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

.heading  {
  font-size: 3.8rem;
  font-weight: 600;
  margin-bottom: 6rem;
  text-transform: uppercase;
  color: gray;
}

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

  return (
<Wrapper>

<h2 className='heading'>Contact Page </h2>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.226682911913!2d78.45647622399483!3d25.663779331485788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397712106d45a70d%3A0xbc33c91d4827a303!2sShri%20Pitambara%20Peeth!5e0!3m2!1sen!2sin!4v1675146427161!5m2!1sen!2sin" width="100%" height="450"  style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

<div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xqkoedgp"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
              value={isAuthenticated ?user.name:""}
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              value={isAuthenticated ?user.email:""}
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>

</Wrapper>
  )
}

export default Contact