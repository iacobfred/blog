#!/bin/bash

python manage.py collectstatic --noinput
python manage.py migrate
gunicorn modularhistory.asgi:application \
    -k uvicorn.workers.UvicornWorker \
    --user www-data --bind 0.0.0.0:8000 --workers 9 \
    --max-requests 100 --max-requests-jitter 50
# daphne modularhistory.asgi --user www-data --bind 0.0.0.0:8000
