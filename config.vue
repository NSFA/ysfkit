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
    /**
     * 测试文件生成配置
     *
     * 优先解析这个配置文件, 如果没有此配置项, 则解析 webpack.conf.js 文件
     *
     * @path  ./docs/test.html              - 测试文件
     * @param {String} name                 - 组件命名空间
     * @param {String} filepath             - 组件打包后文件相对路径
     * @param {String} template             - 外层模板
     */
    global.TestConfig = {
        components:{
            tooltip : 'Tooltip'
        },
        template : `<div>
                        <tooltip placement="right">
                            <h1>It's a title</h1>
                            <div slot="content">It's a content!</div>
                        </tooltip>
                    </div>`,
        filepath : './tooltip.js'
    }
</script>
