import os
import pandas as pd
from django.views import View
from django.http import HttpResponse

DATA_PATH = os.path.join(os.path.dirname(__file__), 'data/Income Dirty Data.csv')
