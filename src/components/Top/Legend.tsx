import React,{FC} from 'react';
import styled  from '@emotion/styled';


export interface LegendProps {
  /**
   * Feature  that should be activated after first+second actions
   **/
  feature:string,
  /**
   * First Action
   **/
  firstAction:string;
    /**
   * Second Action
   **/
  secondAction:string

}

export const Legend:FC<LegendProps>=({feature,firstAction,secondAction})=>(
  <Parent>
    <strong>{feature}</strong>
    <FlagComboParent>
      <FirstAction>{firstAction}</FirstAction> + <SecondAction>{secondAction}</SecondAction>
    </FlagComboParent>
  </Parent>
 

)

const Parent=styled.legend`
font-size:1em;
margin:0 auto 2vw;
line-height:1.25em
`
const FlagComboParent=styled.code`
background:#e3e3e3;
`
const FirstAction=styled.span`
color:#ec433c`

const SecondAction=styled.span`
color:#2a48ec`