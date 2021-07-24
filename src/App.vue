<template>
  <div id="app">
    <div class="md-layout-item md-size-33" v-for="comic in comics" :key="comic.id">
      <comic
        :title="comic.title"
        :description="comic.description"
        :image="getImage (comic)"
      ></comic>
    </div>
  </div>
</template>

<script>
import MarvelApi from '@/services/MarvelAPI'
import Comic from '@/components/Comic'

export default {
  name: 'App',
  components: {
    Comic
  },
  data () {
    return {
      comics: []
    }
  },
  created () {
    MarvelApi.getAllComics(10, comics => {
      this.comics = comics.data.data.results
    })
  },

  methods: {
    getImage: function (comic) {
      if (comic.images.lenght) {
        return comic.images[0].path + '/portrait_medium.jpg'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
