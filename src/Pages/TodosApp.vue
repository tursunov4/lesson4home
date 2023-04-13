<template>
    <div class="container">
        
        <h1 class="text-center mb-5">Todos</h1>
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
       <ul class="list">
        <li v-for="(item , index) in posts" :key="index">
          <span class="text-center d-block mb-3 ">{{ index +1 }}</span>
          <strong>{{ item.title }}</strong>
           <div>
            <label >
                <span>Open bujedga ovoz berganmi</span>
                <input class="m-2" :checked="item.completed" type="checkbox">
              </label>
           </div>
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
 const posts = ref([])
 const count = ref(8)
 const pagination = ref(1)
const getPosts = ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${pagination.value}&_limit=${count.value}`).then((res)=>{
        posts.value=res.data
    })
}
const handleChange=(e)=>{
    count.value = e.target.value
    getPosts()
}
getPosts()
const nextClick=()=>{
  pagination.value++
  getPosts()
}
const prevClick=()=>{
    if(pagination.value !==1){
        pagination.value--
        getPosts()
    }
}
</script>

<style  scoped>
  .list{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 40px;
    flex-wrap: wrap;
    list-style: none;
  }
  .list > li{
    border: 1px solid;
    border-radius: 8px;
    background-color: azure;
    padding: 20px;
    width: 400px;
  }
  span{
    font: 400;
    font-size: large;
    color: blue;
  }
</style>