<template>
    Select a shape:
    <div id="circle"/>
    <div id="rectangle"/>
    <div id="triangle-up"/>
</template>
<style scoped>
#circle {
  width: 30px;
  height: 30px;
  background: grey;
  border-radius: 50%
}

#rectangle {
  width: 40px;
  height: 30px;
  background: grey;
}

#triangle-up {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 30px solid grey;
}
</style>