<template>
  <div id="text">
    <Scroll class="scroll" :scrollX="true">
      <div class="shop_raw_category">
        <ul>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>222</li>
          <li>1111</li>
          <li>22222</li>
          <li>1111</li>
          <li>2222</li>
          <li>2222</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>2222</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>2222</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>2222</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>

        </ul>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
export default {
  components: {
    Scroll
  }
}
</script>

<style scoped>
* {
  list-style: none;
  margin: 0;
  padding: 0;
}

.scroll {
  width: 200px;
  height: 40px;
  line-height: 1.08rem;
  overflow: hidden;
  font-size: 0.28rem;
  background-size: 100% 100%;
  margin-bottom: 0.05rem;
  position: relative;
  border: 0.2px solid black;
  margin: 200px 200px 200px;
  white-space: nowrap;
}
.shop_raw_category {
  display: inline-block;
}
.shop_raw_category > ul {
  border: 0.2px solid red;
}

.shop_raw_category > ul > li {
  display: inline-block;
  text-align: center;
  padding: 0rem 0.2rem;
}
</style>