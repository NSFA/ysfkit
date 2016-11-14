<script>
  export default {
    data() {
      return {
        isLoading: false,
        isLoading2: false
      };
    },
    methods: {
      handleClick(event) {
        console.log(event);
        alert('button clicked!');
      }
    },
    mounted() {
      
    }
  }
</script>
<style>
  .demo-box.demo-button {
    .el-row {
      margin-bottom: 10px;
    }
    .button + .button {
      margin-left: 10px;
    }
    .button-group {
      margin-bottom: 20px;

      .button + .button {
        margin-left: 0;
      }

      & + .button-group {
        margin-left: 10px;
      }
    }
  }

  .demo-box.demo-button .intro-block {
    padding: 0;
  }

  .demo-button .intro-block .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: solid 1px #EFF2F6;
    &:last-child {
      border-bottom: none;
    }
  }

  .demo-button .intro-block .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }

  .demo-button .intro-block .wrapper {
    float: right;
    margin-right: 20px;
  }
</style>

## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::ysfdoc Button 组件默认提供7种主题，由`type`属性来定义，默认为`default`。

```html
<button>默认按钮</button>
<button type="primary">主要按钮</button>
<button type="text">文字按钮</button>
```
:::

### 禁用状态

按钮不可用状态。

:::ysfdoc 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<button :plain="true" :disabled="true">主要按钮</button>
<button type="primary" :disabled="true">主要按钮</button>
<button type="text" :disabled="true">文字按钮</button>
```
:::

### 有颜色倾向

不同的颜色倾向代表不同的提示

:::ysfdoc 朴素按钮同样设置了不同的`type`属性对应的样式（可选值同上），默认为`info`。设置`plain`属性，它接受一个`Boolean`。注意，在该情况下，`type`虽然可以为`text`，但是是没有意义的，会显示为`text button`的样式。

```html
<div class="block">
  <span class="demonstration">默认显示颜色</span>
  <span class="wrapper">
    <button type="success">成功按钮</button>
    <button type="warning">警告按钮</button>
    <button type="danger">危险按钮</button>
    <button type="info">信息按钮</button>
  </span>
</div>
<div class="block">
  <span class="demonstration">hover 显示颜色</span>
  <span class="wrapper">
    <button :plain="true" type="success">成功按钮</button>
    <button :plain="true" type="warning">警告按钮</button>
    <button :plain="true" type="danger">危险按钮</button>
    <button :plain="true" type="info">信息按钮</button>
  </span>
</div>
```
:::

### 图标按钮

带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。

:::ysfdoc 设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<button type="primary" icon="edit"></button>
<button type="primary" icon="share"></button>
<button type="primary" icon="delete"></button>
<button type="primary" icon="search">搜索</button>
<button type="primary">上传<i class="el-icon-upload el-icon--right"></i></button>
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::ysfdoc 使用`<button-group>`标签来嵌套你的按钮。

```html
<button-group>
  <button type="primary" icon="arrow-left">上一页</button>
  <button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></button>
</button-group>
<button-group>
  <button type="primary" icon="edit"></button>
  <button type="primary" icon="share"></button>
  <button type="primary" icon="delete"></button>
</button-group>
```
:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::ysfdoc 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<button type="primary" :loading="true">加载中</button>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::ysfdoc 额外的尺寸：`large`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<button type="primary" size="large">大型按钮</button>
<button type="primary">正常按钮</button>
<button type="primary" size="small">小型按钮</button>
<button type="primary" size="mini">超小按钮</button>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large,small,mini            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info,text |     —    |
| plain     | 是否朴素按钮   | Boolean    | true,false | false   |
| disabled  | 禁用    | boolean   | true, false   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button,submit,reset | button |
