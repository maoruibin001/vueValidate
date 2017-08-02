<div>
    姓名：<input type="text" v-model="formData.name" ref="name">
    <hr>
    年龄：<input type="text" v-model="formData.age" ref="age">
    <br>
    <button @click="save">save</button>
    <cusTable :params="params"></cusTable>

    用过选择了：{{chooseData}} 个

    <style>
        .bg{
            background:green;
        }
    </style>
    <div id="app">
        <p v-bind:class="{bg:panduan}">{{message}}</p>
    </div>
    <script src="../js/vue.js"></script>
    <script>
        new Vue({
            el:'#app',
            data:{
                message:'hello world !',
                panduan:true,
                bsg:'bg'
            }
        })
            </script>
</div>