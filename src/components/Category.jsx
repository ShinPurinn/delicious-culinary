import { AiFillHome } from 'react-icons/ai';
import { FaPizzaSlice, FaHamburger, FaUser } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
      <SLink to={''}>
        <AiFillHome />
        <h4>Home</h4>
      </SLink>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
      <SLink to={'/About'}>
        <FaUser />
        <h4>About Us</h4>
      </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0rem;

`;

const SLink = styled(NavLink)`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%; 
  text-decoration:none;
  background: linear-gradient(35deg, #494949, #313131);
  width:100px;
  height: 100px; 
  cursor:pointer;
  transform: scale(0.8);

  h4{
    color:#FFF;
    font-size:0.8rem;
  }
  svg{
    color: #FFF;
  }
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);
  }
  @media screen and (max-width: 480px) {
    h4{
        display:none;
    }
  }

`;


export default Category