const iconCircle = document.querySelectorAll(".icon_circle");
const descriptionElement = document.querySelector(".faq__description");



iconCircle.forEach((icon)=>{
    icon.addEventListener("click",(e)=>{
        let iconName = icon.getAttribute("name");
        if(iconName==='remove-circle') {
            icon.setAttribute("name","add-circle");
            icon.classList.add("add_circle");
            let descriptionElementClassName = icon.parentElement.nextElementSibling.classList.contains("show");
            if(descriptionElementClassName){
                icon.parentElement.nextElementSibling.classList.remove("show");
            }
            icon.parentElement.nextElementSibling.classList.add("hidden");
        } 
        else {
            icon.setAttribute("name","remove-circle");
            icon.classList.remove("add_circle");
            let descriptionElementClassName = icon.parentElement.nextElementSibling.classList.contains("hidden");
            if(descriptionElementClassName){
                icon.parentElement.nextElementSibling.classList.remove("hidden");
            }
            icon.parentElement.nextElementSibling.classList.add("show");
        }
       
    })
})

