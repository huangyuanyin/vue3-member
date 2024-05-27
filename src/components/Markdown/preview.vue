<template>
  <!-- templete -->
  <mavon-editor
    ref="docDetaileNode"
    v-model="docTxt"
    :subfield="false"
    :editable="false"
    :ishljs="true"
    style="height: 100%; background: #fff"
    box-shadow-style="0 0 0 0 rgba(0,0,0,0)"
    default-open="preview"
    :toolbars-flag="false"
  />
</template>

<script>
export default {
  name: 'demo',
  components: {},
  props: {
    docTxt: {
      type: String,
      default: '暂无内容',
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.v-note-wrapper {
  max-height: 65vh !important;
  /*透明背景色 */
  background: transparent !important;
}

.v-show-content {
  background: transparent !important;
}

/* 隐藏滚动条 */
.v-show-content::-webkit-scrollbar {
  display: none !important;
}
</style>
