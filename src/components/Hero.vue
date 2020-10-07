<template>
  <section class="hero container">
    <div class="hero-body">
      <div class=" hero__content">
        <div class="hero__text-box">
          <h1 class="title hero__title">
            More than just <br>
            shorter links
          </h1>
          <p class="subtitle hero__text">
            Build your brand’s recognition and get detailed insights on how your links are performing.
          </p>
          <a href="#shorten" class="hero__button button no decoration">Get Started</a>
        </div>
        <div class="hero__img-box">
          <img class="hero__img" src="@/assets/images/illustration-working.svg" alt="woking illustration">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// come back to adjust this in accordance with sass
.hero {
  &__content {
    display: flex;
  }

  &__text-box {
    margin-top: 6rem;
    flex-basis: 40%;
  }

  &__title {
    font-size: 5.5rem;
    color: var(--color-darkViolet);
    font-weight: 700;
    margin: 2rem auto;
  }

  &__text {
    font-size: 2rem;
  }

  &__button {
    display: inline-block;
    border-radius: var(--pill);
    margin: 2rem auto;
    padding: 1.2rem 3.5rem;

  }

  &__title,
  &__text,
  &__button {
    margin-bottom: 2rem;
  }

  &__text {
    margin-bottom: 4rem;
  }

  &__img {
    max-width: 100%;
    width: 100%;
    height: auto;
    margin-left: 2rem;
  }

}

</style>
