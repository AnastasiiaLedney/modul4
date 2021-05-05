<template>
<div class="photoVue"  text-align: center>
 <h2 class="StudentName">Привіт, мене звуть {{photo.StudentName}}</h2>
 <p class="Speciality">Моя Спеціальність {{photo.Speciality}}</p>
  
  <p class="Variant"> Мій варіант: {{photo.Variant}}</p>

 </div>


</template>

<script>
export default
{
  name:"App",
  data()
  { return{
    photo:{
      StudentName:"Ледней Анастасія Михайлівна",
      Speciality:"Прикладна математика",
      
      Variant:4
    }
  }
  }

}
</script>

<style scoped>
.StudentName{
  font-family:"Courier New";
     font-size: 30px;
     color:  #F7F1CB;
  
}
.Speciality{
  font-family: "Courier New";
     font-size: 20px;
     color:  #F7F1CB;
}
.photoVue{
position: absolute;
border-radius: 10px 60px 30px;
width: 400px;
height: 300px;
position: relative;
background: #8aa9db;
text-align: center;
 margin: auto;

}
.Course{
 font-family: "Courier New";
     font-size: 20px;
     color:  #F7F1CB;
}
.Variant{
  font-family: "Courier New";
     font-size: 20px;
    color: #F7F1CB;
}

</style>