<template>
    <footer>
        <ul class="icons">
          <li><box-icon type="logo" name="github" color="white"></box-icon></li>
          <li>
            <box-icon name="linkedin" type="logo" color="white"></box-icon>
          </li>
          <li>
            <box-icon name="codepen" type="logo" color="white"></box-icon>
          </li>
        </ul>
      </footer>
</template>

<script>

</script>

<style scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  color: white;
}

.icons li {
  list-style: none;
  display: inline-flex;
}
</style>