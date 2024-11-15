
import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import { colors } from '../components/colors';
import { Container } from '../components/shared';
import CardSection from "../components/Cards/CardSection";
import SendMoneySection from '../components/SendMoney/SendMoneySection';
import TransactionSection from "../components/Transactions/TransactionSection";
import card1 from "../assets/cards/visa_white.png";
import card2 from "../assets/cards/mc.png";
import portrait1 from "./../assets/portraits/1.jpg";
import portrait2 from "./../assets/portraits/2.jpg";
import portrait3 from "./../assets/portraits/3.jpg";
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;
export type props = StackScreenProps<RootStackParamList, "Home">;
const Home: FunctionComponent<props> = ({navigation}) => {
  const cardData = [
    { id: 1, accountNo: "3854123698", balance: 20000.15, alias: "Work Debit", logo: card1 },
    { id: 2, accountNo: "3854123698", balance: 10000.25, alias: "Personal Prepaid", logo: card2 },
    { id: 3, accountNo: "23652486325", balance: 42362.15, alias: "School Prepaid", logo: card1 },
  ];

  const transactionData = [
    { id: 1, amount: "$86.50", date: "14 nov 2024", title: "Taxi", subtitle: "Uber", art: { background: colors.primary, icon: "car" } },
    { id: 2, amount: "$50.50", date: "5 july 2024", title: "Shopping", subtitle: "MAX", art: { background: colors.tertiary, icon: "car" } },
    { id: 3, amount: "$100", date: "14 nov 2024", title: "Travel", subtitle: "Alex", art: { background: colors.accent, icon: "car" } },
    { id: 4, amount: "$20", date: "4 nov 2024", title: "Hospital", subtitle: "Alex", art: { background: colors.primary, icon: "car" } },

  ];

  const sendMoneyData = [
    { id: 1, amount: "200$", name: "Youssef", background: colors.tertiary, img: portrait1 },
    { id: 2, amount: "120$", name: "Mai", background: colors.primary, img: portrait2 },
    { id: 3, amount: "540$", name: "Eslam", background: colors.accent, img: portrait3 },
    { id: 4, amount: "2145.5", name: "Rahma", background: colors.tertiary, img: portrait2 },

  ];

  return (
    <HomeContainer>
      <CardSection data={cardData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
}

export default Home;
