const observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
        console.log(e)
        if( e.isIntersecting){
            e.target.classList.add("show")
        }
        else{
            e.target.classList.remove("show")
        }
        })
}) 


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el))