<template>
  <div>
    <header>
      <h1>This is a linktree clone</h1>
    </header>
    <div class="maincontainer">
    <div class="iconcontainer">
      <div class="header__icon-box">
        <img
          src="https://i.imgur.com/n4kz0oR.gif"
          alt="icon"
          class="header__icon"
        />
        <h3>Link Tree</h3>
      </div>
      <div class="linkcontainer">
        <div class="linkbox">
          <a
            :href="link.href"
            class="link"
            v-for="link in links"
            :key="link.href"
            @click="goTo($event, link.href)"
          >
            {{ link.name }}
          </a>
        </div>
      </div>

      
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Twitter", href: "http://www.twitter.com" },
        { name: "Github", href: "http://www.github.com" },
        { name: "Linkedin", href: "http://www.linkedin.com" },
        { name: "Patreon", href: "http://www.linkedin.com" },
        { name: "Linkedin", href: "http://www.linkedin.com" },
      ],
    };
  },
  methods: {
    goTo(e, href) {
      e.preventDefault();
      window.open(href);
    },
  },
};
</script>


<style scoped>
header {
  background-color: #745ff8;
  color: white;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 5px;
  display: flex;
  justify-content: center;
}
.maincontainer {
  margin: 50px;
  }

.iconcontainer {
  display: flex;
  padding: 20px;

}
.linkcontainer {
   flex: 50%;

  /* background-color: #745ff8; */
  color: white;
  border-radius: 5px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-bottom: solid;
  border-right:inset ;
  border-color: black #25148f;
  border-width: 8px; */

}

.linkbox {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.link {
  border-radius: 100px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 15px;
  margin-bottom: 15px;
  width: 70%;
  /* border-bottom: solid;
  border-left: solid;
  color: #e6b1fb; */
  border-bottom: solid;
  border-right: solid;
  border-color: black;
  border-width: 6px;
  background-color: #ba5ff8;
  text-decoration: none;
  /* transform: skew(20deg); */
  text-transform: uppercase;
  transition: all 0.15s;
}

.link:hover {
  background-color: purple;
  border-width: 3px;
}

a {
  font-weight: 900;
  color: white;
}
a:visited {
  text-decoration: none;
}

.header__icon-box {
  flex: 50%;
}

.header__icon-box img {
  border-radius: 50%;
  border: 5px solid orangered;
  max-width: 200px;
  height: 200px;
  background-color: #43192d;
  margin-top: 75px;
}

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

@media only screen and (max-width: 500px) {
  .iconcontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    wrap: nowrap;
    margin-bottom: 50px;
  }

  .linkbox {
  }
  .link {
    width: 70%;
    list-style: none;
  }
  .a {
  }

  .header__icon-box img {
    max-width: 80%;
    height: auto;
  }
}
</style>
