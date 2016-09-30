def static_assets():
	return {
	'css':
	{
		'homepage':url_for('static',filename = 'css/homepage.css'),
		'bootstrap':url_for('static',filename = 'css/bootstrap.css' ),
		'monokai':url_for('static',filename = 'css/monokai.css' ),
		'index':url_for('static',filename = 'css/index.css' ),
		'article':url_for('static',filename = 'css/article.css' ),
		'posts':url_for('static',filename = 'css/posts.css' ),
		'normalize':url_for('static',filename = 'css/normalize.css' ),
		'zenburn':url_for('static',filename = 'css/zenburn.css' ),
	},
	'icss':
	{
		'iarticle':url_for('static',filename = 'icss/iarticle.css' ),
		'ihomepage':url_for('static',filename = 'icss/ihomepage.css' ),
		'iposts':url_for('static',filename = 'icss/iposts.css' ),
	},
	'js':
	{
		'home':url_for('static',filename = 'js/home.css' ),
		'index':url_for('static',filename = 'js/index.css' ),
		'jquery':url_for('static',filename = 'js/jquery.css' ),
		
	},
	'ijs':
	{
		'ihome':url_for('static',filename = 'ijs/ihome.css' ),
	}
	
	
	
	
	
}