from flask import Blueprint, render_template,url_for
from app import articles,app
from markupsafe import Markup
from flask_flatpages import pygmented_markdown
from app.utils import pagination as Pag,assets
postwall = Blueprint('postwall',__name__)

@postwall.route('/')
@postwall.route('/page/<int:page>/')
def posts(page=1):
	#posts = [article for article in articles if 'date' in article.meta]
	posts=[]
	#page=1
	PER_PAGE = 6
	for article in articles:
		if 'date' in article.meta:
			posts.append(article)
	static_assets = assets.static_assets()
	#sort posts by date,descending
	
	sorted_posts = sorted(posts,reverse = True,key = lambda page:page.meta['date'])#Because of key is date, so in .md file date cannot be write in wrong format like Date
	#pages may related to template index.html
	pager_obj = Pag.Pagination(page,PER_PAGE,sorted_posts)
	print(page,pager_obj.items)
	return render_template('index.html',pagination = pager_obj,asset = static_assets)


@app.template_filter('excerpt')
def excerpt_spliter(article):
    sep='<!--More-->'
    if sep in article:
        pass
    else:
        sep = '\n'
    return Markup(pygmented_markdown(article.split(sep,1)[0]))


