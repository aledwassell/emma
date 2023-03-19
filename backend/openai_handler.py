import openai

from utils import *

openai.api_key = get_gcloud_secret_by_name('OPENAI_API_KEY')

def generate_quote():
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": "Generate a new inspirational quote with a fake author name"}
        ]
    )

    quote, author = completion.choices[0].message.content.replace('"', '').split(' - ')

    return dotdict({"quote": quote, "author": author})
