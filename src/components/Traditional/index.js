import React from 'react'
import {ServicesContainer, ServicesH1, Column, Row, ColumnImg} from './TraditionalElements'
import traditional1 from '../../images/traditional1.jpg'
import traditional2 from '../../images/traditional2.jpg'
import traditional3 from '../../images/traditional3.jpg'
import traditional4 from '../../images/traditional4.jpg'
import traditional5 from '../../images/traditional5.jpg'
import traditional6 from '../../images/traditional6.PNG'
import traditional7 from '../../images/traditional7.PNG'
import traditional8 from '../../images/traditional8.JPG'
import traditional9 from '../../images/traditional9.JPG'
import traditional10 from '../../images/traditional10.JPG'
import traditional11 from '../../images/traditional11.PNG'

const Traditional = () => {
    return (
        <ServicesContainer id="traditional">
        <ServicesH1>Traditional Art</ServicesH1>
            <Row> 
                <Column>
                    <ColumnImg src={traditional6}/>
                    <ColumnImg src={traditional1}/>
                    <ColumnImg src={traditional11}/>
                </Column>
                <Column>
                    <ColumnImg src={traditional5}/>
                    <ColumnImg src={traditional7}/>
                    <ColumnImg src={traditional10}/>
                </Column> 
                <Column>
                    <ColumnImg src={traditional9}/>
                    <ColumnImg src={traditional2}/>
                    <ColumnImg src={traditional8}/>
                </Column>
                <Column>
                    <ColumnImg src={traditional4}/>
                    <ColumnImg src={traditional3}/>
                </Column>
            </Row>
        </ServicesContainer>
    )
}


export default Traditional
