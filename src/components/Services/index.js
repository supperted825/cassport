import React from 'react'
import {ServicesContainer, ServicesH1, Column, Row, ColumnImg} from './ServiceElements'
import digital1 from '../../images/digital1.PNG'
import digital2 from '../../images/digital2.PNG'
import digital3 from '../../images/digital3.PNG'
import digital4 from '../../images/digital4.PNG'
import digital5 from '../../images/digital5.PNG'
import digital6 from '../../images/digital6.PNG'
import digital7 from '../../images/digital7.PNG'
import digital8 from '../../images/digital8.PNG'
import digital9 from '../../images/digital9.PNG'
import digital10 from '../../images/digital10.PNG'
import digital11 from '../../images/digital11.PNG'
import digital12 from '../../images/digital12.PNG'
import digital13 from '../../images/digital13.PNG'
import digital14 from '../../images/digital14.PNG'
import digital15 from '../../images/digital15.PNG'
import digital16 from '../../images/digital16.PNG'

const Services = () => {
    return (
        <ServicesContainer id="digital">
        <ServicesH1>Digital Art</ServicesH1>
            <Row> 
                <Column>
                    <ColumnImg src={digital1}/>
                    <ColumnImg src={digital8}/>
                    <ColumnImg src={digital5}/>
                    <ColumnImg src={digital3}/>
                </Column>
                <Column>
                    <ColumnImg src={digital6}/>
                    <ColumnImg src={digital7}/>
                    <ColumnImg src={digital2}/>
                    <ColumnImg src={digital9}/>
                </Column> 
                <Column>
                    <ColumnImg src={digital14}/>
                    <ColumnImg src={digital12}/>
                    <ColumnImg src={digital10}/>
                    <ColumnImg src={digital11}/>
                </Column>
                <Column>
                    <ColumnImg src={digital4}/>
                    <ColumnImg src={digital16}/>
                    <ColumnImg src={digital15}/>
                    <ColumnImg src={digital13}/>
                </Column>
            </Row>
        </ServicesContainer>
    )
}


export default Services
