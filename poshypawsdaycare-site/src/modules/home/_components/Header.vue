<template>
  <div class="row">
    <nav class="navbar">
      <ul>
        <li>
          <router-link to="/">Logo</router-link>
        </li>
        <li>
          <router-link to="/">HOME</router-link>
        </li>
        <li>
          <router-link to="/about">ABOUT US</router-link>
        </li>
        <li>
          <router-link to="/">SERVICES</router-link>
        </li>
        <li class="contactLink">
          <router-link to="/">CONTACT US</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeaderElement"
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  li {
    display: inline-flex;
    width: auto;
    padding-left: 30px;
    padding-right: 30px;

    a {
      color: white;
      text-decoration: none;
      font-weight: 600;
    }
    a:hover {
      color: #4EC4D1;
    }
  }
}

.contactLink {
  font-size: 12px;
  margin-top: -10px;
  margin-left: auto;

  a {
    padding: 12px;
    padding-left: 25px;
    padding-right: 25px;
    margin-right: 50px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 16px;
  
    &:hover {
      border: 1px solid #4EC4D1;
    }
  }
}
</style>
