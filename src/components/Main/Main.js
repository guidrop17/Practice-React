import "./Main.css";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card} from "react-bootstrap";
import band2 from '../../assets/img/band2.png'
import band1 from '../../assets/img/band1.png'
import band3 from '../../assets/img/band3.png'
import lewis from '../../assets/img/2.png'
import max from '../../assets/img/1.png'
import valtteri from '../../assets/img/3.png'
import background from '../../assets/img/bg.png'



const Main = () => {
    return (
        <>
            <Card.Img className="Background" src={background} />
            <div className="Cards">


                
                <Card className="Card2"> 
                    <Card.Img className="CardImg2" src={lewis} />
                    <Card.Body>
                        <Card.Text>Lewis <img className="band2" src={band2} /></Card.Text>
                        <Card.Title><b>HAMILTON</b></Card.Title>
                    </Card.Body>
                </Card>

                <Card className="Card1">
                    <Card.Img className="CardImg1"  src={max} />
                    <Card.Body>
                        <Card.Text>Max <img className="band2" src={band1} /></Card.Text>
                        <Card.Title><b>VERSTAPPEN</b></Card.Title>
                    </Card.Body>
                </Card>

                <Card className="Card3">
                    <Card.Img className="CardImg3" src={valtteri} />
                    <Card.Body>
                        <Card.Text>Valtteri <img className="band2" src={band3} /></Card.Text>
                        <Card.Title><b>BOTTAS</b></Card.Title>
                    </Card.Body>
                </Card>

            </div>
        </>
    )
};

export default Main