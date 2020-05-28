let my_window = $(window);
my_window.on("scroll", throttle(scrollCalculation, 100));

function throttle(functionName, waitTime)
{
    let time = Date.now();
    return function() {
        if ((time + waitTime) - Date.now() < 0 )
        {
            functionName();
            time = Date.now();
        }
    }
}




function scrollCalculation()
{
    let window_height = my_window.height();
    let window_top_pos = my_window.scrollTop();
    let window_bottom_pos = (window_top_pos + window_height);
    console.log(window_bottom_pos);
    if (window_bottom_pos < 1600)
    {
        $(".logo-image").removeClass("active");
        $(".logo-original").addClass("active");
    }
    else if (window_bottom_pos > 1600 && window_bottom_pos < 3700)
    {
        $(".logo-image").removeClass("active");
        $(".logo-spring").addClass("active");
    }
    else if (window_bottom_pos > 3800 && window_bottom_pos < 5600)
    {
        $(".logo-image").removeClass("active");
        $(".logo-summer").addClass("active");
    }
    else if (window_bottom_pos > 5600 && window_bottom_pos < 7800)
    {
        $(".logo-image").removeClass("active");
        $(".logo-fall").addClass("active");
    }
    else if (window_bottom_pos > 7800)
    {
        $(".logo-image").removeClass("active");
        $(".logo-winter").addClass("active");
    }
   if(window_top_pos > 300)
   {
        $(".logo-image").addClass("logo-small");
   }
   else
   {
        $(".logo-image").removeClass("logo-small");
   }


}
$('.nav-toggle').on("click", function()
{
    $(this).toggleClass('open');
    $('.nav-container').toggleClass('nav-container--closed').toggleClass('nav-container--open');
    for (let i = 0; i < 9; i++) {
        $('.sl' + i).toggleClass('slide-in' + i).toggleClass('slide-out');
    }
    $('.nav-link-text').toggleClass('hide-link').toggleClass('show-link');
    $('.nav-footer-email').toggleClass('hide-link').toggleClass('show-link');
    $('.social-text').toggleClass('hide-link').toggleClass('show-link');
});
