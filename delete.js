const deleteBtn = document.querySelectorAll("#deleteBtn");
const coverBox = document.querySelector(".coverBox");
const closeBtn = document.querySelector("#close");
const cancelBtn = document.querySelector("#cancel");
const yesBtn = document.querySelector("#yes");
var i = 0;

//点击删除使删除框出现
for(i=0;i<deleteBtn.length;i++){
    deleteBtn[i].addEventListener('click', () => {
        coverBox.style.display = "block";
    })
}
//点击X和取消，确认使删除框消失
closeBtn.addEventListener('click', () => {
    coverBox.style.display = "none";
})
cancelBtn.addEventListener('click', () => {
    coverBox.style.display = "none";
})
yesBtn.addEventListener('click', () => {
    coverBox.style.display = "none";
})

//如果表格内容为空，跳转到新建问卷界面
function checkTable(){
    console.log(document.getElementById("list").rows.length);
    if(document.getElementById("list").rows.length == 2){
        window.location.href="add.html";
    }
}

//获取删除的节点
function getDelete(x){
    deleteRow = x;
}
//删除操作
function yesDelete(){
    //不是全选按钮的情况
    if (deleteRow.getAttribute('class') == 'table-btn') {
        //直接删除
        deleteRow.parentNode.parentNode.remove();
    }
    //是多选按钮的情况
    if (deleteRow.getAttribute('class') == 'delete-btn') {
        var deleteList = document.getElementsByName("sel");

        //循环删除
        for(var i = 0;i<deleteList.length;){
            //如果被选中，删除
            if(deleteList[i].checked){
                deleteRows = deleteList[i].parentNode.parentNode;
                deleteRows.remove();
            } else{
                i++;//没有被选中就跳过
            }
        }
    }

    //要是删完了就跳转
    checkTable();
}
