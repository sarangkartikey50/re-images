import Dexie from 'dexie';

const db = new Dexie('PostsDB');
db.version(1).stores({ posts: '++id, title, body' });

export default db;