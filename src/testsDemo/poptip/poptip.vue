<template>
  <div class="wrapper">
    <section class="display-container">
      <h3 class="title">基础用法</h3>
      <div>
        <py-poptip trigger="hover" title="Title" content="content">
          <py-button>Hover</py-button>
        </py-poptip>
        <py-poptip trigger="click" title="Title" content="content">
          <py-button>Click</py-button>
        </py-poptip>
      </div>
    </section>
    <section class="display-container">
      <h3>位置</h3>
      <div>
        <div class="top">
          <py-poptip trigger="hover" title="Title" content="content" placement="top-start">
            <py-button>Top Left</py-button>
          </py-poptip>
          <py-poptip trigger="hover" title="Title" content="content" placement="top">
            <py-button>Top Center</py-button>
          </py-poptip>
          <py-poptip trigger="hover" title="Title" content="content" placement="top-end">
            <py-button>Top Right</py-button>
          </py-poptip>
        </div>
        <div class="center">
          <div class="center-left">
            <py-poptip trigger="hover" title="Title" content="content" placement="left-start">
              <py-button>Left Top</py-button>
            </py-poptip>
            <br />
            <br />
            <py-poptip trigger="hover" title="Title" content="content" placement="left">
              <py-button>Left Center</py-button>
            </py-poptip>
            <br />
            <br />
            <py-poptip trigger="hover" title="Title" content="content" placement="left-end">
              <py-button>Left Right</py-button>
            </py-poptip>
          </div>
          <div class="center-right">
            <py-poptip trigger="hover" title="Title" content="content" placement="right-start">
              <py-button>Right Top</py-button>
            </py-poptip>
            <br />
            <br />
            <py-poptip trigger="hover" title="Title" content="content" placement="right">
              <py-button>Right Center</py-button>
            </py-poptip>
            <br />
            <br />
            <py-poptip trigger="hover" title="Title" content="content" placement="right-end">
              <py-button>Right Bottom</py-button>
            </py-poptip>
          </div>
        </div>
        <div class="bottom">
          <py-poptip trigger="hover" title="Title" content="content" placement="bottom-start">
            <py-button>Bottom Left</py-button>
          </py-poptip>
          <py-poptip trigger="hover" title="Title" content="content" placement="bottom">
            <py-button>Bottom Center</py-button>
          </py-poptip>
          <py-poptip trigger="hover" title="Title" content="content" placement="bottom-end">
            <py-button>Bottom Right</py-button>
          </py-poptip>
        </div>
      </div>
    </section>
    <section class="display-container">
      <h3 class="title">长文本</h3>
      <div>
        <py-poptip
          trigger="hover"
          word-wrap
          width="200"
          content="Steven Paul Jobs was an American
          entrepreneur and business magnate. He was the chairman,
          chief executive officer, and a co-founder of Apple Inc."
        >
          <py-button>Hover</py-button>
        </py-poptip>
      </div>
    </section>
    <section class="display-container">
      <h3 class="title">confirm弹框</h3>
      <div>
        <py-poptip
          confirm
          title="Are you sure you want to delete this item?"
          @on-ok="ok"
          @on-cancel="cancel"
        >
          <py-button>confirm</py-button>
        </py-poptip>
      </div>
    </section>
  </div>
</template>

<script>
import PyPoptip from '../../components/poptip';
import PyButton from '../../components/button';

export default {
  components: {
    PyPoptip,
    PyButton,
  },
  methods: {
    ok() {},
    cancel() {},
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  padding: 100px;
  .display-container {
    display: flex;
    margin: 20px 0;
    .title {
      margin: 10px 0;
    }
    .top,
    .bottom {
      text-align: center;
    }
    .center {
      width: 300px;
      margin: 10px auto;
      overflow: hidden;
    }
    .center-left {
      float: left;
    }
    .center-right {
      float: right;
    }
  }
}
</style>
