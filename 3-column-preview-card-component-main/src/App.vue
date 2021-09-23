<template>
  <div id="app">
    <section class="cards">
      <div id="sedans-card" class="card">
        <!-- Sedans card -->
        <img src="./assets/icon-sedans.svg" />

        <h1 class="title">Sedans</h1>

        <p class="body">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>

        <Button type="button" class="btn">Learn More</Button>
      </div>

      <!-- SUVs card -->
      <div id="suvs-card" class="card">
        <img src="./assets/icon-suvs.svg" />

        <h1 class="title">SUVs</h1>

        <p class="body">
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>

        <Button type="button" class="btn">Learn More</Button>
      </div>

      <!-- Luxury card -->
      <div id="luxury-card" class="card">
        <img src="./assets/icon-luxury.svg" />

        <h1 class="title">Luxury</h1>

        <p class="body">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>

        <Button type="button" class="btn">Learn More</Button>
      </div>
    </section>

    <div class="attribution">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
        >Frontend Mentor</a
      >. Coded by
      <a
        href="https://github.com/imadatyatalah"
        target="_blank"
        rel="noopener noreferrer"
        >Imad Atyat-Alah</a
      >.
    </div>
  </div>
</template>

<script>
import Button from "./components/Button";

export default {
  name: "App",
  components: { Button },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&display=swap");

#app {
  background: var(--very-light-gray);
  margin: 0 auto;
  max-width: 1440px;
  font-family: "Lexend Deca", sans-serif;
}
#sedans-card {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: var(--bright-orange);
}
#sedans-card > button {
  color: var(--bright-orange);
}
#sedans-card > button:hover {
  color: var(--very-light-gray);
}
#suvs-card {
  background-color: var(--dark-cyan);
}
#suvs-card > button {
  color: var(--dark-cyan);
}
#suvs-card > button:hover {
  color: var(--very-light-gray);
}
#luxury-card {
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: var(--very-dark-cyan);
}
#luxury-card > button {
  color: var(--very-dark-cyan);
}
#luxury-card > button:hover {
  color: var(--very-light-gray);
}
.cards {
  display: flex;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}
.card {
  position: relative;
  padding: 2.5rem;
  color: white;
}
.title {
  color: var(--very-light-gray);
  text-transform: uppercase;
  margin: 2rem 0;
  font-family: "Big Shoulders Display", cursive;
  font-size: 32px;
}
.body {
  color: var(--transparent-white);
  margin-bottom: 1.5rem;
  line-height: 28px;
}
@media only screen and (min-width: 480px) {
  .cards {
    padding: 5rem;
  }
}
@media only screen and (min-width: 768px) {
  .cards {
    padding: 6rem 8rem;
  }
}
@media only screen and (min-width: 1024px) {
  .cards {
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
  .body {
    margin-bottom: 3rem;
  }
}
@media only screen and (min-width: 1200px) {
  .cards {
    padding: 5.5rem 11rem;
  }
}
.attribution {
  font-size: 11px;
  text-align: center;
  margin: 20px;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
</style>
