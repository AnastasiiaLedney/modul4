<template>
  <li>
    
    <p class="authors">{{ photo.Author }}</p>
  
    <img alt="Cover" :src="photo.Cover" class="cover" />
    <br />
    Рейтинг <br />
     <p>{{ (photo.Likes) }}</p>
  </li>
</template>

<script>
export default {
  name: "PhotoTemplate",
  props: {
    photo: Object,
  },
  data() {
    return {};
  },
  methods: {
        truncTitle(Author, len) {
      if (Author.length > len) return Author.substring(0, len) + "...";
      else return Author;
    },
  
     showDetailPage(){
      this.$router.push(`/photo/${this.photo.Id}`);
    }

  },
    computed:{
    shortTitle (){
      const len = 20;
       if (this.photo.Author.length > len) return this.photo.Author.substring(0, len) + "...";
      else return this.photo.Author;
    }
  }

};
</script>

<style scoped>
.authors {
  font: 12px grey;
}
.photovie {
  background: burlywood;
  width: 200px;
  position: relative;
  float: left;
  margin: 10px;
  height: 400px;
}

.cover {
  position: relative;
  width: 100px;
  height: 150px;
}
</style>