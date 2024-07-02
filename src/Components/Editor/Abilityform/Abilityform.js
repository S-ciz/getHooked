

import { useContext } from 'react'
import AgentContext from '../../AgentContext'
import Ability from './Ability'

const Abilityform = () => {

  let {agent, toggleAgent} = useContext(AgentContext);
  
  return (
    <div className='abilityform'>
     <span> <Ability ability={agent ? agent.Profile.achievements: []}  title="Achievement"/> </span>
     <span> <Ability ability={agent ? agent.Profile.goals: []}  title="Goal"/> </span>
     <span> <Ability ability={agent? agent.Profile.skills: []}  title="Skill"/> </span>
  
    
    </div>
  )
}

export default Abilityform
