<div>
    姓名：<input type="text" v-model="formData.name" ref="name">
    <hr>
    年龄：<input type="text" v-model="formData.age" ref="age">
    <br>
    <button @click="save">save</button>
    <cusTable :params="params"></cusTable>

    用过选择了：{{chooseData}} 个
</div>