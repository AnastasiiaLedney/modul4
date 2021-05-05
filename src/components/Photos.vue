<template>
  <section class="control">
    Вибрано фото {{ selected }}
     
  <div class="wrap">


    <ul v-if="filtredPhotos.length > 0">
      <photo-template
        v-for="b in filtredPhotos"
        :key="b.Id"
        class="photovie"
        v-on:click="selectPhoto(b._id)"
        v-bind:photo="b"
      >
      </photo-template>
    </ul>
     <p v-if="filtredPhotos == 0">Нема photo для показу</p>
  </div>
  </section>
</template>

<script>
import PhotoTemplate from "./PhotoTemplate.vue";
import { mapActions, mapGetters } from "vuex";
import { showMessage } from "@/messaging";

export default {
  name: "App",
  components: {
    PhotoTemplate,
  },
  data() {
    return {
      selected: null,
     
    };
  },
  async mounted() {
    await this.loadPhotos();
  },
  methods: {

     ...mapActions(["showMessageForTime", "loadPhotos", "deletePhotoById"]),
    
    selectPhoto(id) {
      this.selected = id;
    },
    async deletePhoto() {
      const deletedPhoto = await this.deletePhotoById(this.selected);
      if (deletedPhoto)
        showMessage("Успішне вилучення", `Photo  ${deletedPhoto.Author} вилучена`);
    },

   
  },
  computed: {


     ...mapGetters(["photos"]),
    areSomePhotos() {
      return this.photos.length > 0;
    },
    sortedPhotos() {
      function ComparePhotos(photo1, photo2) {
        if (photo1.Likes > photo2.Likes) return 1;
        if (photo1.Likes < photo2.Likes) return -1;
        if (photo1.Author > photo2.Author) return 1;
        if (photo1.Author < photo2.Author) return -1;
        return 0;
      }
      return [...this.photos].sort(ComparePhotos);
    },
    selectedEditURL() {
      return `/photo/${this.selected}/edit`;
    },
    
   
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  position: relative;
}

.wrap {
  position: relative;
}
</style>
