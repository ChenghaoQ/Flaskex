from flask import Blueprint, render_template
from app.utils import assets
copyright = Blueprint('copyright',__name__)

@copyright.route('/copyright')
def copy():
	
	static_assets = assets.static_assets()
	
	
	return render_template('copyright.html',asset = static_assets)