import React from 'react'
import Wrapper from '../../styles/Projects'
import { projects} from "../../utils/constants"; 
import IconGroup from './IconGroup';
const Status = () => {
  return (
    <Wrapper>
     <div className="full-destop fade-in">
        <IconGroup Name="IDEA" projects={projects} />
       <IconGroup Name="INOVATION" projects={projects} />
       <IconGroup Name="CUNSTRUCTION" projects={projects} />
       <IconGroup Name="COMPLETE" projects={projects} />
     </div>
    </Wrapper> 
  )
}

export default Status