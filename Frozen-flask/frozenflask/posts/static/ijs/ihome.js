;$(function()
{
    'use strict';
    var menu = $('.menu'),
        backbutton=$('.back-to-top'),
        menu_trigger = $('.menu_trigger'),
        sidebar =$('#sidebar'),
        sidebar_trigger = $('#sidebar-trigger');
        
    function hidebutton()
    {
        if($(window).scrollTop() > $(window).height()/2)
            backbutton.fadeIn();
        else
            backbutton.fadeOut();
    }
    function backback()
    {
        $('html,body').animate({
            scrollTop:0
        },800)
    }
    
    
    
    
    function showSideBar()
    {
        
        sidebar.css('left',0);
        /*main_page.css('margin-left',sidebar.width());*/
        
        sidebar_trigger.text("➤");
    }
    function hideSideBar()
    {
        sidebar.css('left',-sidebar.width());
        
        sidebar_trigger.text("☰");
    }
    function showhideSideBar()
    {
            if(sidebar.css('left')=='0px')
                hideSideBar();
            else  
                showSideBar();
    }
    
    
    
    
    
    
    
    
    
    /*main*/
    $(function(){
        if($(window).width()<1024){
            menu_trigger.click(function(){menu.slideToggle()});
            $(function(){setTimeout(hideSideBar,1000)});
            sidebar_trigger.on('click',showhideSideBar);
            backbutton.on('click',backback);
            $(window).on('scroll',hidebutton);
            $(window).trigger('scroll');
        }
    })
    
    /*sidebar_trigger.on('click',showSideBar)*/
})