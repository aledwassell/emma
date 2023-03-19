from google.cloud import datastore

datastore_client = datastore.Client()

def store_quote(quote, author, date_time):
    entity = datastore.Entity(key=datastore_client.key('quotes'))
    data = {
        'author': author,
        'quote': quote,
        'created': date_time,
    }
    entity.update(data)

    datastore_client.put(entity)

    return(data)

def fetch_times(limit):
    query = datastore_client.query(kind='visit')
    query.order = ['-timestamp']

    times = query.fetch(limit=limit)

    return times