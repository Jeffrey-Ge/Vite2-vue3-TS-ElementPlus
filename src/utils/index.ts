export class Utils {
  /**
   * 生成随机字符串
   */
  public static toAnyString() {
    const str: string = 'xxxxx-xxxxx-4xxxx-yxxxx-xxxxx'.replace(
      /[xy]/g,
      (c: string) => {
        const r: number = (Math.random() * 16) | 0
        const v: number = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString()
      }
    )
    return str
  }

  /**
   * 截取URL参数
   * @param {string} url
   * @returns {Object}
   */
  public static param2Obj(url: string) {
    const search: string = url.split('?')[1]
    if (!search) {
      return {}
    }
    return JSON.parse(
      '{"' +
        decodeURIComponent(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"')
          .replace(/\+/g, ' ') +
        '"}'
    )
  }

  /**
   * 防抖
   * @param {Function} func
   * @param {number} wait
   * @param {boolean} immediate
   * @return {*}
   */
  public static debounce(
    func: Function,
    wait: number,
    immediate: boolean = false
  ) {
    let timeout: any, args: any, context: any, timestamp: number, result: any

    const later = function () {
      // 据上一次触发时间间隔
      const last = +new Date() - timestamp

      // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last)
      } else {
        timeout = null
        // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
        if (!immediate) {
          result = func.apply(context, args)
          if (!timeout) context = args = null
        }
      }
    }
    return (...args: any) => {
      context = this
      timestamp = +new Date()
      const callNow = immediate && !timeout
      // 如果延时不存在，重新设定延时
      if (!timeout) timeout = setTimeout(later, wait)
      if (callNow) {
        result = func.apply(context, args)
        context = args = null
      }

      return result
    }
  }
  /**
   * @param {Function} func
   * @param {number} wait
   * @param {boolean} immediate
   * @description 首次触发，然后规定在一个单位时间内，只会触发一次函数
   * @return {*}
   */
  public static throttle(
    func: Function,
    wait: number,
    immediate: boolean = false
  ) {
    let timeout: any
    let previous = 0
    return function (...args: any) {
      let context = this
      let now = new Date().getTime()
      // !previous代表首次触发或定时器触发后的首次触发，若不需要立即执行则将previous更新为now
      // 这样remaining = wait > 0，则不会立即执行，而是设定定时器
      if (!previous && immediate === false) previous = now
      let remaining = wait - (now - previous)
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
        previous = now
        func.apply(context, args)
      } else if (!timeout) {
        timeout = setTimeout(() => {
          // 如果leading为false，则将previous设为0，
          // 下次触发时会与下次触发时的now同步，达到首次触发（对于用户来说）不立即执行
          // 如果直接设为当前时间戳，若停止触发一段时间，下次触发时的remaining为负值，会立即执行
          previous = immediate === false ? 0 : new Date().getTime()
          timeout = null
          func.apply(context, args)
        }, remaining)
      }
    }
  }
}
