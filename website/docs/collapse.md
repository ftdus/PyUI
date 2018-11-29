## Collapse 折叠面板


### 基础用法

可同时展开多个面板，面板之间不影响

:::demo 

```html
<py-collapse v-model="activeNames" @change="changeVlaue">
  <py-collapse-item title="灵感" identifier="1">
    <div>当万籁归于沉寂</div>
    <div>它悄悄地在我耳边呢喃</div>
    <div>告诉我它还有另一个</div>
    <div>我熟悉的名字叫灵感</div>
  </py-collapse-item>
  <py-collapse-item title="也曾路过这个城市" identifier="2">
    <div>我也曾路过这个城市，那个不再有人陪伴的孤独旅程，</div>
    <div>我仰起头45度望向天空，天空的那一边泪雨朦胧；</div>
    <div>我也曾路过这个城市，带着行李，踏着那抹清晨，</div>
    <div>我扶一扶眼镜，却再看不到那张熟悉的面孔，</div>
    <div>脑海中依旧泛滥着熟悉到令人陌生的背影……</div>
  </py-collapse-item>
</py-collapse>
<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
      };
    },
    methods: {
      changeVlaue(val) {
        console.log(val);
      },
    },
  };
</script>
```

:::


### 手风琴

每次只能展开一个

::: demo

```html
<py-collapse v-model="activeNames" @change="changeVlaue" accordion>
  <py-collapse-item title="匆匆过客" identifier="1">
    <div>这个世界，有多少人是别人生命中的匆匆过客</div>
    <div>这个世界，有多少人自己也是这样的匆匆过客</div>
    <div>每一个场景，每一个陌生的地方</div>
    <div>都会遇见一些人</div>
    <div>或许，此生再也不会相见</div>
    <div>有的人，成为了志同道合的朋友</div>
    <div>......</div>
    <div>匆匆岁月，匆匆过客</div>
    <div>值得铭记的人，屈指可数</div>
    <div>值得铭记的岁月，弹指一挥间</div>
  </py-collapse-item>
  <py-collapse-item title="阳光下的心语" identifier="2">
    <div>有阳光的地方 风的刚刚好</div>
    <div>戴上耳机 闭上眼睛 听听音乐</div>
    <div>让生命跟随音乐的节拍</div>
    <div>温柔的起伏</div>
  </py-collapse-item>
  <py-collapse-item title="站台" identifier="3">
    <div>晓色轻寒半月冷，水雾河面生。</div>
    <div>我走过的站台，是空旷的、是寂寞的</div>
    <div>拥抱、再见、相逢，一幕幕真情上演</div>
    <div>你总是在喧闹中等待静寂的你，又在寂静中等待喧闹的你</div>
    <div>温暖不过如你，凄凉不过如你 我走过的站台，是再见也是离别</div>
    <div>列车呼啸而过时的热闹很快又被列车带到远方</div>
    <div>随即期待与等候在静静的冷冷清清的站台延续</div>
  </py-collapse-item>
</py-collapse>
<script>
  export default {
    data() {
      return {
        activeNames: '1',
      };
    },
    methods: {
      changeVlaue(val) {
        console.log(val);
      },
    },
  };
</script>
```

:::

### 添加自定义图标

既可以在title属性里添加标题，又可在icon属性里添加图标，icon的内容为一个HTML标签，可以添加class来控制样式

:::demo

```html
<py-collapse v-model="activeNames">
    <py-collapse-item title="终南望余雪" icon="<i class='className'>$</i>" identifier="1">
        <h1>《终南望余雪》</h1>
        <p>唐代：祖咏</p>
        <div>终南阴岭秀，</div>
        <div>积雪浮云端。</div>
        <div>林表明霁色，</div>
        <div>城中增暮寒。</div>
    </py-collapse-item>
    <py-collapse-item title="虞美人" identifier="2">
        <h1>《虞美人》</h1>
        <p>南唐：李煜</p>
        <div>春花秋月何时了？往事知多少。</div>
        <div>小楼昨夜又东风，故国不堪回首月明中。</div>
        <div>雕栏玉砌应犹在，只是朱颜改。</div>
        <div>问君能有几多愁?恰似一江春水向东流。</div>
    </py-collapse-item>
    <py-collapse-item title="鹊桥仙" icon="<i class='pyui-icons py-icon-star-fill'></i>" identifier="3">
        <h1>《鹊桥仙》</h1>
        <p>宋代：秦观</p>
        <div>纤云弄巧，飞星传恨，银汉迢迢暗度。</div>
        <div>金风玉露一相逢，便胜却人间无数。</div>
        <div>柔情似水，佳期如梦，忍顾鹊桥归路！</div>
        <div>两情若是久长时，又岂在朝朝暮暮。</div>
    </py-collapse-item>
</py-collapse>
<script>
    export default {
        data() {
            return {
                activeNames: ['1'],
            };
        },
    }
</script>
```

:::

### Collapse attributes


| 参数       | 说明                                                                                 | 类型         | 默认值 |
|:----------:| ----------------------------------------------------------------------------------- | ------------ | ----- |
| accordion  | 是否是手风琴模式                                                                      | Boolean      | False
| value      | 当前激活面板的值，如果是手风琴模式，就只有一个值                                         | Array | -

### Collapse events

| 事件名称     | 说明                                                                               | 回调参数                   |
| ----------- | --------------------------------------------------------------------------------- | -------------------------- |
| change      | 面板改变时触发，如果是手风琴模式，参数activeNames，类型Array                          | activeNames: Array         |

### Collapse item attribute

| 参数        | 说明                                                                               | 类型           | 默认值 |
| ----------- | --------------------------------------------------------------------------------- | -------        | ------ |
| identifier  | 唯一标志符                                                                         | Number/String  | -
| title       | 面板标题                                                                           | String         | -
| icon        | 添加图标                                                                           | HTML           | -
