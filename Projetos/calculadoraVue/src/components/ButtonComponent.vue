<template>
  <button
    class="button"
    :class="{ operation: operation, double: double, operationSecundary: operationSecundary }"
    @click="$emit('onClick', label)"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {},
    operation: { type: Boolean },
    operationSecundary: { type: Boolean },
    double: { type: Boolean }
  }
}
</script>

<style>
:root {
  --bg-button: hsla(0, 0%, 20%, 1);
  --boder-button: solid 0.5px hsla(0, 0%, 35%, 1);
}

.button {
  font-size: 1.4rem;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--boder-button);
  border-bottom: var(--boder-button);
  outline: none;
  color: #bfbfbf;
  user-select: none;
}

.button:active {
  background-color: #4b4545;
}

button.double {
  grid-column: span 2;
}

.button.operation {
  background-color: #fa8231;
  color: #f0f0f0;
}

.button.operation:active {
  background-color: #fa8231cc;
}

.button.operationSecundary {
  background-color: #292929;
  color: #f0f0f0;
}

.button.operationSecundary:active {
  background-color: #373232;
}
</style>