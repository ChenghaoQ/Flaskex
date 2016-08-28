from flask import Flask
from flask_flatpages import FlatPages
from flask_frozen import Freezer

from .views.index import index
from .views.postwall import postwall
from .views.article import article








#初始化 flask
app = Flask(__name__)
#注册蓝图
app.register_blueprint(index)
#app.register_blueprint(postwall)
app.register_blueprint(article)
#load the settings from .py file
app.config.from_pyfile('settings.py')
#initialize the article pages
articles = FlatPages(app) #FlatPages use 'app' as arguments
#initialize the freezer
freezer = Freezer(app)

#after initialize import views
#from app import views
