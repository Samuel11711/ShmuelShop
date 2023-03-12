import { Facebook, Instagram, MailOutline, Phone, Room, WhatsApp } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.h1`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}

`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;
const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-items: center;

`

    const Payment=styled.img`
      
    width: 80%;
    `
        
    
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ShmuelShop.</Logo>
        <Desc>The most wonderful items that you can check here</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook></Facebook>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram></Instagram>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>UseFul Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Drone</ListItem>
          <ListItem>Camera</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/>
            4332 Ramallah,Gaza stip, 3232 
        </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:"10px"}}/>+972 08 666 6666
        </ContactItem>
        <ContactItem><MailOutline>style={{marginRight:"10px"}}</MailOutline>
contact@ShmuelShop.com        </ContactItem>
<Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyfadAGKzjw0XJXHPRS3c8AQYCS2KHveCmg&usqp=CAU"/>
      </Right>
    </Container>
  );
};

export default Footer;
