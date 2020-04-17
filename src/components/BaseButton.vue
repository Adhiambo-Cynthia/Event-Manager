<template>
    <div>
        <button type="button" class="submit"><slot>SUBMIT</slot></button>

    </div>
</template>

<script>
    export default {} 

</script>

<style scoped>
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: none;
   color: white;
    font-weight: bold;
    background-color: rgb(2, 71, 71);
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 2px solid #39b982;
}

</style>