let DocumentTitle = document.getElementById('docTitle'); 

window.addEventListener('blur' , ()=>{
    DocumentTitle.innerHTML = "Come Soon 😭";
})
window.addEventListener('focus' , ()=>{
    DocumentTitle.innerHTML = '@WebDev';
})

function btn_clicked(btn_id){
    alert("This button is currently in progress")
}



function follow_on_insta(){
    window.open("https://www.instagram.com","_blank")
}
function open_projects(project_id){
    if(project_id == "Memo_AI"){
        window.open("https://www.topfan.com/","_blank")
    }
    else if(project_id =="paint_app"){
        window.open("https://customer-dev.pdslkenya.com/","_blank")
    }
    else if(project_id == "FShare"){
        window.open("https://f-share.netlify.app/","_blank")
    }
}

function open_platforms(platform_id){
    if(platform_id == "leet_code"){
        window.open("https://leetcode.com/u/sufiyaniqbal2103/","_blank");
    }
    // else if(platform_id == "gfg"){
    //     window.open("https://auth.geeksforgeeks.org/user/vishalsharmatm","_blank");
    // }
    // else if(platform_id == "hrank"){
    //     window.open("https://www.hackerrank.com/profile/vishalsharma1511","_blank");
    // }else if(platform_id == 'github'){
    //     window.open("https://github.com/1234vishalsharma/","_blank");
    // }
}

function download_resume(){
    // to be implemented
    alert("Press Ok to download resume");
        try{
            window.location.href = "Resume/sufiyan_resume-1 (2) (1) (1).pdf";
         }catch(e){}
}

function showMenu(){
    let menu = document.querySelector(".menu_header");
    menu.classList.toggle("show_menu");
}