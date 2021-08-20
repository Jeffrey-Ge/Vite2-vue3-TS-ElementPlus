import { Utils } from '@/utils'
import type {
  ComponentPublicInstance,
  DirectiveBinding,
  ObjectDirective
} from 'vue'
const debounceAndThrottle = (name: string = 'debounce') => ({
  name: 'debounceAndThrottle',
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    let {
      func,
      wait = 300,
      immediate = true,
      params = [],
      event = 'click'
    } = binding.value

    const handle = name === 'debounce' ? Utils.debounce : Utils.throttle,
      proxy = function proxy(...args: any) {
        return func.call(this, ...params.concat(args))
      }

    el.$event = event
    el.$handle = handle(proxy, wait, immediate)
    el.addEventListener(el.$event, el.$handle)
  },
  unmounted(el) {
    el.removeEventListener(el.$event, el.$handle)
  }
})

export default debounceAndThrottle
