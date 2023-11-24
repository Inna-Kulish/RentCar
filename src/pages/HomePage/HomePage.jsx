import {
    MainSection,
    Section,
  Wrapper,
  Title,
  List,
  Item,
  IconSvg,
  TitleBenefit,
  Descr,
} from "./HomePage.styled";
import Car from "../../images/car.svg?react";
import Bussiness from "../../images/bussiness.svg?react";
import Medal from "../../images/medal.svg?react";
import Repair from "../../images/repair.svg?react";

export default function HomePage() {
  return (
    <>
      <MainSection>
        <Wrapper>
          <Title>Car rental in Ukraine</Title>
        </Wrapper>
      </MainSection>
      <Section>
        <Wrapper>
          <List>
            <Item>
              <div>
                <IconSvg as={Medal} stroke="#283c86" />
              </div>
              <TitleBenefit>Experienced Car Rental in Ukraine</TitleBenefit>
              <Descr>
                Embark on a journey of freedom and unforgettable moments with
                RentCar. We are your reliable travel companion, offering a
                diverse range of vehicles at affordable prices.
              </Descr>
            </Item>
            <Item>
              <div>
                <IconSvg as={Car} />
              </div>
              <TitleBenefit>Cutting-edge Fleet</TitleBenefit>
              <Descr>
                Your comfort is our priority. Choose from Kia and Nissan to
                Lincoln - always ready at your disposal.
              </Descr>
            </Item>
            <Item>
              <div>
                <IconSvg as={Bussiness} />
              </div>
              <TitleBenefit>Business Trips and Leisure Getaways</TitleBenefit>
              <Descr>
                We offer flexible rental terms, tailored for both business and
                pleasure. Our commitment is to make your travel experience
                seamless and enjoyable.
              </Descr>
            </Item>
            <Item>
              <div>
                <IconSvg as={Repair} />
              </div>
              <TitleBenefit>24/7 Support</TitleBenefit>
              <Descr>
                Our dedicated support team is available around the clock to
                assist you. Enjoy peace of mind knowing that help is just a call
                away.
              </Descr>
            </Item>
          </List>
        </Wrapper>
      </Section>
    </>
  );
}
