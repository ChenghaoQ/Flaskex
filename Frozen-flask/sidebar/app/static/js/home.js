

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
		console.log(this);
		this.el = document.getElementById(eventId||'sidebar-menu');
		this.closeBarEl = document.getElementById(closeBarId||'closeBar');
		this.contel = document.getElementById(sidebarContId||'sidebar-content');
		this.sidemenu = new Sidemenu();
		var self = this;
		this.closeBarEl.addEventListener('click',function(event){
			if(event.target !== self.closeBarEl){
				self.switchTrigger();
			}
		});
	};
	Sidebar.prototype.close = function(){	
		this.state = 'closed';
		
		if(this.sidemenu.state === 'allClosed')
		{
			console.log(this.sidemenu.state);
			this.contel.className ='hide-back-again';
			this.el.className ='hide-sidebar-menu';
		}
		else
		{
			this.contel.className ='hide-back';
			this.contel.className ='hide-back-again';
			this.el.className ='hide-sidebar-menu';
			
			
		}

		this.el.className ='hide-sidebar-menu';
		this.closeBarEl.className = 'hide-closeBar';
		
	};
	Sidebar.prototype.open = function(){
		console.log('bbb');
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
	
	
	
	
	
	var sidebar = new Sidebar();
	
	
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

