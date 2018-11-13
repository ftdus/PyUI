## Upload 文件上传

通过点击或者拖拽上传文件

### 点击多选上传

:::demo 通过 slot 你可以传入自定义的上传按钮类型和文字提示，multiple允许多选，v-model 双向绑定已上传的图片列表

```html
<py-upload
    action='//jsonplaceholder.typicode.com/posts/'
    multiple
    v-model='defaultFileList'>
    <py-button type="primary">
        <i class="iconfont  icon-addition"></i>
        上传文件
    </py-button>
</py-upload>
<script>
export default {
    data () {
        return {
            defaultFileList: [
                {
                name: '123.jpg',
                url: 'http://newimg88.b0.upaiyun.com/newimg88/2014/08/repaints-reflows.jpg',
                },
            ]
        }
    }
}
</script>
```
:::

### 点击或拖拽上传

:::demo 设置type='drap'为拖拽上传

```html
<py-upload
    action='//jsonplaceholder.typicode.com/posts/'
    multiple type='drap'
    v-model='defaultFileList2'>
    <py-button>
        <i class="iconfont  icon-addition"></i>
        点击或拖拽上传
    </py-button>
</py-upload>
<script>
export default {
    data () {
        return {
            defaultFileList2: [
                {
                name: '123.jpg',
                url: 'http://newimg88.b0.upaiyun.com/newimg88/2014/08/repaints-reflows.jpg',
                },
            ]
        }
    }
}
</script>
```

::: 

### Attributes

| 参数            | 说明                                       | 类型           | 可选值 | 默认值 |
| ----------     | ------------------------------------------ | ---------------| ------ | ------ |
| type           | 上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）   |string  | selec,drag      | select |
| accept         | 上传的<a style='color:#ff9800' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept'>文件类型</a>  | string |   |  - |
| maxSize        | 允许上传的文件大小单位 kb                    | Number         | -      | -     |
| action         | 必填，上传文件路径                           | string         | -      | -     |
| value          | 默认已上传的文件列表                         | Array          | -      | []    |
| format         | 允许上传的文件后缀                           | Array          | -      | []    |
| multiple       | 是否多选                                    | boolean        | true,false     | false  |
| headers        | 设置上传的请求头部                           | string         | -      | -     |
| withCredentials| 支持发送 cookie 凭证信息                     | boolean        | true,false     | false  |
| name           | 上传的文件字段名                             | string         | -      | file  |
| onProgress     | 文件正在上传中钩子，返回 `event`, `file`, `fileList`           | Function       | -      | -  |
| onSuccess      | 文件上传成功后钩子，返回`res`,`file`,`fileList`                | Function       | -      | -  |
| onError        | 文件上传失败后钩子，返回`err`,`file`,`fileList`                | Function       | -      | -  |
| onSizeErr      | 超过指定文件大小失败钩子，返回`file`,`fileList`                | Function       | -      | -  |
| onFormatErr    | 验证文件后缀格式失败钩子，返回`file`,`fileList`                | Function       | -      | -  |
| beforeSelect   | 选择文件后的钩子，返回false会停止上传返回,参数`file`,`fileList` | Function       | -      | -  |
| onBeforeUpload | 上传文件之前钩子，返回false 或者 Promise 则停止上传             | Function       | -      | -  |
| onbeforeRemove  | 点击删除文件之前钩子，返回false可以阻止删除，返回`file`,`index`,`fileList`       | Function    | -   | -  |

### Events

| 事件名称    | 说明                                       | 类型          |
| ---------- | ------------------------------------------ | --------------|
| on-remove  | 移除文件，返回`file`,`fileList`             | Function      |