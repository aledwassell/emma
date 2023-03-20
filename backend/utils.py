from google.cloud import secretmanager

class dotdict(dict):
    """dot.notation access to dictionary attributes"""
    __getattr__ = dict.get
    __setattr__ = dict.__setitem__
    __delattr__ = dict.__delitem__

def get_gcloud_secret_by_name(SECRET_ID):
    gcp_secret_client = secretmanager.SecretManagerServiceClient()

    PROJECT_ID = '862163374972'
    
    secret_resource_name = f"projects/{PROJECT_ID}/secrets/{SECRET_ID}/versions/1"

    response = gcp_secret_client.access_secret_version(name=secret_resource_name)
    
    return response.payload.data.decode('UTF-8')