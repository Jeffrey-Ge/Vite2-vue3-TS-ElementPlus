import type { App } from 'vue'
const files = import.meta.globEager('./modules/*.ts')
const directives: any[] = []

Object.keys(files).forEach((key: string) => {
  const fileContent = files[key].default || {}
  const name = key.replace(/(\.\/modules\/|\.ts)/g, '')
  directives.push({
    [name]: fileContent
  })
})

export function setupDirectives(app: App) {
  directives.forEach((directive) => {
    typeof directive === 'function'
      ? (app.directive('debounce', directive('debounce')),
        app.directive('throttle', directive('throttle')))
      : app.directive(directive.name, directive)
  })
}
