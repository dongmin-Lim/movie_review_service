<script setup lang="ts">
import {
  computed,
  onBeforeMount,
  onUpdated,
  watch,
  watchEffect,
} from "@vue/runtime-core";
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import NavBar from "../../components/common/Navbar.vue";
import MovieData from "./interface/MovieData";

// 영화 데이터를 불러오는 함수
const getMovieDatas = async (keyword: string) => {
  const result: MovieData[] = (
    await axios(`http://localhost:5000/movies/search`, {
      params: { keyword },
    })
  ).data.data;
  console.log("key: ", keyword);
  return result;
};

const route = useRoute();
const keyword = ref<string>(route.query.keyword as string);
const movieDatas = ref<MovieData[]>([]);

onBeforeMount(async () => {
  keyword.value = route.query.keyword as string;
  const result = await getMovieDatas(keyword.value);
  movieDatas.value = result;
  console.log("beforeMount: ", keyword.value);
});

onUpdated(async () => {
  console.log(route.query);
  keyword.value = route.query.keyword as string;
});

watch(keyword, async () => {
  movieDatas.value = await getMovieDatas(keyword.value);
});
</script>

<template>
  <div class="about">
    <NavBar />
    <h1>This is an about page</h1>
    <div id="moviesTable">
      <div v-for="(movie, index) in movieDatas" :key="index">
        <h2>{{ movie.title }}</h2>
        <img alt="영화 이미지" v-bind:src="movie.poster_url" />
      </div>
    </div>
    <h2>hello</h2>
  </div>
</template>

<style scoped>
#moviesTable {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>
