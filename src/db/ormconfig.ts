let  postgres_config = 
      {
        "name": "default",
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "jhon",
        "password": "admin",
        "database": "typescript",
        "schema": "public",
        "synchronize": false,
        "entities": ["entities/*.js"]
      }

export { postgres_config }
