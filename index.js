function showSidebar(){
    $("#showSidebar").removeClass("slideLeft slideRight");
    $("#showSidebar").addClass("active slideLeft");
    // $(".sidebar").css({"opacity":"1"});
}


function closeSidebar(){
$("#showSidebar").removeClass("slideLeft slideRight");
$("#showSidebar").addClass("slideRight")
$(".sidebar").css({"opacity":"0"});
}




$(function(){

const logo1 = $("#logo1");
const logo2 = $("#logo2");



let activeLogo = 1;
setInterval(() => {
    $("logo").css({"opacity": "0"});
    if (activeLogo === 1) {
        logo1.addClass("active");
        logo2.removeClass("active");
        

        activeLogo++;
    } else {
        logo2.addClass("active");
        logo1.removeClass("active");
        activeLogo--;
    }
}, 3000);

})

$(document).ready(function() {
const buttons = $("[data-carousel-button]");

buttons.each(function() {
    const button = $(this);
    button.on("click", function() {
        const offset = button.data("carousel-button") === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").find("[data-slides]");
        const activeSlide = slides.find(".active");
        const items = slides.children();
        let newIndex = items.index(activeSlide) + offset;

        if (newIndex < 0) newIndex = items.length - 1;
        if (newIndex >= items.length) newIndex = 0;


        // Apply animation classes for sliding
        items.removeClass("slideLeft slideUp active");
        items.eq(newIndex).addClass(offset === -1 ? "slideUp" : "slideUp");

        items.eq(newIndex).addClass("active")
        setTimeout(() => {
            $(".carousel-background").css({"filter": "none"});

            setTimeout(() => {
                $(".carousel-background").css({"filter": "blur(5px)"});
            }, 700);
            
        }, 0);
        
        // items.removeAttr("data-active");
        // items.eq(newIndex).attr("data-active", true);
    });
});
});







{/* <div id="showSidebar" class="sidebar">
        <ul>
            <li onclick=closeSidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#F5BE55"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
            <li class><a href="#">Home</a></li>
            <li><a id="about" href="about.html">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Service</a></li>
        </ul>
    </div> */}








// $(document).ready(function() {
//     var $elements = $('.fade-in, .slideDown, .slideLeft, .slideRight, .slideUp');

//     function isInViewport($el) {
//         var rect = $el[0].getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }

//     function onScroll() {
//         $elements.each(function() {
//             var $element = $(this);
//             if (isInViewport($element)) {
//                 $element.addClass('inView');
//             } else {
//                 $element.removeClass('inView');
//             }
//         });
//     }

//     $(window).on('scroll', onScroll);
//     onScroll(); // Trigger the function initially to check the visibility of elements
// });
