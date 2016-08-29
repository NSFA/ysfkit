# 七鱼组件代码自动化发布工具

## 命令安装
> sudo npm install ysfkit -g


## 命令启动
> ysfkit -h   ## 帮助命令

-----
> ysfkit -c config.vue    ## 初始化命令


```javascript
  Usage:  ysfkit [options...]

  Options:
    -c,--config   配置文件
    -t,--test     测试文件
    -h,--help     帮助列表
```

## 配置文件(config.vue)

```html

    <template>
        <div class="m-kit">
            <input class="tlt" v-model="name">
            <p class="cnt">{{name}}</p>
        </div>
    </template>


    <component>

    data: function () {
        return {
            name : 1
        }
    },
    methods: {
        run : function(){

        }
    }

    </component>

    <script>
        global.TestConfig = {
            name : 'Tooltip',
            filepath : './tooltip.js',
            tplpath: './src/tooltip.html'
        }
    </script>

```
> 注: 其余配置信息回去解析 **package.json** 文件, 如果需要加载样式文件, 请在 **package.json** 中
添加 `componentStyle` 配置属性, 值为全量地址。

## webpack配置文件规范

```javascript
    module.exports =  {
        entry: "./src/tooltip.js",
        output: {
            path: "./docs",         // 输出目录
            filename: "tooltip.js", // 输出文件
    		library : 'Tooltip'     // 命名空间规范
        },
        resolve:{
            extensions: ['', '.js']
        },
        module: {
            loaders: [
                {test: /\.html/, exclude : /node_modules/, loader: 'html'},
    			{test: /\.scss$/, exclude : /node_modules/, loader: "style!css!sass" }
            ]
        }
    };
```

> 注意 **webpack.config.js** 文件的 `path` 又原先 `dist` 改为 `docs`

## 栗子

![七鱼组件代码自动化发布工具](./res/ysfkit.gif)
