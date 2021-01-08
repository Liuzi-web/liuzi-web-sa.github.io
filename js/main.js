require.config({
    paths:{
        getEl:"./js/conmon/getEl",
        popup:"./js/app/popup",
        data:"./js/mock/data"
    }
})

require(["getEl","popup"],function(getEl,popup){
    new popup({
        box:getEl.get(".box"),
        ulf:getEl.get(".ulf"),
        shade:getEl.get(".shade"),//遮罩
        spn:getEl.get(".spn"),//分页1/4
        left:getEl.get(".left"),
        right:getEl.get(".right"),
        index:0
    })
})