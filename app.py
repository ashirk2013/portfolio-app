from flask import Flask, render_template, send_from_directory
from flask_restful import Api, Resource, reqparse
from api.PortfolioApiHandler import PortfolioApiHandler

app = Flask(__name__, static_folder="webui/build", static_url_path='/')
api = Api(app)

@app.route('/heartbeat')
def heartbeat():
    return {"status": "healthy"}

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')

api.add_resource(PortfolioApiHandler, '/api')
