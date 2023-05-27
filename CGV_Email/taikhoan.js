function CheckEmail(s) {
    let flag = true;
    let a=s.split(""); //Tách một chuỗi thành một mảng các chuỗi con
    for(let i=0;i<a.length;i++){
        if(a[i]==" "){ // kiem tra khoang trang
            flag=false;
            return flag;
        }
    }
    a=s.split("@");
    if(a.length!=2){
        flag=false;
        return flag;
    }
    else{
        a=a.join("@");//Chuyển đổi các phần tử của một mảng thành một chuỗi
    }//kiem tra @
    let b=s.split(".")
    for(let j=0 ;j < b.length; j++){
        if (b[j]=="") {
            flag = false
            return flag;
        }
    }
    if(b.length<2){
        flag = false
        return flag;   
    }else{
        c=b.join(".")
    }
    return flag;
}
function CheckPass(pass) {
    if (pass.length<6) 
    return 0;
else{
    let flag = false;
    for (let i = 0; i < pass.length; i++) {
        if(pass.charCodeAt(i)>=65&&pass.charCodeAt(i)<=90){
            flag = true;
            break;
        }
    }
    if (flag)
        return 1;
    else 
        return 0;
}
}

function CreateAccount() {
    let email = document.getElementById("signup-email").value;
    let pass =document.getElementById("signup-password").value;
    if(CheckEmail(email)){
        if(CheckPass(pass)){alert("Đăng nhập hợp lệ");
        }else
            alert("password sai");
    }
    else
    alert("email sai");
}
