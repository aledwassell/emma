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
    quote_author_image_url = generate_quote_author_image(quote_data.author)
    image_url = upload_image_from_url_to_google_storage(quote_author_image_url, quote_data.author.replace(' ', '_'))
    
    image = {
        'height': 256,
        'width': 256,
        'url': image_url,
        'alt': quote_data.author,
    }

    data = store_quote(quote_data.quote, quote_data.author, datetime.datetime.now(tz=datetime.timezone.utc), image)

    return jsonify(data)


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
