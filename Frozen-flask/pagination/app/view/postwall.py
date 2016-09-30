from flask import Blueprint, render_template
from app import articles,app
from markupsafe import Markup
from flask_flatpages import pygmented_markdown
from app.extension import pagination as Pag
postwall = Blueprint('postwall',__name__)

@postwall.route('/',defaults={'page':1})
#@postwall.route('/page/<int:page>')
def posts():
	#posts = [article for article in articles if 'date' in article.meta]
	posts=[]
	page=1
	PER_PAGE = 6
	for article in articles:
		if 'date' in article.meta:
			posts.append(article)

	#sort posts by date,descending
	
	sorted_posts = sorted(posts,reverse = True,key = lambda page:page.meta['date'])#Because of key is date, so in .md file date cannot be write in wrong format like Date
	#pages may related to template index.html
	pager_obj = Pag.Pagination(1,PER_PAGE,sorted_posts)
	return render_template('index.html',pagination = pager_obj)


@app.template_filter('excerpt')
def excerpt_spliter(article):
    sep='<!--More-->'
    if sep in article:
        pass
    else:
        sep = '\n'
    return Markup(pygmented_markdown(article.split(sep,1)[0]))

