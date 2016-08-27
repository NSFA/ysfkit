# 七鱼代码自动化发布工具

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


    <script>
        var App = {
            data: function () {
                return {
                    name : 1
                }
            },
            methods: {
                run : function(){

                }
            }
        };
    </script>

```
> 注: 其余配置信息回去解析 **package.json** 文件, 如果需要加载样式文件, 请在 **package.json** 中
添加 `componentStyle` 配置属性, 值为全量地址。


## 栗子

![七鱼代码自动化发布工具](./res/ysfkit.gif)
