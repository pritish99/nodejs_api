# Node JS CRUD API
The NodeJS application provides an API for performing CRUD operations on a MongoDB database
The MongoDB Database is based on MongoDB Cloud.
The URL for the database is stored inside the .env file which is used by Mongoose package for connecting to the database.

# Data Model
The data model is of the following format.<br>
<ul>
<li>Name : Name of the movie</li>
<li>IMG : Image for representation</li>
<li>Summary : A short summary of the movie.</li>
</ul>


# Create
Using the POST Method, the API can create a new record in the database with its auto-generated unique id.<br>
The body must consist of the following fields<br>
<ul>
<li>name</li>
<li>img</li>
<li>summary</li>
</ul>

# Read
Using the READ Method, the API can read the data stored in the database.<br>
The response body will consist of the following fields<br>
<ul>
<li>name</li>
<li>img</li>
<li>summary</li>
</ul>

# Update
Using the UPDATE Method, the API can update the data stored in the database based on the unique id passed as the parameter.<br>
The body must consist of the following fields where if the field is to be updated, then the updated data should be entered in the field, 
else the old data should be kept untouched<br>

# Delete
Using the DELETE Method, the API can delete the data stored in the database based on the unique id passed as the parameter.<br>

