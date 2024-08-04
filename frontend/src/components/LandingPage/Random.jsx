import React from 'react'
import Wrapper from '../../styles/Projects'
import IconGroup from './IconGroup'
import {arr1 } from '../../utils/constants'

const Random = () => {
  return (
    <Wrapper>
     <div className="full-destop">
        <IconGroup Name="COMMERCIAL" arr={arr1} />
      </div>
    </Wrapper> 
  )
}

export default Random;