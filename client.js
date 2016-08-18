var theDoc = {};

// Create local PouchDB
var localDb = new PouchDB('db');

// Sync it with the remote
var remoteDb = new PouchDB('http://' + window.location.hostname + ':5984/db');
localDb.sync(remoteDb, {live: true, retry: true});

// Listen to the changes of the local database
localDb.changes({
  live: true,
  include_docs: true,
  doc_ids: ['best_food_place']
})
.on('change', function(change) { refreshView(change.doc);  });

// Push the submitted value to the database
$('form').submit(function(e) {
  e.preventDefault();
  theDoc.name = $('#foodPlace').val();
  localDb.put(theDoc);
});

function refreshView(doc) {
  theDoc = doc;
  $('#value').text(doc.name);
}
