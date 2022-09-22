

import BpmnRender from './src/components/bpmn-render/index.vue'

BpmnRender.install = function (app) {
  app.component(BpmnRender.name, BpmnRender)
}

const components = [
  BpmnRender
]

const install = (app) => {
  components.forEach(component => {
    app.component(component.name, component)
  })

}


export default {
  install,
  BpmnRender
}
