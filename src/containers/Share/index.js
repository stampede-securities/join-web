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
  Code,
  CodeContainer,
  CopyButton,
  CopiedToKeyboard,
} from './styles'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share'

const copyToClipboard = str => {
  const el = document.createElement('textarea') // Create a <textarea> element
  el.value = str // Set its value to the string that you want copied
  el.setAttribute('readonly', '') // Make it readonly to be tamper-proof
  el.style.position = 'absolute'
  el.style.left = '-9999px' // Move outside the screen to make it invisible
  document.body.appendChild(el) // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0) // Store selection if found
      : false // Mark as false to know no selection existed before
  el.select() // Select the <textarea> content
  document.execCommand('copy') // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el) // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges() // Unselect everything on the HTML document
    document.getSelection().addRange(selected) // Restore the original selection
  }
  return true
}

class Share extends Component {
  state = {
    copied: false,
  }
  render() {
    const quote = `Invest in entertainment deals — get early access to deals and other exclusive perks`
    const url = `https://join.stampedelive.com/?code=${
      this.props.location.state ? this.props.location.state.code : ''
    }`
    return (
      <Container>
        <Logo src={logo} />
        <Header>Congratulations, You’re In!</Header>
        <Description>
          You have successfully signed up for the Keros Club! We’ll be in touch
          with exclusive access to the first deals we are launching on our
          platform. Share your link below to refer friends and get credit
          towards your first investment!
        </Description>
        <LiveSite
          href="https://www.stampedelive.com/signup"
          rel="noopener noreferrer"
          target="_blank"
        >
          Explore our main site
        </LiveSite>.
        <CodeContainer>
          <Code>{url}</Code>
          <div
            onClick={() =>
              copyToClipboard(url) && this.setState({ copied: true })
            }
          >
            <CopyButton src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARoSURBVGhD7ZlxbBNVHMebmPiP+gcmJvxh/MuEv1QSifEfQsiOSSKJUVm03ULEXhNHIGjMFCNmTkjmMPSuc+IQx9h6zFHogYhjbJ0b6YBdN8EMJJOQAP4hGKGOOdZr2fr8vevvrndrm529Y51rP8k3S37vvd/7fd/ee3e7OUosZviOw8/yfjHA+4O/80JwjPOLXt+hQ09g8/8Dn3BkNSeIMV4QiUH+4LWm1sBS7LawCQQCD8HqX6eFc0LwlO+guAoMvMr5g1eVmF9sx64LG2/b4RWp1RfHv2g/9QiGHV7/0ZVo7i6GCkeZy8MwTvbAGqe7l4r9aMdoXdP+O3rtbG6fUIwIwQkcpsC1BpanjIik7qtWwxiqik3vn1Pyutzd8JMrr3I/jUPthXGxn61xsUSv6k/qjWcgQ4FaHO4AY1L2Pim9sbnGkBsMTZW72HU43B6YyrfLjJOkNLcR5UxEwUTmwZ+lTCMgJ/v3y67qJViGdWB12tTkng9qyQ+hAfJj32kifN+dtah8dKS7T8kZ7Oohr7i3aGbKnOwGLMM6sDL9auLugUGi8vPlK1mLyke3bkcxKyE7G/dqRkB1WIZ14DcSVhP3nRnC6Qi5Mz5Bvuw4lrWw/6K24z1kenoasxJS37RPb6Qey7BOLiMUaiZycYwMnr+Uly6MXSWxeByzpSiIkQdBychclIzkScnIXBSVkdh9Qv6cTGbor6kk9kihb5vWNUVj6Xh9c7tm5PXN2xt9Q4nnZ4uLyMuwPPOYMTJ2e4bwkXiGWn5JYI8U+raJeNpJ4HJCi+/6LqQZqTlwul8/RhUnyWEszzxFa6RxOE6+Pp+ScNFoRI1T/aMzcuy3+1p8V0ePZuS9llAItlGUipfkyXk1QlfXCrkOOy/FXSUjlKIyQq9SGa5gqnj6jTwvchmpvUQe3hMmS6gaBpOPYdg8ZozYSUEfiHZSUCPXx2dIx68JRb3XYH9ZIJcRnxRbC9fwCOpbDJunqA77ojFyL5EkN+7OKLoFL35WyGWkSZpc6o3EGEVSYgWGzVNUh91OCmrkJmynENxWVCM3rT0RcxnZPZx4Ac7GXkURuQbD5lk0h51xsj+piU/2h3E6I3Ya2eFrThtxuj/FMmy4tZzub9TEVVs/JAePniCdx08a5O8aJPv6ryja3zua0W5WLZ0iWfdWtc6I500sw8FJ8eVg4nNFUuIdDJuHqWRfhKRJLfk8iXG6/1hVselRLMMeGKdnKySeyTbhgxDMFX2pkl2J09tLedXG5+C8NIA6YbKAXq9t2X7C0yCcpdpQu2dgdrtZMS63ACa2rV2/MeNf2fzI1FNwTiqofEOx1Ri2F8sH0QTzMcfiNMJH5Avqh7Tdw/FnsIuC/iMb/YsPww54wC3TxpxNPo5h5f1KjUPxH8+zkbTgyryBXRQM7bDnMQxXqxzW4pALw5BX3mYYgyoZmQvvsLwetofyIU0vKGQUuyjo23xD957EMF2ILjVOc2GY9n9XjetF+2OXEgsch+NfKWePUTcT1wAAAAAASUVORK5CYII=" />
          </div>
        </CodeContainer>
        {this.state.copied && (
          <CopiedToKeyboard>Copied to clipboard!</CopiedToKeyboard>
        )}
        <Subheader>Share With Friends</Subheader>
        <br />
        <ShareButtons>
          <FacebookShareButton url={url} quote={quote}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={url} title={quote}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={url} title={quote}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <WhatsappShareButton url={url} title={quote}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <EmailShareButton
            url={url}
            body={quote}
            subject="Stampede — Invest in Music and Movie Deals"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </ShareButtons>
      </Container>
    )
  }
}

export default Share
