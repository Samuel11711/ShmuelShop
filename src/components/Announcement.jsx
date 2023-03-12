import styled from "styled-components";
const Container = styled.div`
  height: 40px;
  background-color: #2c3c3c;
  color: white;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size:14px;
  font-weight: 500;


`
const Announcement = () => {
  return( <Container>
      FREE SHIPPING over 30000$
  </Container>
  )
}

export default Announcement;
