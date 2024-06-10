import React from 'react'
import Wrapper from '../styles/Projects'
import { arr, arr1 } from "../utils/constants"; 
import IconGroup from './IconGroup';
const Scale = () => {
  return (
    <Wrapper>
     <div className="full-destop">
        <IconGroup Name=">1.000" arr={arr} />
        <IconGroup Name="10.000 mz" arr={arr1} />
        <IconGroup Name="100.000 mz" arr={arr} />
        <IconGroup Name="<1.000.000" arr={arr1} />
      </div>
    </Wrapper>
  )
}

export default Scale;