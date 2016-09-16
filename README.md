# CouchDB - PouchDB Training

This is the example code for the training I presented at Theodo, Theodo UK and FastIT.

## Instructions

[Get Vagrant](https://www.vagrantup.com/downloads.html) if you don't have it

```
vagrant up
vagrant ssh
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
cd /var/www/couch
npm install
npm run db:start
```

The database should be accessible on your local machine on port 5984.

Using the REST API or the Fauxton GUI (http://localhost:5984/_utils), set up a database called `db` and a document called `best_food_place` with a property `name`.

Then, inside the VM, use `npm start` to run both the database and the server serving the page on port 8080.
