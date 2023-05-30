import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled from "styled-components";
import '@splidejs/react-splide/css';
import image1 from "../images/cliff.jpg";
import image2 from "../images/pradipta.jpg";
import image3 from "../images/syahid.jpg";
import image4 from "../images/miguel.jpg";
import image5 from "../images/unesco.png";
import image6 from "../images/umn.png";
import image7 from "../images/wfp.png";


const about = [
    { name: "Cliff Reynard", image: image1 },
    { name: "Pradipta", image: image2 },
    { name: "Syahid", image: image3 },
    { name: "Miguel", image: image4 },
];

function Member() {
    return (
        <div>
            <Wrapper>
                <h2>About Us</h2>
                <Splide
                    options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "2rem",
                    }}
                >
                    {about.map((member, index) => {
                        return (
                            <SplideSlide key={index}>
                                <Card>
                                    <img src={member.image} alt={member.name} />
                                    <p>{member.name}</p>
                                    <Gradient />
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
                <div className="logo">
                    <img src={image5} alt="cliff" />
                    <img src={image6} alt="cliff" />
                    <img src={image7} alt="cliff" />
                </div>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`margin: 4rem 0rem;
.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
    img{
        height: 5rem;
        }
    }
`;
const Card = styled.div`
height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
}

p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0.5));
`;

export default Member