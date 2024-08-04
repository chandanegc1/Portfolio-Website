import React from 'react'
import Wrapper from '../../styles/Projects'
import { arr1 } from "../../utils/constants"; 
import IconGroup from './IconGroup';
const Location = () => {
  return (
    <Wrapper>
     <div className="full-destop">
        <IconGroup Name=">1.000" arr={arr1} />
      </div>
    </Wrapper>
  )
}

export default Location;