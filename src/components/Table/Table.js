import "./Table.css";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Badge } from "react-bootstrap";
import McLaren from '../../assets/img/McLaren.png'
import Ferrari from '../../assets/img/ferrari.png'
import Mercedes from '../../assets/img/Mercedes.png'
import Alpha from '../../assets/img/AlphaTauri.png'
import Alpine from '../../assets/img/Alpine.png'
import RedBull from '../../assets/img/RedBull.png'


const Tab = () => {
    return (
        <>

            <Table bg="light" className="Table container" hover >
                <tbody>
                    <tr>
                        <td colSpan="2" className="name"><h5> 1&nbsp; <img className="tag" src={RedBull}/> &nbsp;Max <b>VERSTAPPEN </b> &nbsp; </h5> RedBull Racing</td>
                        <td><Badge pill bg="light" text="dark">
                            300 PTS
                        </Badge>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="name"><h5> 2&nbsp; <img className="tag" src={Mercedes}/> &nbsp;Lewis <b>HAMILTON </b> &nbsp; </h5> Mercedes</td>
                        <td><Badge pill bg="light" text="dark">
                            280 PTS
                        </Badge>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="name"><h5> 3&nbsp; <img className="tag" src={Mercedes}/> &nbsp;Valtteri <b>BOTTAS </b> &nbsp; </h5> Mercedes</td>
                        <td><Badge pill bg="light" text="dark">
                            200 PTS
                        </Badge>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="name"><h5> 4&nbsp; <img className="tag" src={RedBull}/> &nbsp;Sergio <b>PEREZ </b> &nbsp; </h5> RedBull Racing</td>
                        <td><Badge pill bg="light" text="dark">
                            180 PTS
                        </Badge>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="name"><h5>  5&nbsp; <img className="tag" src={McLaren}/> &nbsp;Lando <b>NORRIS </b> &nbsp; </h5> McLaren</td>
                        <td><Badge pill bg="light" text="dark">
                            160 PTS
                        </Badge>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="1" className="name"><h5> 6&nbsp; <img className="tag" src={Ferrari}/> &nbsp;Charles <b>LECLERC </b> &nbsp; </h5> Ferrari</td>
                        <td><Badge pill bg="light" text="dark">
                            140 PTS
                        </Badge>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="name"><h5> 7&nbsp; <img className="tag" src={Ferrari}/> &nbsp;Carlos <b>SAINZ </b> &nbsp; </h5> Ferrari</td>
                        <td><Badge pill bg="light" text="dark">
                            130 PTS
                        </Badge>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="name"><h5> 8&nbsp; <img className="tag" src={McLaren}/> &nbsp;Daniel <b>RICCIARDO </b> &nbsp; </h5> McLaren</td>
                        <td><Badge pill bg="light" text="dark">
                            100 PTS
                        </Badge>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="name"><h5> 9&nbsp; <img className="tag" src={Alpha}/> &nbsp;Pierre <b>GASLY </b> &nbsp; </h5> AlphaTauri</td>
                        <td><Badge pill bg="light" text="dark">
                            70 PTS
                        </Badge>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="name"><h5> 10&nbsp; <img className="tag" src={Alpine}/> &nbsp;Fernando <b>ALONSO </b> &nbsp; </h5> Alpine</td>
                        <td><Badge pill bg="light" text="dark">
                            50 PTS
                        </Badge>
                        </td>
                    </tr>
                </tbody>
            </Table>

        </>
    )
};

export default Tab