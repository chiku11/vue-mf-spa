<template>
  <div class="container">
    <div class="row">
      <div class="col">
        Pick a color:
        <div id="div" />
        <div id="div" style="background-color: red" />
        <div id="div" style="background-color: yellow" />
      </div>
      <div class="col">
        <Shape />
      </div>
      <div class="col">
        <Design />
      </div>
    </div>
  </div>
</template>
<style scoped>
#div {
  background-color: green;
  width: 6px;
  border: 1.5px solid black;
  padding: 15px;
  margin: 2px;
}
</style>
<script>
import Design from "Design/Design";
import Shape from "Shape/Shape";
export default {
  components: {
    Design,
    Shape,
  },
};
</script>