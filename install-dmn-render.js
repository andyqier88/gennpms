
import DmnRender from './src/components/dmn-render/index.vue'

DmnRender.install = function (app) {
  app.component(DmnRender.name, DmnRender)
}

const components = [
  DmnRender
]

const install = (app) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install,
  DmnRender
}
