from google.cloud import datastore, storage
from urllib.request import urlopen
import ssl

datastore_client = datastore.Client()

BUCKET_NAME = "aled-testing.appspot.com"
BUCKET_FILE_PATH = "author_images"

def store_quote(quote, author, date_time, image):
    entity = datastore.Entity(key=datastore_client.key('quotes'))
    data = {
        'author': author,
        'quote': quote,
        'created': date_time,
        'image': image,
    }
    entity.update(data)

    datastore_client.put(entity)

    return(data)

def upload_image_from_url_to_google_storage(img_url, img_name):
    """
    Uploads an image from a URL source to google storage.
    - img_url: string URL of the image, e.g. https://picsum.photos/200/200
    - img_name: string name of the image file to be stored
    """
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(BUCKET_NAME)
    blob = bucket.blob(BUCKET_FILE_PATH + "/" + img_name + ".jpg")
    ssl._create_default_https_context = ssl._create_unverified_context

    # Read the image URL
    with urlopen(img_url) as response:
        # Check URL contains an image.
        info = response.info()
        if(info.get_content_type().startswith("image")):
            blob.upload_from_string(response.read(), content_type=info.get_content_type())
            print("Uploaded image from: " + img_url)
        else:
            print("Could not upload image. No image data type in URL")

    blob.make_public()
    return blob.public_url