# My First Blog

## Getting Started

#### Pre-requisites 

- Python `brew install python3`
- Django Bower `npm install -g bower`
- Virtualenv `brew install virtualenv`

#### Start the Development Server

1. It is essential we all use and test on the same version, virtualenv will ensure
that is the case. 
- `virtualenv -p python3 env`
- `source ./env/bin/activate`

2. Install required pip modules 
- `pip install -r requirements.txt`

3. Install bower dependencies 
- `./manage.py bower install`

4. Start Server 
- `python manage.py runserver` 