import React, { Component } from 'react'
import logo from '../Form/logo-stampede-sticky.svg'
import {
  Container,
  Logo,
  Header,
  Description,
  Subheader,
  ShareButtons,
  LiveSite,
} from './styles'
import Button from '../../components/Button'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share'

import 'react-multi-email/style.css'
import { ReactMultiEmail } from 'react-multi-email'

class Share extends Component {
  state = {
    emails: [],
  }

  render() {
    const { emails } = this.state
    const url = `https://join.stampedelive.com`
    return (
      <Container>
        <Logo src={logo} />
        <Header>Congratulations, You’re In!</Header>
        <Description>
          You have successfully signed up for the Keros Club! We’ll be in touch
          with exclusive access to the first deals we are launching on our
          platform.
        </Description>
        <LiveSite
          href="https://www.stampedelive.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Link to our full site
        </LiveSite>.
        <Subheader>Share With Friends</Subheader>
        <ReactMultiEmail
          placeholder="Emails"
          emails={emails}
          style={{ fontFamily: 'Source Sans Pro', width: 300 }}
          onChange={_emails => {
            this.setState({ emails: _emails })
          }}
          getLabel={(email, index, removeEmail) => (
            <div data-tag key={index}>
              {email}
              <span data-tag-handle onClick={() => removeEmail(index)}>
                ×
              </span>
            </div>
          )}
        />
        <br />
        <Button sticky to="/share" text="Send Code" />
        <ShareButtons>
          <FacebookShareButton url={url}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <WhatsappShareButton url={url}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </ShareButtons>
      </Container>
    )
  }
}

export default Share
