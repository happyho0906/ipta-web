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
        content="【演講】05/28 從腦科學看藝術 (Art and the Brain: A Glimpse of Neuroaesthetics) 講題：從腦科學看藝術 Art and the Brain: A Gli…"
      />
      <NewsBlock
        imgName="banner1.png"
        content="【科藝專題講座】從藝術創造到行為設計 (2018.10.01) 演講者：曾元琦 副教授 時 間：10/01 (Mon.) 15:30pm…"
      />
      <NewsBlock
        imgName="banner3.jpg"
        content="北京清華「城市創變客 (City ChangeMaker) 暑期工作營 – 徵選工作坊主辦單位：北京清華大學港澳台辦公室 徵選單位：本校清華學院 執行…"
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