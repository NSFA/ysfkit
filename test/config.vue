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
     * @path  ./docs/test.html                  - 测试文件
     * @param {String} template                 - 容器模板
     * @param {String} filepath                 - 组件打包后文件相对路径
     * @param {Object} components               - 组件组合 {key : scope}
     */
    global.TestConfig = {
        template : `<div>
                        <tooltip placement="right">
                            <h1>It's a title</h1>
                            <div slot="content">It's a content!</div>
                        </tooltip>
                    </div>`,
        components:{
            tooltip : 'Tooltip'
        },
        filepath : './tooltip.js'

    }
</script>
