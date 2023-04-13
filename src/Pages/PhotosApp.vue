<template>
    <div>
        <h1 class="m-5 text-center">Photos</h1>
        <div class="row">
            <div class="col-md-4 mx-auto m-4 ">
                <select class="form-control" @change="(e)=>handleChange(e)">
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                </select>

            </div>
        </div>
      <ul>
        <li v-for="(item, index) in photos" :key="index" >
            <img class="m-2 mx-auto" :src="item.url" alt="photos" width="300" height="300"> 
            <strong class="d-block m-3">{{ item.title }}</strong>
        </li>
      </ul>
      <div class="row">
        <div class="col-md-4 m-5 mx-auto">
            <button class="btn m-2 btn-danger" @click="prevClick">Prev</button>
            <span>{{ pagination }}</span>
            <button class="btn m-2 btn-success" @click="nextClick">Next</button>
        </div>
       </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
const photos = ref([])
const pagination = ref(1)
const count = ref(8)
const getPhotos = () =>{
    axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${pagination.value}&_limit=${count.value}`).then((res) =>{
        console.log(res.data);
        photos.value = res.data
    })
}
getPhotos()
const handleChange=(e)=>{
    count.value = e.target.value
    getPhotos()
}
const nextClick=()=>{
  pagination.value++
  getPhotos()
}
const prevClick=()=>{
    if(pagination.value !==1){
        pagination.value--
        getPhotos()
    }
}
</script>

<style  scoped>
   ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 30px;
    flex-wrap: wrap;
   }
   li{
    text-align: center;
    width: 320px;
    border-radius: 5px;
    background-color: antiquewhite;
   }
</style>