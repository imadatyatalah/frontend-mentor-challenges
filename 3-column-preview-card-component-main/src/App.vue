<template>
  <div id="app">
    <div id="sedans-card" class="container">
      <!-- Sedans card -->
      <img src="./assets/icon-sedans.svg" />

      <h1 class="title">Sedans</h1>

      <p class="body">
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </p>

      <button type="button" class="btn">Learn More</button>
    </div>

    <!-- SUVs card -->
    <div id="suvs-card" class="container">
      <img src="./assets/icon-suvs.svg" />

      <h1 class="title">SUVs</h1>

      <p class="body">
        Take an SUV for its spacious interior, power, and versatility. Perfect
        for your next family vacation and off-road adventures.
      </p>

      <button type="button" class="btn">Learn More</button>
    </div>

    <!-- Luxury card -->
    <div id="luxury-card" class="container">
      <img src="./assets/icon-luxury.svg" />

      <h1 class="title">Luxury</h1>

      <p class="body">
        Cruise in the best car brands without the bloated prices. Enjoy the
        enhanced comfort of a luxury rental and arrive in style.
      </p>

      <button type="button" class="btn">Learn More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--very-light-gray);
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1440px;
}
#sedans-card {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: var(--bright-orange);
}
#suvs-card {
  background-color: var(--dark-cyan);
}
#luxury-card {
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: var(--very-dark-cyan);
}
.container {
  position: relative;
  padding: 2rem;
  color: white;
}
.title {
  color: var(--very-light-gray);
  text-transform: uppercase;
}
.body {
  color: var(--transparent-white);
}
.btn {
  color: var(--very-light-gray);
  background-color: transparent;
  cursor: pointer;
}
@media only screen and (min-width: 768px) {
  #app {
    flex-direction: row;
  }
  #sedans-card {
    border-top-right-radius: 0;
    border-bottom-left-radius: 5px;
  }
  #luxury-card {
    border-top-right-radius: 5px;
    border-bottom-left-radius: 0;
  }
}
</style>
