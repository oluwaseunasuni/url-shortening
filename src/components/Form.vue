<template>
  <div class="container form">
    <form action="">
      <div>
        <div class="form__shortener">
          <input
            class="form-input"
            type="text"
            name="link"
            id="link"
            placeholder="shorten a URL here"
            aria-label="input a url"
          />
          <button class="button form-button">
            Shorten It!
          </button>

        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.form {
  min-width: 60em;
  width: 90%;
  margin: 0 auto;

  &__shortener {
    background-image: url('../assets/images/bg-shorten-desktop.svg');
    background-color: var(--color-secondary);
    background-size: cover;
    border-radius: var(--border);
    padding: 6.5rem;
    margin: -10rem auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 1em;
  }

  &-input {
    padding: 0.8em 1.5em;
    flex: 1;
    font-size: 1.7rem;
    color: var(--color-gray-1);
    font-weight: 700;
  }

  &-input,
  &-button {
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border);
    outline: none;
    border: none;
    font-family: Poppins, sans-serif;
  }

}

// form {
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
// }
</style>
