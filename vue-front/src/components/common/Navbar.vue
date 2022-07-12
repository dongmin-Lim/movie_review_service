<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";

const bookTitle = ref("");

async function clickHandler(e: Event) {
  e.preventDefault();
  console.log("inputvalue: ", bookTitle.value);
  const keyword = bookTitle.value;
  router.push({ path: "/about", query: { keyword } });
}
</script>

<template>
  <div id="navTemplate">
    <div id="searchBar">
      <form>
        <input
          type="text"
          placeholder="검색 단어를 입력하세요"
          v-model="bookTitle"
        />
        <button @click="clickHandler">Click</button>
      </form>
    </div>

    <div id="navInfo">
      <div>
        <h3><a href="#">랭킹</a></h3>
      </div>
      <div v-if="true">
        <h3>로그인</h3>
      </div>
      <div v-else>
        <h3>로그아웃</h3>
      </div>
      <div>
        <h3>마이페이지</h3>
      </div>
    </div>
  </div>
</template>
