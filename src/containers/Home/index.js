import React, { Component } from 'react'
import Slideshow from './components/Slideshow'
import InfoSection from './components/InfoSection'
import InvestmentCarousel from './components/InvestmentCarousel'
import chart from './chart.png'
import pie from './pie.png'
import clip from './clip.png'
import {
  BottomSection,
  Different,
  DifferentHeader,
  DifferentSubheader,
  InfoSections,
  Active,
  ActiveHeader,
  ActiveSubheader,
  Items,
  Signup,
  Disclaimer
} from './styles'

class Home extends Component {
  render() {
    return (
      <div>
        <Slideshow />
        <BottomSection>
          <Different>
            <DifferentHeader>
              How This is Different From Reward Crowdfunding
            </DifferentHeader>
            <DifferentSubheader>
              Supporters Finally Get An Ownership Stake
            </DifferentSubheader>
            <InfoSections>
              <InfoSection
                header="Equity Ownership"
                text="Investors can purchase real ownership stakes in a film, album, company, or project"
                img={pie}
              />
              <InfoSection
                header="Real Partnership"
                text="Fans become partners in a creator's journey as they become co-owners and partners in their venture"
                img={clip}
              />
              <InfoSection
                header="Potential Returns"
                text="Investments are risky and returns are never guaranteed, but if the project is successful there is a potential for returns"
                img={chart}
              />
            </InfoSections>
          </Different>
          <Active>
            <ActiveHeader>Active Offerings</ActiveHeader>
            <ActiveSubheader>
              Invest in things you actually care about
            </ActiveSubheader>
            <ActiveSubheader>(Filtered by creation date)</ActiveSubheader>
            <InvestmentCarousel />
            <Items>
              <Signup blue text="Sign Up" size="medium" to="/signup" />
              <Disclaimer>
                Investing in startups and other private companies is highly
                speculative and could result in the complete loss of the
                investment. In addition, you will not be able to resell
                securities acquired through Crowdfunding for a period of one
                year, subject to certain limited exceptions, including sales
                back to the issuer, to accredited investors, to family members
                under certain circumstances (i.e. death or divorce). However,
                even after the restricted period, there is no guarantee that
                there will be a market for the securities.
              </Disclaimer>
            </Items>
          </Active>
        </BottomSection>
      </div>
    )
  }
}

export default Home
