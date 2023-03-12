import {
  ArrowLeftOutlined,
  
  ArrowRightOutlined,
  
} from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../Data";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  ${mobile({ display: "none" })}

`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  cursor: pointer;
  margin: auto;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;

  flex: 1;
`;
const SuperTitle = styled.h1`
  font-size: 200px;
  font-weight: 1000;
`;
const Title = styled.h1`
  margin-top: -10px;
  font-size: 110px;
`;
const Desc = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
const Image = styled.img`
  height: 80%;
  
`;

const InfoContainer = styled.div`
  flex: 1;

  padding: 30px;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction == "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}
          key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>

            <InfoContainer>
              <SuperTitle>{item.SuperTitle}</SuperTitle>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to="products"  style={{textDecoration: 'none',color:"black"} }>
              <Button>SHOW ME</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
       
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;
