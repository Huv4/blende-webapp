/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zyzttjpem47d8x4",
    "created": "2024-09-11 17:01:03.864Z",
    "updated": "2024-09-11 17:01:03.864Z",
    "name": "Fotograf",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "edrykh5e",
        "name": "Name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("zyzttjpem47d8x4");

  return dao.deleteCollection(collection);
})
