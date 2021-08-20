<template>
  <svg :class="svgClass" :style="getStyle" aria-hidden="true" v-on="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue'
import { defineComponent, computed } from 'vue'

interface Props {
  prefix: string
  iconClass: string
  className: string
  size:number|string
}

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon'
    },
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: () => ''
    },
    size: {
      type: [Number, String],
      default: 16
    }
  },
  setup(props: Props) {
    const iconName = computed(
      (): string => `#${props.prefix}-${props.iconClass}`
    )
    const svgClass = computed((): string => {
      if (props.className) {
        return 'svg-icon ' + props.className
      } else {
        return 'svg-icon'
      }
    })
    const getStyle = computed((): CSSProperties => {
      const { size } = props
      let s = `${size}`
      s = `${s.replace('px', '')}px`
      return {
        width: s,
        height: s
      }
    })
    return {
      iconName,
      svgClass,
      getStyle
    }
  }
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
