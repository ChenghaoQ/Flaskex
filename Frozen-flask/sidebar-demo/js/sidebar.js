(function()
{
	var Menubar = function()
	{
		this.el = document.querySelector('#sidebar ul');
		this.state = 'allClosed';
		this.el.addEventListener('click',function(e)
		{
			e.stopPropagation();				  
		});
		var self = this;
		this.menuList = document.querySelectorAll('#sidebar ul >li')
		for(var i = 0;i<this.menuList.length;i++)
		{
			this.menuList[i].addEventListener('click',function(e){
				var menuContentEl = document.getElementById(e.currentTarget.id+'-content');
				if(self.state ==='allClosed')
				{
					console.log('open'+menuContentEl.id);
					menuContentEl.style.top='0';
					menuContentEl.style.left='-85px';/*120-35*/
					menuContentEl.className = 'nav-content';
					menuContentEl.classList.add('menuContent-move-right');
					self.state ='hasOpened';
					self.currentOpenedMenuContent = menuContentEl;
				}
				else
				{
					console.log('close'+self.currentOpenedMenuContent.id);
					self.currentOpenedMenuContent.className = 'nav-content';
					self.currentOpenedMenuContent.top = '0';
					self.currentOpenedMenuContent.left = '35px';
					self.currentOpenedMenuContent.classList.add('menuContent-move-left');
					console.log('open'+menuContentEl.id);
					menuContentEl.className='nav-content';
					menuContentEl.style.top = '250px';
					menuContentEl.style.left = '35px';
					menuContentEl.classList.add('mennuContent-move-up');

					self.state ='hasOpened';
					self.currentOpenedMenuContent = menuContentEl;
				}
				
			});
		}
		this.menuContentList = document.querySelectorAll('.nav-content > div.nav-con-close');
		for(i=0;i<this.menuContentList.legnth;i++)
		{
			this.menuContentList[i].addEventListener('click',function(e){
				var menuContent = e.currentTarget.parentNode;
				menuContent.className = 'nav-content';
				menuContent.top = '0';
				menuContent.left = '35px';
				menuContent.classList.add('menuContent-move-left');
				that.state='allClosed';
			});
		}
	}
	
	var Sidebar = function(eId,closeBarId)
	{
		this.state = 'opened';
		this.el = document.getElementById(eId||'sidebar');
		this.closeBarEl = document.getElementById(closeBarId ||'closeBar');
		
		var self = this;
		this.menubar = new Menubar();
		this.el.addEventListener('click',function(event){
			if(event.target !== this.el)
			{
				console.log(self);
				self.triggerSwitch();
			}
		});

	};
	Sidebar.prototype.close = function(){
		console.log('aaa');
		this.el.className = 'sidebar-move-left';
		this.closeBarEl.className= 'closeBar-move-right';
		this.state ='closed';
	};
	Sidebar.prototype.open = function(){
		console.log('bbb');
		this.el.style.left ='-120px';
		this.el.className = 'sidebar-move-right';
		this.closeBarEl.style.left ='160px';
		this.closeBarEl.className= 'closeBar-move-left';
		this.state='opened';
	};
	Sidebar.prototype.triggerSwitch = function(){
		if(this.state === 'opened')
		{
			this.close();
		}
		else{
			this.open();
		}
	};
	
	var sidebar = new Sidebar();
	
	
})();