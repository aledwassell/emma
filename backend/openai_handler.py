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

    quote_content = completion.choices[0].message.content

    if len(quote_content) == 0:
        return ""

    quote, author = quote_content.replace('"', '').split(' - ')

    return dotdict({"quote": quote, "author": author})

def generate_quote_author_image(author_name):
    image_data = openai.Image.create(
        prompt="A portrait photograph of " + author_name,
        n=2,
        size="256x256"
    )

    image_url = image_data.data[0].url

    if len(image_url) == 0:
        return ""

    return image_url
