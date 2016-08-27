<template>
<div class="m-kit">
    <input class="tlt" v-model="name">
    <p class="cnt">{{name}}</p>
</div>
</template>


<json>
data: function () {
    return {
        name : 1
    }
},
methods: {
    run : function(){

    }
}
</json>
