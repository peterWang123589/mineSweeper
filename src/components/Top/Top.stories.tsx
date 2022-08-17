import React  from 'react';
import {Story,Meta} from '@storybook/react'
import { Top ,TopProps} from './Top'

export default {
  title:"Top/Top",
  component:Top

}

const Template:Story<TopProps>=(args)=><Top {...args} />;

export const TopPanel = Template.bind({})
TopPanel.args={
  children:"minesweeper",
  feature:"Flag",
  firstAction:"ctrl",
  secondAction:"click"
}

