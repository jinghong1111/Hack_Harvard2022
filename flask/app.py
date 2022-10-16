from flask import Flask
import scraper

app = Flask(__name__)

@app.route("/")
def hello_world():
   return "<p>Hello, World!</p>"

@app.route('/search')
def getProduct():
    product_name = request.json['product_name']
    return scraper.getData(product_name)

    
