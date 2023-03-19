import datetime

from flask import Flask, jsonify

from openai_handler import *
from datastore_handler import *

app = Flask(__name__)

@app.route('/')
def root():
    return {"message": "Welcome to the API serving a ML model that produces quotes."}

@app.route('/quote')
def quotes():
    quote_data = generate_quote()
    
    data = store_quote(quote_data.quote, quote_data.author, datetime.datetime.now(tz=datetime.timezone.utc))

    return jsonify(data)


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)


