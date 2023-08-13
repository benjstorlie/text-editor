import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO✓: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // put updates, or creates if does not exist, by key
  const db = await openDB('jate', 1);
  // ??? Since the keypath is id, and autoincrement is true, does it create an id and add it to the content object?
  // Ans: This is the error when no id is provided: `Failed to execute 'put' on 'IDBObjectStore': A generated key could not be inserted into the value.`
  db.put('jate',{id:1, content});
  db.close();
}

// TODO✓: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await openDB('jate',);
  let content;
  db.getAll('jate')
    .then((data) => {
      content = data;
      console.log(data);
    })
    .catch(() => console.log('Error retrieving data'));
  db.close();
  return content;
}

initdb();
