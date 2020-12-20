<template>
  <div class="latestNews">
    <div class="titleRow">
      <div class="text">
        <span class="title">院學士班最新消息</span>
        <span class="secondTitle">新消息，看這裡！</span>
      </div>
    </div>
    <div class="newsBlocks">
      <NewsBlock
        imgName="banner2.jpg"
        content="【獲獎】2020春之清華 – 藝術卓越獎 科技藝術類 得獎名單…"
      />
      <NewsBlock
        imgName="banner1.png"
        content="【獲獎】《那顆Ｇ1咻！》國立清華大學藝術學院學士班第一屆系展 得獎名單..."
      />
      <NewsBlock
        imgName="banner3.jpg"
        content="【獲獎】2020藝術學院學士班春之清華獎學金 獲獎名單 109學年度藝術學院學士班 【春之清華獎學金】 ★★★ 獲獎…"
      />
    </div>
    <div class="decorationImg">

    </div>
  </div>
</template>

<script>
import NewsBlock from "./NewsBlock.vue";

export default {
  name: "Home",
  components: {
    NewsBlock,
  },
};
</script>