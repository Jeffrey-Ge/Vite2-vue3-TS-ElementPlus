<template>
  <div>
    <div class="flex justify-around flex-wrap">
      <SvgIcon iconClass="test" size="32" />
      <template v-for="item in 6" :key="item">
        <SvgIcon :iconClass="`dynamic-avatar-${item}`" size="32" />
      </template>
      <SvgIcon iconClass="moon" size="32" />
      <SvgIcon iconClass="sun" size="32" />
      <SvgIcon iconClass="dynamic-avatar-moon" size="32" />
    </div>
  </div>
</template>

<script lang="ts">
  export default {}
</script>

<style></style>
