import React from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import { config } from './config'
import * as scene from './scene'

export const Scenes = [
  { key: 'Home', component: 'Home', title: 'Home', options: { initial: true} },
  { key: 'About', component: 'About', title: 'About', options: {} },
]

const renderScenes = (sceneArr = [], module) => {
  return sceneArr.map((value, index) => {
    return(<Scene key={value.key} component={module[value.component]} hideNavBar title={value.title}/>)
  })
}

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        {renderScenes(Scenes, scene)}
      </Stack>
    </Router>
  )
}

export default Routes