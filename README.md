# sfs-coding-challenge - Django, Part 2

For this excercise, you will find a partially initialized django application under the directory: `django/mysite/myapp`. 

First, navigate within the django folder where a python venv has been defined. Use the activate script in the Scripts folder to enter the env, and then install the requirements.txt in that location to install the necessary dependencies.

Once installed, navigate to `django/mysite` and run the following command to start the django server: `python3 manage.py runserver`. You will not need to run any migrations for this excercise.

Once the server is running, navigate to `http://127.0.0.1:8000` and you should see the django splash screen informing you there are no configured urls.

The goal of this task is to build out the start of this api by adding the first two views. Contained within the `myapp/data` folder is a csv containing income data. This data contains a number of issues, ranging from missing/incorrect values to inconsistant naming conventions. 

For the first view, load this data using pandas, perform cleansing methodologies of your choice to drop/impute missing values and otherwise pre-process the data and deliver the cleaned dataframe as a json object, available at the url `api/income_data`.

For the second view, capitalize upon the clean dataframe you created for the first view, and deliver a dictionary containing summary statistics for the dataframe, such as average income, min/max tax, etc as you see fit, and make it available at the url `api/income_stats`.

Once you are satisfied with your json deliverables, and they can be accessed via browser, you have completed this task, and may contact the proctor for next steps.
