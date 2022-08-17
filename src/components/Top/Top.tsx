import React,{FC} from 'react';
import styled from '@emotion/styled';

import {Legend,LegendProps} from './Legend'
import { GameName,GameNameProps } from './GameName';

export type TopProps=LegendProps & GameNameProps

export const Top:FC<TopProps>=({children,...legendprops})=>{
 return (<Header>
   <GameName>{children}</GameName>
   <Legend {...legendprops}></Legend>

 </Header>)
}

const Header=styled.header`
 text-align:center;
 position:relative;
 displat:inline-block
`