# CouchDB - PouchDB Training

This is the example code for the training I presented at Theodo UK and FastIT.

## Instructions

[Get Vagrant](https://www.vagrantup.com/downloads.html) if you don't have it

```
vagrant up
vagrant ssh
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
cd /var/www/couch
npm install
npm start
```

The database should be accessible on your local machine on port 5984, and the client on port 8080.
