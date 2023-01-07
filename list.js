//-----------------页面跳转------------------
function skip(address){
    //前往增加问卷页
    if(address == 111){
        window.location.href="add.html";
    }
    //前往查看数据页
    if(address == 222){
        window.location.href="viewData.html";
    }
    //前往编辑问卷页
    if(address == 333){
        window.location.href="edit.html";
    }
    //前往填写问卷页
    if(address == 444){
        window.location.href="write.html";
    }
}
//-------------------------------------------------------

//------------------选择框判断---------------------------
//全选
function selAll(){
    var checkAll = document.getElementsByName("selAll");
    var check = document.getElementsByName("sel");

    //如果选中全选按钮，全部按键选择
    if(checkAll[0].checked)
    {
        for(var i=0;i<check.length;i++){
            check[i].checked  = true;
        }
    }

    else{
        for(var i=0;i<check.length;i++){
            check[i].checked  = false;
        }
    }
}
//选中所有单选框，自动选中全选框
function sel(){
    var checkAll = document.getElementsByName("selAll");
	var check = document.getElementsByName("sel");
	var i = 0;
	for(;i<check.length;i++)
	{
		if(check[i].checked==false)
		{
			checkAll[0].checked = false;
			break;
		}
	}
	if(i==check.length)
	{
		checkAll[0].checked = true;
	}
}
//---------------------------------------------------------------