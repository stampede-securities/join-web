import React from 'react'
import moment from 'moment'
import {
  Container,
  Img,
  Checkmark,
  CheckImg,
  Money,
  Progressbar,
  TitleSection,
  Content,
  NameHeader,
  NameDescription,
  DataSection,
  DataItems,
  DataItem,
  LeftText,
  RightText
} from './styles'
import check from './white-check.svg'

// ad-hoc formatNumber function, should be generalized once reqs are clearer
const formatNumber = amount => {
  // if very small number, include cents
  if (amount < 100) {
    return `$${amount.toFixed(2)}`
  }
  if (amount < 1000) {
    return `$${amount}`
  }
  // Express in thousands with at most one decimal place
  return `$${Math.floor(amount / 100) / 10}K`
}

const InvestmentCard = ({
  entry: {
    img,
    name,
    category,
    amountGoal,
    amountRaised,
    endDate,
    company,
    location
  }
}) => {
  const done = amountRaised >= amountGoal
  const daysLeft = moment(endDate).diff(moment(), 'days')
  return (
    <Container>
      <Img src={img} />
      <Checkmark done={done}>
        <CheckImg src={check} alt="check" />
      </Checkmark>
      <Money>{done ? 'Investment Complete' : formatNumber(amountRaised)}</Money>
      <Progressbar progress={amountRaised / amountGoal} />
      <TitleSection>
        <Content>
          <NameHeader href={`/${name}`} done={done}>
            {name}
          </NameHeader>
          <NameDescription done={done}>
            {`${company} • ${location}`}
          </NameDescription>
        </Content>
      </TitleSection>
      <DataSection>
        <Content>
          <DataItems done={done}>
            <DataItem>
              <LeftText>Category</LeftText>
              <RightText>{category}</RightText>
            </DataItem>
            <DataItem>
              <LeftText>Raised</LeftText>
              <RightText>
                {done
                  ? `Sold Out • ${formatNumber(amountRaised)}`
                  : `${formatNumber(amountRaised)} of ${formatNumber(
                      amountGoal
                    )}`}
              </RightText>
            </DataItem>
            <DataItem>
              <LeftText>Days Left</LeftText>
              <RightText>{daysLeft > 0 ? daysLeft : 'Ended'}</RightText>
            </DataItem>
          </DataItems>
        </Content>
      </DataSection>
    </Container>
  )
}

export default InvestmentCard
