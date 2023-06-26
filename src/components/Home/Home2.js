import React,{useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/Avatar.jpeg";
// import Tilt from "react-parallax-tilt";
import { AiOutlineArrowRight } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser'; // install as  npm i @emailjs/browser




function Home2() {
  const form = useRef();
  // function is directly from email.js
      const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_iqk69of', 'template_xa5okfb', form.current, '-fnfSB9B5M7d2gNzO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
  
            e.target.reset();
        };
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="myAvtar">
             {/* <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt> */}
            <div className="d-flex w-100">
            <div className='contactForm rounded'>
                            <form ref={form} onSubmit={sendEmail}>
                                <h2>Send Me a Message</h2>
                                <div className='inputBox w-100 mt-2'>
                                    <input type={"text"} required={"required"} name={"user_name"}/>
                                    <span>Full Name</span>
                                </div>

                                <div className='inputBox w-100 mt-2'>
                                    <input type={"text"} required={"required"} name={"user_email"}/>
                                    <span>Email</span>
                                </div>
                                <div className='inputBox w-100 mt-2'>
                                    <textarea required={"required"} name={"message"}></textarea>
                                    <span>Type your Message..</span>
                                </div>
                                <div className='inputBox w-100 mt-2'>
                                    <input type={"submit"} value={"Send"}/>
                                </div>
                            </form>

                        </div>

            </div>
                    
            
          </Col>
          <Col md={4} className="">
          <div className='flip-card'>
      <div className='flip-card-front'>
        <div className='inner'>
      
          <h3 className="primary-header">Who I am,</h3>
          <p>
          A motivated and skilled undergraduate with a strong passion for software
engineering. Committed to working smart and achieving goals, I am eager
to take on any challenge. As a responsible team player with leadership
qualities and a positive attitude, I adapt easily and focus on productive
targets. 
           
          </p>
        </div>
      </div>
      <div className='flip-card-back'>
        <div className='inner'>
          <h3 className="primary-header">Also I am good at</h3>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Problem solving
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Team work
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Fast learning
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Documentation
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight />  Leadership
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Time Management
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Communication
            </li>
           
          </ul>
        </div>
      </div>
    </div> 
         
            
          </Col>
         
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
        
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
