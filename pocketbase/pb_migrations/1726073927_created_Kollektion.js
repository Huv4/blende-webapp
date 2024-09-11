/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kl7l81jhw5nsa12",
    "created": "2024-09-11 16:58:47.731Z",
    "updated": "2024-09-11 16:58:47.731Z",
    "name": "Kollektion",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "simylqnh",
        "name": "Name_der_Kollektion",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6fcbpqsz",
        "name": "Titelbild",
        "type": "file",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/jpeg",
            "image/webp"
          ],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kl7l81jhw5nsa12");

  return dao.deleteCollection(collection);
})
