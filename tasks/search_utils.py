"""See Invoke's documentation: http://docs.pyinvoke.org/en/stable/."""

import random
import time
from itertools import chain

import django
from elasticsearch import Elasticsearch
from elasticsearch_dsl import Q, Search

from apps.search.documents.entity import EntityDocument
from apps.search.documents.image import ImageDocument
from apps.search.documents.occurrence import OccurrenceDocument
from apps.search.documents.quote import QuoteDocument
from apps.search.documents.source import SourceDocument

from .command import command

django.setup()

SEARCHABLE_DOCUMENTS = [
    OccurrenceDocument,
    QuoteDocument,
    SourceDocument,
    ImageDocument,
    EntityDocument,
]


@command
def search(
    context,
    query,
    all: bool = False,
    print_all: bool = False,
    print_sql: bool = False,
    start: int = 0,
    end: int = 20,
):
    random_document = random.choice(SEARCHABLE_DOCUMENTS)

    print(f"Searching for = {query} in {'all' if all else random_document}")

    query = Q('simple_query_string', query=query)

    # client = Elasticsearch()
    # search = Search(using=client).query(query)

    tic = time.perf_counter_ns()

    if print_sql:
        from django.db import connection

    if all:
        queryset = chain()
        for document in SEARCHABLE_DOCUMENTS:
            s = document.search().query(query)[start:end]
            queryset = chain(queryset, s.to_queryset())

        queryset = list(queryset)
    else:
        s = random_document.search().query(query)[start:end]
        queryset = list(s.to_queryset())

    toc = (time.perf_counter_ns() - tic) / 1000000
    print(f"Search returned n={len(queryset)}, resolved results in {toc} ms")

    if print_sql:
        print(connection.queries)

    if len(queryset) > 0:
        print("Results:")
        if print_all:
            [print(x) for x in queryset]
        else:
            print(f"Random result item = {random.choice(queryset)}")
