<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  font-family: "Lexend Deca", sans-serif;
  font-size: 15px;
  cursor: pointer;
  background-color: var(--very-light-gray);
  padding: 12px 24px;
  border: 2px solid white;
  border-radius: 30px;
}
.button:hover {
  background-color: transparent;
  color: var(--very-light-gray);
  border: 2px solid white;
}
</style>
