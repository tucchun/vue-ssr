<template>
  <div id='app' class='container'>
    <blog-header class='header'/>
    <div class='main'>
      <div class='article'>
        <blog-article />
      </div>
      <div class='classify'>
        <blog-classify />
      </div>
    </div>
    <blog-footer />
  </div>
</template>
<script>
import 'lib/normalize.css/normalize.css'
import Header from '@/components/header'
import Article from '@/components/list'
import Footer from '@/components/footer'
import Classify from '@/components/classify'
export default {
  components: {
    BlogHeader: Header,
    BlogArticle: Article,
    BlogFooter: Footer,
    BlogClassify: Classify
  }
}
</script>
<style scoped>
  @import url(./common/styles/common.css);
  body {
    font: 14px '微软雅黑', Arial, Helvetica, sans-serif;
    background: #f1f1f1;
    background-attachment: fixed;
    color: #555;
  }
  img {
    border: 0;
    display: block;
  }
  ul,
  li {
    list-style: none;
  }
  /*默认链接颜色 */
  a {
    text-decoration: none;
    color: #555;
  }
  .clear:after {
    content: '.';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  /* .clear{*+height:1%;} */
  .f_l {
    float: left;
  }
  .f_r {
    float: right;
  }
.container {
  padding-top: 55px;
}
.header {
  position: fixed;
  top: 0;
  z-index: 9999;
}
.main {
  background-color: rgba(241, 239, 239, 0.973);
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
.article {
  border-radius: 5px;
  overflow: hidden;
  width: 68%;
}
.classify {
  width: 30%;
}
</style>
