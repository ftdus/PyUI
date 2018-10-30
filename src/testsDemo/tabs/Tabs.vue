<template>
  <div class="page">
    <h2>基础用法</h2>
    <section>
      <py-tabs v-model="show1">
        <py-tab-pane label="标签一" name="label1">标签一内容</py-tab-pane>
        <py-tab-pane label="标签二" name="label2">标签二内容</py-tab-pane>
        <py-tab-pane label="标签三" name="label3">标签三内容</py-tab-pane>
      </py-tabs>
    </section>

    <h2>选项卡用法</h2>
    <section>
      <py-tabs v-model="show2" type="tab">
        <py-tab-pane label="标签一" name="label1">标签一内容</py-tab-pane>
        <py-tab-pane label="标签二" name="label2">标签二内容</py-tab-pane>
        <py-tab-pane label="标签三" name="label3">标签三内容</py-tab-pane>
      </py-tabs>
    </section>

    <h2>卡片化用法</h2>
    <section>
      <py-tabs v-model="show3" type="card">
        <py-tab-pane label="标签一" name="label1">标签一内容</py-tab-pane>
        <py-tab-pane label="标签二" name="label2">标签二内容</py-tab-pane>
        <py-tab-pane label="标签三" name="label3">标签三内容</py-tab-pane>
      </py-tabs>
    </section>

    <h2>卡片化用法</h2>
    <button @click="addPane">添加</button>
    <section>
      <py-tabs v-model="show4" type="card" closable @remove="removeTab">
        <py-tab-pane
        v-for="(pane, index) in tabsData4" :key="index"
        :label="pane.label"
        :name="pane.name">
        {{pane.content}}
        </py-tab-pane>
      </py-tabs>
    </section>
  </div>
</template>

<script>
import PyTabs from '@/components/tabs';
import PyTabPane from '@/components/tab-pane';

export default {
  components: {
    'py-tabs': PyTabs,
    'py-tab-pane': PyTabPane,
  },
  data() {
    return {
      show1: 'label2',
      show2: 'label1',
      show3: 'label3',
      show4: 'label1',
      tabsData4: [
        {
          label: '标签一',
          name: 'label1',
          content: '标签一内容',
        },
        {
          label: '标签二',
          name: 'label2',
          content: '标签二内容',
        },
        {
          label: '标签三',
          name: 'label3',
          content: '标签三内容',
        },
      ],
    };
  },
  methods: {
    addPane() {
      const label = `新标签${this.tabsData4.length + 1}`;
      const name = `newTab${this.tabsData4.length + 1}`;
      this.tabsData4.push({
        label,
        name,
        content: `新标签${this.tabsData4.length + 1}内容`,
      });
    },
    removeTab(index) {
      this.tabsData4.splice(index, 1);
      console.log(this.tabsData4);
    },
  },
};
</script>


<style lang="scss" scoped>
.page {
  padding: 20px;
  h2 {
    margin-bottom: 10px;
  }
  section {
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #dcdfe6;
  }
  button {
    padding: 4px 10px;
    border: 1px solid #f1f1f1;
    margin-bottom: 10px;
    cursor: pointer;
  }
}
</style>
