

(function()
{
	var Sidemenu = function()
	{
		this.el = document.querySelector('#sidebar-menu ul');
		this.state = 'allClosed';
		this.el.addEventListener('click',function(evt){
			evt.stopPropagation();
		});
		var self = this;
		this.menuList = document.querySelectorAll('#sidebar-menu ul>li');
		for(var i = 0;i<this.menuList.length;i++)
		{
			this.menuList[i].addEventListener('click',function(evt){
				
				var menuContEl = document.getElementById(evt.currentTarget.id+'-content');
				console.log(menuContEl);
				if(self.state === 'allClosed'){
					console.log('open'+menuContEl.id);
					self.state = 'oneOpened';
					self.MenuContNow = menuContEl;
				}
				else{
					console.log('close'+self.MenuContNow.id);
					console.log('open'+menuContEl.id);
					self.state ='oneOpened';
					self.MenuContNow = menuContEl;
				}
			});	
		}
	}
	var Sidebar = function(eventId,closeBarId,sidebarContId)
	{
		this.state = 'opened';

		this.el = document.getElementById(eventId||'sidebar-menu');
		this.closeBarEl = document.getElementById(closeBarId||'closeBar');
		this.contel = document.getElementById(sidebarContId||'sidebar-content');
		this.sidemenu = new Sidemenu();
		var self = this;
		
		this.sideme = $('#sidebar-menu');
		this.sidecont = $('#sidebar-content');
		this.sideclose = $('#closeBar');
		this.maincont = $('#main-page');
		this.closeBarEl.addEventListener('click',function(event){
			if(event.target !== self.closeBarEl){
				self.switchTrigger();
				
			}
		});
	};
	Sidebar.prototype.close = function(){	
		this.state = 'closed';
		
		if(this.sidemenu.state === 'oneOpened')
		{
			/*onsole.log(this.sidemenu.state);
			this.contel.className ='a hide-back';
			this.contel.className ='a hide-back-again';*/
			this.sidecont.animate({'left':this.sideme.width()-this.sidecont.width()});
			this.maincont.animate({'margin-left':this.sideme.width()});
			
			this.sidecont.animate({'left':-this.sidecont.width()});
			this.maincont.delay(500).animate({'margin-left':0});
			this.sideme.delay(500).animate({'left':-this.sideme.width()});
			this.sideclose.animate({'left':40});
			this.closeBarEl.className= 'showbar';
		}
		else if(this.sidemenu.state === 'allClosed')
		{
			this.sidecont.animate({'left':-this.sidecont.width()});
			this.maincont.delay(500).animate({'margin-left':0});
			this.sideme.delay(500).animate({'left':-this.sideme.width()});
			this.sideclose.animate({'left':40});
			this.closeBarEl.className= 'showbar';
		}

		
		
	};
	Sidebar.prototype.open = function(){
		this.state = 'opened';
		
	};
	Sidebar.prototype.switchTrigger = function(){
		if(this.state === 'opened'){
			this.close();
		}
		else{
			this.open();
		}
	};
	
	
	
	
	
	var sidebar = new Sidebar('sidebar-menu','closeBar','sidebar-content');
	
	
	var /*sidebar =$('#sidebar'),
        sidebar_trigger = $('#sidebar-trigger'),*/
        backbutton=$('.back-to-top');
        /*main_page=$('#main-page');*/
    function backback()
    {
        $('html,body').animate({
            scrollTop:0
        },800)
    }
    
    function hidebutton()
    {
        if($(window).scrollTop() > $(window).height()/2)
            backbutton.fadeIn();
        else
            backbutton.fadeOut();
    }
	
    $(function(){
        if($(window).width()>1024){
            /*$(function(){setTimeout(hideSideBar,600)});
            sidebar_trigger.on('click',showhideSideBar);*/
            backbutton.on('click',backback);
            $(window).on('scroll',hidebutton);
            $(window).trigger('scroll');
        }
    })
	
})();

