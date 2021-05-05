<template>
<div v-if="correctId">
    <p> {{photo.Author}}</p>
    <img :src="photo.Cover">
    </div>
  <p v-else>Невірний id</p>
</template>

<script>
import networking from "@/networking";
import { showErrorMessage } from "@/messaging";

export default {
    props:{
        id:String
    },
    data(){
        return{
            photo:{

                Author:"",
                Cover:"",
            
            },
             correctId: false,
        }
    },
    async mounted(){
      
      try {
      this.photo = await networking.getPhotoById(this.id);
      console.log(this.photo);
      if (this.photo) this.correctId = true;
      else this.correctId = false;
    } catch (err) {
      showErrorMessage(err);
    }
    },
        methods:{
        async edit(){
            this.$router.push(`/photo/${this.photo.Id}/edit`);
        }
    }


}
</script>