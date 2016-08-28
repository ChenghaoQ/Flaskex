from flask import Blueprint, render_template

article = Blueprint('article',__name__)

@article.route('/article/<path:path>/')
def page(path):

	article = articles.get_or_404(path)

	return render_template('article.html',page=article)