<template>
  <div class="display">
    <div className="miniDisplay">{{ value.miniDisplay }}</div>
    <div className="mainDisplay">{{ value.mainDisplay }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: {}
  }
}
</script>

<style>
.display {
  grid-column: span 4;
  display: grid;
  grid-template-rows: 20px 1fr;
  padding: 20px;
  background-color: #0004;
  overflow: hidden;
}

.display>div {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.miniDisplay {
  font-size: 0.8em;
}

.mainDisplay {
  font-size: 2em;
}
</style>