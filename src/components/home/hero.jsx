import React, { Component } from 'react'
import './../../components/components.css';
import { Container } from 'react-bootstrap';

class Hero extends Component {
    state = { 
        heroImg: 'https://ik.imagekit.io/templekart/main_img_Jla-tOMwd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654739110150'
     } 
    render() { 
        return (
            <>
                <div className="tk__home__container">
                    <div className="tk__home__herocomponent"  style={{ textAlign: 'center', }}>
                       
                        <div className="hero__Component__text" >
                            <p className='main_text' >Book Sevas Digitally On Temple Kart</p>
                            <p     className='sub_text' >Let's all of us connect here and create a pure bond by engaging in Seva,
                                <br />Be fully alive by the spirit of existence. </p>
                            <div className="tk__booksevabtn">
                                <Container className="tk__booksevabtn_container">
                                    <button className="bookseva_btn " onClick={''}>Book A Seva</button>
                                    </Container>
                            </div>
                           
                        </div>
                        
             
                
                   

                        
                    </div>
                </div>                
        
        </>
        );
    }
}
 
export default Hero;