<style lang="sass">
  .page-component {
    padding-bottom: 95px;
  }
  .page-component {

        table {
          border-collapse: collapse;
          width: 100%;
          background-color: #fff;
          color: #5e6d82;
          font-size: 14px;
          margin-bottom: 45px;

          strong {
            font-weight: normal;
          }
          th {
            text-align: left;
            border-top: 1px solid #eaeefb;
            background-color: #EFF2F7;
          }
          td, th {
            border-bottom: 1px solid #eaeefb;
            padding: 10px;
          }
          th:first-child, td:first-child {
            padding-left: 10px;
          }
        }
  }
</style>
<template>
  <div class="page-container page-component">
    <div class="g-row">
      <div class="g-col g-col-24">
        <markdown></markdown>
      </div>
    </div>
  </div>
</template>

<script>
    import markdown from '../markdown.md';

    export default {
        components : {
            markdown
        }
    }
</script>