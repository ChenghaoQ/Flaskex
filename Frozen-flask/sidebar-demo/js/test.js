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
	var Sidebar = function(eventId,closeBarId)
	{
		this.state = 'opened';
		console.log(this);
		this.el = document.getElementById(eventId||'sidebar');
		this.closeBarEl = document.getElementById(closeBarId||'closeBar');
		var self = this;
		this.sidemenu = Sidemenu();
		this.closeBarEl.addEventListener('click',function(event){
			if(event.target !== self.closeBarEl){
				self.switchTrigger();
			}
		});
	};
	Sidebar.prototype.close = function(){
		console.log('aaa');
		this.state = 'closed';
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
	
})();
