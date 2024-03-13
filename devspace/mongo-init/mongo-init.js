db = db.getSiblingDB('analytics');

db.createUser({
  user: 'analytics_dba',
  pwd: 'analytics_admin',
  roles: [
    { role: 'dbOwner', db: 'analytics' }
  ]
});