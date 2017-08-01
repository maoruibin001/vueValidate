<table border="1" v-if="params.show" id="myTable">
    <tr>
        <th v-show="params.hasSerial">序号</th>
        <th v-for="(caption,capIndex) in params.captionList">{{caption.value}}</th>
    </tr>
    <tr v-for="(item,index) in params.list">
        <td v-show="params.hasSerial">
            <input @click="chooseItem(item)" type="checkbox" name="name" v-if="params.isCheckBox">
            <input @click="chooseItem(item)" type="radio" name="name" v-if="!params.isCheckBox">
        </td>
        <td v-for="caption in params.captionList">{{item[caption.name]}}</td>
    </tr>
    <tr align="center">
        <td><button @click="iButton.cb(activeItems)" v-for="iButton in params.buttonList">{{iButton.name}}</button></td>

    </tr>
</table>