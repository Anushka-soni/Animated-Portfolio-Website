var tl = gsap.timeline();
const scroll = new LocomotiveScroll({
    el: document.querySelector("#home"),
    smooth:true,
    lerp:0.075
})
const scrolled = new LocomotiveScroll({
    el: document.querySelector("#intro"),
    smooth:true,
    lerp:0.075
})
const scroller = new LocomotiveScroll({
    el: document.querySelector("#work"),
    smooth:true,
    lerp:0.1,

})

// MOUSE FOLlOWER
function coordinate(event) {
    let x = event.clientX;
    let y = event.clientY;
    var dot = document.querySelector(".mouse-follower") ;
    dot.style.left= x+'px';
    dot.style.top=y+'px';

}
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);

tl.from("nav",{
    y:-100,
    duration:0.5,
    // delay:0.5
}
)
tl.from(".body h1",{
    y:-600,
    duration:1
})
tl.from(".body p",{
    y:-100,
    // delay:1,
    stagger:0.15,
    duration:0.5,
    repeat:-1,
    repeatDelay:3
})
tl.from(".body h2",{
    y:200,
    
})

gsap.to(".logo h1",{
    rotationX:360, 
    ease:Linear.easeNone, 
    repeat:-1,
    repeatDelay:10,
    duration:0.75
})

var menu_btn = document.querySelector(".link-container h1")
var flip= 0
menu_btn.addEventListener("mouseenter",()=>{
    gsap.to('.link-container h1',{
        rotationX:360,
        
    })
})


gsap.from(".name",{
    scrollTrigger:".intro",
    x:-800,
    duration:1,
})
gsap.from(".about",{
    scrollTrigger:".intro",
    x:800,
    duration:1,
})



var pic1= document.querySelector(".pic1")
var pic2= document.querySelector(".pic2")
var pic3= document.querySelector(".pic3")
var pic4= document.querySelector(".pic4")
var pic5= document.querySelector(".pic5")
var pic6= document.querySelector(".pic6")
var pic7= document.querySelector(".pic7")
var pic8= document.querySelector(".pic8")
var pic9= document.querySelector(".pic9")
var pic10= document.querySelector(".pic10")
var pic11= document.querySelector(".pic11")
var pic12= document.querySelector(".pic12")
var pic13= document.querySelector(".pic13")
var pic14= document.querySelector(".pic14")
var pic15= document.querySelector(".pic15")
var img= document.querySelector(".work-image img")
pic1.addEventListener("mouseenter",()=>{
    img.src = "https://nkeirukamedani.com/wp-content/uploads/2020/04/14-1200x1870.jpeg"
})
pic1.addEventListener("click",()=>{
    img.src = "https://parade.com/.image/t_share/MjA1NTMyNzQzNjY3Mjk2MTU2/2024-vanity-fair-oscar-party-hosted-by-radhika-jones---arrivals.jpg"
})
pic2.addEventListener("mouseenter",()=>{
    img.src = "https://parade.com/.image/t_share/MjA1NTMyNzQzNjY3Mjk2MTU2/2024-vanity-fair-oscar-party-hosted-by-radhika-jones---arrivals.jpg"
})
pic3.addEventListener("mouseenter",()=>{
    img.src = "https://i.pinimg.com/736x/41/1c/e5/411ce5835476f6e64fcf4457f7eb73be.jpg"
})
pic4.addEventListener("mouseenter",()=>{
    img.src = "https://parade.com/.image/t_share/MjA1NTMyNzQzNjY3Mjk2MTU2/2024-vanity-fair-oscar-party-hosted-by-radhika-jones---arrivals.jpg"
})

pic5.addEventListener("mouseenter",()=>{
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXGuDiMfpdF6j-ek2wyk5kK7WvDjqICTe8w&s"
})
pic6.addEventListener("mouseenter",()=>{
    img.src = "https://bhartitaneja.com/wp-content/uploads/2023/02/How-to-do-Smokey-Eyes-%E2%80%93-Smokey-Eyes-made-simple.jpg"
})
pic7.addEventListener("mouseenter",()=>{
    img.src = "https://i.ebayimg.com/images/g/Z1oAAOSwFGNWSFRP/s-l400.jpg"
})
pic8.addEventListener("mouseenter",()=>{
    img.src = "https://sumansalon.in/wp-content/uploads/2024/03/626200c4-9adc-41ce-b064-fda94af3bafd.jpg"
})
pic9.addEventListener("mouseenter",()=>{
    img.src = "https://t3.ftcdn.net/jpg/02/05/54/74/360_F_205547400_Fqcr79yE9IBU7H1INXd7rBTBtBe5k4Wp.jpg"
})
// pic10.addEventListener("mouseenter",()=>{
//     img.src = "./asset/WhatsApp Image 2024-01-30 at 18.05.48_fb2596fc.jpg"
// })
pic11.addEventListener("mouseenter",()=>{
    img.src = "https://media.istockphoto.com/id/516282921/photo/beauty-concept-skin-aging-anti-aging-procedures-rejuvenation-lifting.jpg?s=612x612&w=0&k=20&c=ANXQQ_FsajFltCpH5Rw9WTcyfkoCbrUhRUJ2olooWgU="
})
pic12.addEventListener("mouseenter",()=>{
    img.src = "https://img.freepik.com/free-photo/female-model-wedding-bridal-makeup_114579-9312.jpg?semt=ais_hybrid&w=740"
})

pic13.addEventListener("mouseenter",()=>{
    img.src = "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/90b7d708-dda8-abe4-c590-6f8faa502e6a.jpg"
})
pic14.addEventListener("mouseenter",()=>{
    img.src = "https://dr.savee-cdn.com/image-fallbacks/original/6/5/3693d0e0cf4041f5c2b682.jpg"
})
pic15.addEventListener("mouseenter",()=>{
    img.src = "https://t4.ftcdn.net/jpg/02/44/16/37/360_F_244163733_ErNyvrHfOJcRlHd7t3doQcs4bEgclAfq.jpg"
})






