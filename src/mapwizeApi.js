import axios from "axios";

const defaultPagination = 30;
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 60000
});
const baseUrl = "https://api.mapwize.io/v1";
const APIkEY = "c9c085ff82246a3f3719496d8d07bc13";
const VANUEID = "5c4111f09c78c8001556e7d8";
const ORGID = "5c402a869c78c8001556db52";

const signin = () => {
  return instance.post("/auth/signin?api_key=" + APIkEY, {
    email: "trinhluu33@gmail.com",
    password: "L0vem0ney@studio.mapwize.io"
  });
};

const getLayersFromVanue = (vanueId = VANUEID) => {
  // return instance.get(
  //   "/layers?api_key=" + APIkEY + "&venueId=" + vanueId + "&isPublished=all"
  // );
  return JSON.parse(mockLayers);
};

const getPlacesInVenue = (vanueId = VANUEID, page = 0) => {
  // return instance.get(
  //   "/places?api_key=" +
  //     APIkEY +
  //     "&venueId=" +
  //     vanueId +
  //     "&page=" +
  //     page +
  //     "&pageSize=" +
  //     defaultPagination +
  //     "&isPublished=all"
  // );
  return JSON.parse(mockPlaces);
};

const getDirections = (from = "", to = "") => {
  return JSON.parse(directionsSimulator);
};

const directionsSimulator = `{
    "from": {
        "lat": 10.778110515231079,
        "lon": 106.70153617858888,
        "floor": 0,
        "venueId": "5c4111f09c78c8001556e7d8",
        "placeId": "5c4113719c78c8001556e7e2"
    },
    "to": {
        "lat": 10.778051230141877,
        "lon": 106.70205384496968,
        "floor": 0,
        "venueId": "5c4111f09c78c8001556e7d8",
        "placeId": "5c4113e02ddb280015e3a9fa"
    },
    "subdirections": [
        {
            "from": {
                "lat": 10.778110515231079,
                "lon": 106.70153617858888,
                "floor": 0,
                "venueId": "5c4111f09c78c8001556e7d8",
                "placeId": "5c4113719c78c8001556e7e2"
            },
            "to": {
                "lat": 10.778051230141877,
                "lon": 106.70205384496968,
                "floor": 0,
                "venueId": "5c4111f09c78c8001556e7d8",
                "placeId": "5c4113e02ddb280015e3a9fa"
            },
            "distance": 75.9602391619824,
            "traveltime": 58.43095320152493,
            "bounds": [
                10.77801408680255,
                106.70153617858888,
                10.778178583241429,
                106.70205384496968
            ],
            "route": [
                {
                    "floor": 0,
                    "path": [
                        [
                            10.778110515231079,
                            106.70153617858888
                        ],
                        [
                            10.778178583241429,
                            106.70159026981764
                        ],
                        [
                            10.778103488840145,
                            106.70168414713318
                        ],
                        [
                            10.77817726579596,
                            106.70175656677657
                        ],
                        [
                            10.778142868830447,
                            106.70179457119544
                        ],
                        [
                            10.77809621975641,
                            106.7018461126882
                        ],
                        [
                            10.77801408680255,
                            106.70193685950655
                        ],
                        [
                            10.778056939071519,
                            106.70197516672944
                        ],
                        [
                            10.778051230141877,
                            106.70205384496968
                        ]
                    ],
                    "timeToEnd": 58.43095320152492,
                    "distance": 75.9602391619824,
                    "traveltime": 58.43095320152492,
                    "bounds": [
                        10.77801408680255,
                        106.70153617858888,
                        10.778178583241429,
                        106.70205384496968
                    ],
                    "isStart": true,
                    "fromFloor": null,
                    "isEnd": true,
                    "toFloor": null
                }
            ]
        }
    ],
    "distance": 75.9602391619824,
    "route": [
        {
            "floor": 0,
            "path": [
                [
                    10.778110515231079,
                    106.70153617858888
                ],
                [
                    10.778178583241429,
                    106.70159026981764
                ],
                [
                    10.778103488840145,
                    106.70168414713318
                ],
                [
                    10.77817726579596,
                    106.70175656677657
                ],
                [
                    10.778142868830447,
                    106.70179457119544
                ],
                [
                    10.77809621975641,
                    106.7018461126882
                ],
                [
                    10.77801408680255,
                    106.70193685950655
                ],
                [
                    10.778056939071519,
                    106.70197516672944
                ],
                [
                    10.778051230141877,
                    106.70205384496968
                ]
            ],
            "timeToEnd": 58.43095320152492,
            "distance": 75.9602391619824,
            "traveltime": 58.43095320152492,
            "bounds": [
                10.77801408680255,
                106.70153617858888,
                10.778178583241429,
                106.70205384496968
            ],
            "isStart": true,
            "fromFloor": null,
            "isEnd": true,
            "toFloor": null
        }
    ],
    "traveltime": 58.43095320152493,
    "bounds": [
        10.77801408680255,
        106.70153617858888,
        10.778178583241429,
        106.70205384496968
    ],
    "waypoints": []
}`;

const mockLayers = `[
  {
      "_id": "5c4112082ddb280015e3a9e7",
      "access": {
          "accessGroups": [
              "5c402a8a9c78c8001556db57"
          ],
          "isPublic": false
      },
      "type": "Tiles",
      "isPublished": true,
      "order": 0,
      "sourceId": null,
      "universes": [
          "5c402a8a9c78c8001556db54"
      ],
      "floor": 0,
      "name": "Ground",
      "venueId": "5c4111f09c78c8001556e7d8",
      "owner": "5c402a869c78c8001556db52",
      "hash": "e9b37337f2f64cc1d08eae2dc8d1b6c7",
      "venue": {
          "_id": "5c4111f09c78c8001556e7d8",
          "name": "Vincom sample",
          "translations": [
              {
                  "_id": "5c4111f09c78c8001556e7d9",
                  "title": "Sample venue",
                  "details": "",
                  "language": "en",
                  "hasDetails": false
              }
          ],
          "isPublished": true,
          "geometry": {
              "coordinates": [
                  [
                      [
                          106.70142978440711,
                          10.778181218132376
                      ],
                      [
                          106.70182317495347,
                          10.778625635965788
                      ],
                      [
                          106.70244187122081,
                          10.778082848748015
                      ],
                      [
                          106.7020431160927,
                          10.777645456394296
                      ],
                      [
                          106.70142978440711,
                          10.778181218132376
                      ]
                  ]
              ],
              "type": "Polygon"
          },
          "defaultLanguage": "en"
      },
      "created": "2019-01-17T23:38:48.675Z",
      "updated": "2019-01-17T23:42:58.780Z",
      "geometry": {
          "type": "Polygon",
          "coordinates": [
              [
                  [
                      106.7020403268885,
                      10.77763772435826
                  ],
                  [
                      106.70142441982537,
                      10.778189122805038
                  ],
                  [
                      106.70169721796127,
                      10.778483179623311
                  ],
                  [
                      106.70231312502439,
                      10.777931781715257
                  ],
                  [
                      106.7020403268885,
                      10.77763772435826
                  ]
              ]
          ]
      },
      "importJob": {
          "corners": [
              {
                  "lat": 10.77763772435826,
                  "lng": 106.7020403268885
              },
              {
                  "lat": 10.778189122805038,
                  "lng": 106.70142441982537
              },
              {
                  "lat": 10.777931781715257,
                  "lng": 106.70231312502439
              },
              {
                  "lat": 10.778483179623311,
                  "lng": 106.70169721796127
              }
          ],
          "markers": {
              "topRight": {
                  "lat": 10.778189122805026,
                  "lng": 106.70142441982537
              },
              "bottomLeft": {
                  "lat": 10.777931781715257,
                  "lng": 106.70231312502439
              }
          },
          "imageURL": "https://mapwizecdn2.azureedge.net/layers/5c4112082ddb280015e3a9e7/e9b37337f2f64cc1d08eae2dc8d1b6c7/imports/2019-01-17T23:42:35.588Z-Capture.PNG",
          "destPath": "5c4112082ddb280015e3a9e7/e9b37337f2f64cc1d08eae2dc8d1b6c7/imports/2019-01-17T23:42:35.588Z-Capture.PNG",
          "jobid": "10184"
      },
      "longitudeMin": 106.70142441982537,
      "latitudeMin": 10.77763772435826,
      "longitudeMax": 106.70231312502439,
      "latitudeMax": 10.778483179623311,
      "tilesMaxZoom": 23,
      "tilesUrlTemplate": "https://mapwizecdn2.azureedge.net/layers/5c4112082ddb280015e3a9e7/e9b37337f2f64cc1d08eae2dc8d1b6c7/tiles/8e6c51a135f8825e80d51cf199dc7264/{z}/{x}/{y}.png"
  },
  {
      "_id": "5c4113129c78c8001556e7e1",
      "access": {
          "accessGroups": [
              "5c402a8a9c78c8001556db57"
          ],
          "isPublic": false
      },
      "type": "Tiles",
      "isPublished": true,
      "order": 0,
      "sourceId": null,
      "universes": [
          "5c402a8a9c78c8001556db54"
      ],
      "floor": 1,
      "name": "Floor 1",
      "venueId": "5c4111f09c78c8001556e7d8",
      "owner": "5c402a869c78c8001556db52",
      "hash": "6d20d6acf550be6248234e04ffe63998",
      "venue": {
          "_id": "5c4111f09c78c8001556e7d8",
          "name": "Vincom sample",
          "translations": [
              {
                  "_id": "5c4111f09c78c8001556e7d9",
                  "title": "Sample venue",
                  "details": "",
                  "language": "en",
                  "hasDetails": false
              }
          ],
          "isPublished": true,
          "geometry": {
              "coordinates": [
                  [
                      [
                          106.70142978440711,
                          10.778181218132376
                      ],
                      [
                          106.70182317495347,
                          10.778625635965788
                      ],
                      [
                          106.70244187122081,
                          10.778082848748015
                      ],
                      [
                          106.7020431160927,
                          10.777645456394296
                      ],
                      [
                          106.70142978440711,
                          10.778181218132376
                      ]
                  ]
              ],
              "type": "Polygon"
          },
          "defaultLanguage": "en"
      },
      "created": "2019-01-17T23:43:14.599Z",
      "updated": "2019-01-17T23:48:44.083Z",
      "geometry": {
          "type": "Polygon",
          "coordinates": [
              [
                  [
                      106.70203792272794,
                      10.777642220003031
                  ],
                  [
                      106.70142795184802,
                      10.778186180665703
                  ],
                  [
                      106.70169707022518,
                      10.778477403334726
                  ],
                  [
                      106.7023070411051,
                      10.777933443198386
                  ],
                  [
                      106.70203792272794,
                      10.777642220003031
                  ]
              ]
          ]
      },
      "importJob": {
          "corners": [
              {
                  "lat": 10.777642220003031,
                  "lng": 106.70203792272794
              },
              {
                  "lat": 10.778186180665703,
                  "lng": 106.70142795184802
              },
              {
                  "lat": 10.777933443198386,
                  "lng": 106.7023070411051
              },
              {
                  "lat": 10.778477403334726,
                  "lng": 106.70169707022518
              }
          ],
          "markers": {
              "topRight": {
                  "lat": 10.77818618066569,
                  "lng": 106.70142795184802
              },
              "bottomLeft": {
                  "lat": 10.777933443198373,
                  "lng": 106.7023070411051
              }
          },
          "destPath": "5c4113129c78c8001556e7e1/6d20d6acf550be6248234e04ffe63998/imports/2019-01-17T23:43:47.134Z-Capture.PNG",
          "imageURL": "https://mapwizecdn2.azureedge.net/layers/5c4113129c78c8001556e7e1/6d20d6acf550be6248234e04ffe63998/imports/2019-01-17T23:43:47.134Z-Capture.PNG",
          "jobid": "10186"
      },
      "longitudeMin": 106.70142795184802,
      "latitudeMin": 10.777642220003031,
      "longitudeMax": 106.7023070411051,
      "latitudeMax": 10.778477403334726,
      "tilesMaxZoom": 23,
      "tilesUrlTemplate": "https://mapwizecdn2.azureedge.net/layers/5c4113129c78c8001556e7e1/6d20d6acf550be6248234e04ffe63998/tiles/64990e13f0ad7c6f2f012175bc13511c/{z}/{x}/{y}.png"
  },
  {
      "_id": "5c412e0d99794000156b8d8e",
      "access": {
          "accessGroups": [
              "5c402a8a9c78c8001556db57"
          ],
          "isPublic": false
      },
      "type": "Tiles",
      "isPublished": true,
      "order": 0,
      "sourceId": null,
      "universes": [
          "5c402a8a9c78c8001556db54"
      ],
      "floor": 2,
      "name": "Floor 2",
      "venueId": "5c4111f09c78c8001556e7d8",
      "owner": "5c402a869c78c8001556db52",
      "hash": "864b446ee11b2e4a77d3ec664096ead8",
      "venue": {
          "_id": "5c4111f09c78c8001556e7d8",
          "name": "Vincom sample",
          "translations": [
              {
                  "_id": "5c4111f09c78c8001556e7d9",
                  "title": "Sample venue",
                  "details": "",
                  "language": "en",
                  "hasDetails": false
              }
          ],
          "isPublished": true,
          "geometry": {
              "coordinates": [
                  [
                      [
                          106.70142978440711,
                          10.778181218132376
                      ],
                      [
                          106.70182317495347,
                          10.778625635965788
                      ],
                      [
                          106.70244187122081,
                          10.778082848748015
                      ],
                      [
                          106.7020431160927,
                          10.777645456394296
                      ],
                      [
                          106.70142978440711,
                          10.778181218132376
                      ]
                  ]
              ],
              "type": "Polygon"
          },
          "defaultLanguage": "en"
      },
      "created": "2019-01-18T01:38:21.574Z",
      "updated": "2019-01-18T01:38:57.513Z",
      "geometry": {
          "type": "Polygon",
          "coordinates": [
              [
                  [
                      106.70204111059525,
                      10.777639459956315
                  ],
                  [
                      106.7014306782585,
                      10.778183853023272
                  ],
                  [
                      106.70170001056051,
                      10.778475296010997
                  ],
                  [
                      106.70231044289723,
                      10.77793090347116
                  ],
                  [
                      106.70204111059525,
                      10.777639459956315
                  ]
              ]
          ]
      },
      "importJob": {
          "corners": [
              {
                  "lat": 10.777639459956315,
                  "lng": 106.70204111059525
              },
              {
                  "lat": 10.778183853023272,
                  "lng": 106.7014306782585
              },
              {
                  "lat": 10.77793090347116,
                  "lng": 106.70231044289723
              },
              {
                  "lat": 10.778475296010997,
                  "lng": 106.70170001056051
              }
          ],
          "markers": {
              "topRight": {
                  "lat": 10.778183853023272,
                  "lng": 106.7014306782585
              },
              "bottomLeft": {
                  "lat": 10.77793090347116,
                  "lng": 106.70231044289723
              }
          },
          "imageURL": "https://mapwizecdn2.azureedge.net/layers/5c412e0d99794000156b8d8e/864b446ee11b2e4a77d3ec664096ead8/imports/2019-01-18T01:38:57.208Z-Capture.PNG",
          "destPath": "5c412e0d99794000156b8d8e/864b446ee11b2e4a77d3ec664096ead8/imports/2019-01-18T01:38:57.208Z-Capture.PNG",
          "jobid": "10187"
      },
      "longitudeMin": 106.7014306782585,
      "latitudeMin": 10.777639459956315,
      "longitudeMax": 106.70231044289723,
      "latitudeMax": 10.778475296010997,
      "tilesMaxZoom": 23,
      "tilesUrlTemplate": "https://mapwizecdn2.azureedge.net/layers/5c412e0d99794000156b8d8e/864b446ee11b2e4a77d3ec664096ead8/tiles/5d888ad7bf11fc580e7432bf8147d6d8/{z}/{x}/{y}.png"
  },
  {
      "_id": "5c41461d2ddb280015e3ab3a",
      "access": {
          "accessGroups": [
              "5c402a8a9c78c8001556db57"
          ],
          "isPublic": false
      },
      "type": "Tiles",
      "isPublished": true,
      "order": 0,
      "sourceId": null,
      "universes": [
          "5c402a8a9c78c8001556db54"
      ],
      "floor": 3,
      "name": "Leve 3",
      "venueId": "5c4111f09c78c8001556e7d8",
      "owner": "5c402a869c78c8001556db52",
      "hash": "0aecf2b22d2134a1a6d1272fcd1a3a20",
      "venue": {
          "_id": "5c4111f09c78c8001556e7d8",
          "name": "Vincom sample",
          "translations": [
              {
                  "_id": "5c4111f09c78c8001556e7d9",
                  "title": "Sample venue",
                  "details": "",
                  "language": "en",
                  "hasDetails": false
              }
          ],
          "isPublished": true,
          "geometry": {
              "coordinates": [
                  [
                      [
                          106.70142978440711,
                          10.778181218132376
                      ],
                      [
                          106.70182317495347,
                          10.778625635965788
                      ],
                      [
                          106.70244187122081,
                          10.778082848748015
                      ],
                      [
                          106.7020431160927,
                          10.777645456394296
                      ],
                      [
                          106.70142978440711,
                          10.778181218132376
                      ]
                  ]
              ],
              "type": "Polygon"
          },
          "defaultLanguage": "en"
      },
      "created": "2019-01-18T03:21:01.124Z",
      "updated": "2019-01-18T03:21:42.315Z",
      "geometry": {
          "type": "Polygon",
          "coordinates": [
              [
                  [
                      106.7020463126154,
                      10.777640686035147
                  ],
                  [
                      106.70141637319831,
                      10.778192636019634
                  ],
                  [
                      106.70168944420419,
                      10.778493392395958
                  ],
                  [
                      106.70231938362123,
                      10.777941442963018
                  ],
                  [
                      106.7020463126154,
                      10.777640686035147
                  ]
              ]
          ]
      },
      "importJob": {
          "corners": [
              {
                  "lat": 10.777640686035147,
                  "lng": 106.7020463126154
              },
              {
                  "lat": 10.778192636019634,
                  "lng": 106.70141637319831
              },
              {
                  "lat": 10.777941442963018,
                  "lng": 106.70231938362123
              },
              {
                  "lat": 10.778493392395958,
                  "lng": 106.70168944420419
              }
          ],
          "markers": {
              "topRight": {
                  "lat": 10.778192636019622,
                  "lng": 106.70141637319831
              },
              "bottomLeft": {
                  "lat": 10.777941442963018,
                  "lng": 106.70231938362123
              }
          },
          "imageURL": "https://mapwizecdn2.azureedge.net/layers/5c41461d2ddb280015e3ab3a/0aecf2b22d2134a1a6d1272fcd1a3a20/imports/2019-01-18T03:21:36.610Z-Capture.PNG",
          "destPath": "5c41461d2ddb280015e3ab3a/0aecf2b22d2134a1a6d1272fcd1a3a20/imports/2019-01-18T03:21:36.610Z-Capture.PNG",
          "jobid": "10188"
      },
      "longitudeMin": 106.70141637319831,
      "latitudeMin": 10.777640686035147,
      "longitudeMax": 106.70231938362123,
      "latitudeMax": 10.778493392395958,
      "tilesMaxZoom": 23,
      "tilesUrlTemplate": "https://mapwizecdn2.azureedge.net/layers/5c41461d2ddb280015e3ab3a/0aecf2b22d2134a1a6d1272fcd1a3a20/tiles/0aaa80a744e51da8c546ccd277a87d83/{z}/{x}/{y}.png"
  }
]`;

const mockPlaces = `[
  {
      "_id": "5c41467931a54f0015cadb52",
      "geometry": {
          "coordinates": [
              [
                  [
                      106.7017342150075,
                      10.777945834464749
                  ],
                  [
                      106.70188888911528,
                      10.777812333217533
                  ],
                  [
                      106.70199349526685,
                      10.777923876995636
                  ],
                  [
                      106.70183703308795,
                      10.778055621665708
                  ],
                  [
                      106.7017342150075,
                      10.777945834464749
                  ]
              ]
          ],
          "type": "Polygon"
      },
      "editor": {
          "customMarker": false,
          "customEntrance": false
      },
      "access": {
          "accessGroups": [
              "5c402a8a9c78c8001556db57"
          ],
          "isPublic": false
      },
      "order": 0,
      "isPublished": true,
      "isSearchable": true,
      "isVisible": true,
      "isClickable": true,
      "tags": [],
      "sourceId": null,
      "universes": [
          "5c402a8a9c78c8001556db54"
      ],
      "name": "Reception",
      "floor": 3,
      "marker": {
          "latitude": 10.77793397744162,
          "longitude": 106.70186385513718
      },
      "entrance": {
          "latitude": 10.77793397744162,
          "longitude": 106.70186385513718
      },
      "placeTypeId": "566169509bdf600b008e1f1f",
      "style": {
          "markerDisplay": true
      },
      "owner": "5c402a869c78c8001556db52",
      "venueId": "5c4111f09c78c8001556e7d8",
      "translations": [
          {
              "_id": "5c41467931a54f0015cadb53",
              "title": "Reception",
              "details": "",
              "language": "en",
              "hasDetails": false
          }
      ],
      "venue": {
          "_id": "5c4111f09c78c8001556e7d8",
          "name": "Vincom sample",
          "translations": [
              {
                  "_id": "5c4111f09c78c8001556e7d9",
                  "title": "Sample venue",
                  "details": "",
                  "language": "en",
                  "hasDetails": false
              }
          ],
          "isPublished": true,
          "geometry": {
              "coordinates": [
                  [
                      [
                          106.70142978440711,
                          10.778181218132376
                      ],
                      [
                          106.70182317495347,
                          10.778625635965788
                      ],
                      [
                          106.70244187122081,
                          10.778082848748015
                      ],
                      [
                          106.7020431160927,
                          10.777645456394296
                      ],
                      [
                          106.70142978440711,
                          10.778181218132376
                      ]
                  ]
              ],
              "type": "Polygon"
          },
          "defaultLanguage": "en"
      },
      "placeType": {
          "_id": "566169509bdf600b008e1f1f",
          "name": "Bakery",
          "translations": [
              {
                  "title": "",
                  "details": "",
                  "language": "",
                  "_id": "566169509bdf600b008e1f20"
              }
          ],
          "style": {
              "strokeOpacity": 0.5,
              "fillOpacity": 0.2,
              "strokeColor": "#d0b497",
              "fillColor": "#d0b497",
              "strokeWidth": 1,
              "markerUrl": "https://mapwizecdn2.azureedge.net/placetypes/30/backeries.png"
          }
      },
      "alias": "reception",
      "created": "2019-01-18T03:22:33.905Z",
      "updated": "2019-01-18T03:22:33.905Z",
      "latitudeMin": 10.777812333217533,
      "longitudeMin": 106.7017342150075,
      "latitudeMax": 10.778055621665708,
      "longitudeMax": 106.70199349526685,
      "cache": {
          "30": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVRIx8VXwUoDQQztJ/UT+in9lP6FN3vx5qEIHvSgBUE89KKiKAVdUAoFi1CRQkUY9y3zyps0u25tZQOh7EySl2SSzLTVqkkhhHbOvZwHOQ8ND+Jeu7Uryo11c85CpOXiI3zOJgljTQiy3W0AOwSE4cn9ZXg4Owg3x3suYw8y4gR0O5uCIm3h+2sZXq7PS8HKGDrQjdSrC9qHNFJ4d7q/MSgZurARqV8r0vfXxz8DWoatysjjmRZe7gqULJF3POAM57JNeqvSHs8881qmspCwZ9vI8m/6kbpJtGiDKq+lSgPrgEfDPfxW2YitlulEKnrQpgeCbKnFfFZwGT1dHRX7bCXo2r4HRqT2qpJVCKAKwgGiIJaQATNAChtaM8BYVTjmrE2ztMCKFNhGPp9micx0PEocctI9APBQW4jR0HMoInUwroBvz7dr4HTAOwbTWsNSYI80Ej0G3eO3OlYLGKxKemY2SqWyPaw7w8QHZl8q4RupZjrVIayxA6yOZ5vASXFpqgFkjXnnaNego/WQjU7c4kraCUaQHkZkwW0muEZ5C4o92PTaKRkgNKwTCYZsf3qOQMYbMkx3MkDsyLSVi9RjCMBbgmif6+iEDGTHF4dr3bA2Mu0lAUWkpmzowyinG6eSd6PhXJlm7LuXRGPXYqMPgcaePo0+9hp93jb6oG/0L8x//2n7AVm+EheZKvl+AAAAAElFTkSuQmCC"
      }
  },
  {
      "_id": "5c412e95ad841b00154a9935",
      "geometry": {
          "coordinates": [
              [
                  [
                      106.70145124199738,
                      10.778187585798758
                  ],
                  [
                      106.7015106976237,
                      10.778250384011107
                  ],
                  [
                      106.70154199007587,
                      10.778222717661524
                  ],
                  [
                      106.70148164037302,
                      10.778159919423299
                  ],
                  [
                      106.70145124199738,
                      10.778187585798758
                  ]
              ]
          ],
          "type": "Polygon"
      },
      "editor": {
          "customMarker": false,
          "customEntrance": false
      },
      "access": {
          "accessGroups": [
              "5c402a8a9c78c8001556db57"
          ],
          "isPublic": false
      },
      "order": 0,
      "isPublished": true,
      "isSearchable": true,
      "isVisible": true,
      "isClickable": true,
      "tags": [],
      "sourceId": null,
      "universes": [
          "5c402a8a9c78c8001556db54"
      ],
      "name": "Storage lv2",
      "floor": 2,
      "marker": {
          "latitude": 10.778205151717202,
          "longitude": 106.70149661603662
      },
      "entrance": {
          "latitude": 10.778205151717202,
          "longitude": 106.70149661603662
      },
      "placeTypeId": "55e95212db99cc0b00adc56d",
      "style": {
          "markerDisplay": true
      },
      "owner": "5c402a869c78c8001556db52",
      "venueId": "5c4111f09c78c8001556e7d8",
      "translations": [
          {
              "_id": "5c412e95ad841b00154a9936",
              "title": "Storage lv2",
              "details": "",
              "language": "en",
              "hasDetails": false
          }
      ],
      "venue": {
          "_id": "5c4111f09c78c8001556e7d8",
          "name": "Vincom sample",
          "translations": [
              {
                  "_id": "5c4111f09c78c8001556e7d9",
                  "title": "Sample venue",
                  "details": "",
                  "language": "en",
                  "hasDetails": false
              }
          ],
          "isPublished": true,
          "geometry": {
              "coordinates": [
                  [
                      [
                          106.70142978440711,
                          10.778181218132376
                      ],
                      [
                          106.70182317495347,
                          10.778625635965788
                      ],
                      [
                          106.70244187122081,
                          10.778082848748015
                      ],
                      [
                          106.7020431160927,
                          10.777645456394296
                      ],
                      [
                          106.70142978440711,
                          10.778181218132376
                      ]
                  ]
              ],
              "type": "Polygon"
          },
          "defaultLanguage": "en"
      },
      "placeType": {
          "_id": "55e95212db99cc0b00adc56d",
          "name": "Room",
          "translations": [
              {
                  "title": "Room",
                  "details": "",
                  "language": "",
                  "_id": "55e95212db99cc0b00adc56e"
              }
          ],
          "style": {
              "fillOpacity": 0.1,
              "fillColor": "#8b72a2",
              "markerUrl": "https://mapwize.blob.core.windows.net/placetypes/30/room.png",
              "strokeWidth": 1,
              "strokeOpacity": 0.5,
              "strokeColor": "#8b72a2"
          }
      },
      "alias": "storage_lv2",
      "created": "2019-01-18T01:40:37.425Z",
      "updated": "2019-01-18T01:40:37.425Z",
      "latitudeMin": 10.778159919423299,
      "longitudeMin": 106.70145124199738,
      "latitudeMax": 10.778250384011107,
      "longitudeMax": 106.70154199007587,
      "cache": {
          "30": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsSAAALEgHS3X78AAABvUlEQVRIx8VXvUrEQBDOI6S3SWt3pWUq6xQ+QPAJ7hHO0sLCSkTwECxEi2B3XaxEsIiIhaUgYiMEbcRq3G/ZDWN+NrveJhn44LjszLczOz+7QWApRBQKJAILgaVArrBU/+FbGPgSYSwWyIjJz+c3vd2+SOB3TbA2XocwUh5Jeb58oNXuBZ1u7tPRxt4f4D98wxom0I1cSRG2EtqPJ3etZF3AWugogY3EljSFxtdrSVfbx9aEdUAXNpSkNp7Sx9O7k5cm72FLSWI60xK79EHKyZXnZeuZ60RaJ7ymsOuEaysZuj+48U6qAdtKYk6coR59hrgt5KrmM96RZA2aFFsaRUOwxmSD1XlYlQ8agEnJVkw2wFGVl+qzvaHyQczsLGQ2o9bGIlZ1nUtiNPuxiME1PfFUoZ4suWQ5Xe+cDU4MDl5OkZ67QzcQNqejakD0tczzrUO5YxOwxqJl5o05PNKQSBtjETsaaiw2vGXEM5+3j45byMx43xro6pNaXfagYEqWPkDXmrROjnP5T8JBh5Vf6nq3xpkXegOoQVPi4RvWMMKi80wdvC94o9DPF42aFM5eWjxp5rUHG3+4zV2eLL/SaxnLIxHfTwAAAABJRU5ErkJggg=="
      }
  },
  {
      "_id": "5c4114c22ddb280015e3aa04",
      "geometry": {
          "coordinates": [
              [
                  [
                      106.70187792085473,
                      10.777796018873682
                  ],
                  [
                      106.70198648937914,
                      10.7779217962116
                  ],
                  [
                      106.70215271160488,
                      10.777769539342776
                  ],
                  [
                      106.70203590675557,
                      10.777648175158188
                  ],
                  [
                      106.70187792085473,
                      10.777796018873682
                  ]
              ]
          ],
          "type": "Polygon"
      },
      "editor": {
          "customMarker": false,
          "customEntrance": false
      },
      "access": {
          "accessGroups": [
              "5c402a8a9c78c8001556db57"
          ],
          "isPublic": false
      },
      "order": 0,
      "isPublished": true,
      "isSearchable": true,
      "isVisible": true,
      "isClickable": true,
      "tags": [],
      "sourceId": null,
      "universes": [
          "5c402a8a9c78c8001556db54"
      ],
      "name": "Office 4",
      "floor": 1,
      "marker": {
          "latitude": 10.777784985684894,
          "longitude": 106.7020153162298
      },
      "entrance": {
          "latitude": 10.777784985684894,
          "longitude": 106.7020153162298
      },
      "placeTypeId": "5672817fb9aa810b004171a0",
      "style": {
          "markerDisplay": true
      },
      "owner": "5c402a869c78c8001556db52",
      "venueId": "5c4111f09c78c8001556e7d8",
      "translations": [
          {
              "_id": "5c4114c22ddb280015e3aa05",
              "title": "Office 4",
              "details": "",
              "language": "en",
              "hasDetails": false
          }
      ],
      "venue": {
          "_id": "5c4111f09c78c8001556e7d8",
          "name": "Vincom sample",
          "translations": [
              {
                  "_id": "5c4111f09c78c8001556e7d9",
                  "title": "Sample venue",
                  "details": "",
                  "language": "en",
                  "hasDetails": false
              }
          ],
          "isPublished": true,
          "geometry": {
              "coordinates": [
                  [
                      [
                          106.70142978440711,
                          10.778181218132376
                      ],
                      [
                          106.70182317495347,
                          10.778625635965788
                      ],
                      [
                          106.70244187122081,
                          10.778082848748015
                      ],
                      [
                          106.7020431160927,
                          10.777645456394296
                      ],
                      [
                          106.70142978440711,
                          10.778181218132376
                      ]
                  ]
              ],
              "type": "Polygon"
          },
          "defaultLanguage": "en"
      },
      "placeType": {
          "_id": "5672817fb9aa810b004171a0",
          "name": "Office 2",
          "translations": [
              {
                  "title": "",
                  "details": "",
                  "language": "",
                  "_id": "5672817fb9aa810b004171a1"
              }
          ],
          "style": {
              "strokeOpacity": 0.5,
              "fillOpacity": 0.2,
              "strokeColor": "#899CB5",
              "fillColor": "#899CB5",
              "strokeWidth": 1,
              "markerUrl": "https://mapwizecdn2.azureedge.net/placetypes/30/office-2.png"
          }
      },
      "alias": "office_4",
      "created": "2019-01-17T23:50:26.621Z",
      "updated": "2019-01-17T23:50:26.621Z",
      "latitudeMin": 10.777648175158188,
      "longitudeMin": 106.70187792085473,
      "latitudeMax": 10.7779217962116,
      "longitudeMax": 106.70215271160488,
      "cache": {
          "30": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsSAAALEgHS3X78AAACPklEQVRIx61XTUrDUBDuEXoEj9Aj5Ag9Qo/QI/QGWbhzE8SFuLEb3YgY6aKggn8LC0IJqKBQsKCCiotnvjBTJsO89CXNwECS99588z8vnU4gOee2ch7mnOScKk5obavTFuXCBjnfOKKf3z/38rYsMb4Jwt7BJoARA358fbuLu8ztH1267b0zk7GGPdgrFIjqgg7ZusnVoxfMxzgjvDAMBUW83OL90+2Op7VBmXEWMoiSIEtn81e3czApBByeXDdWADIgq9JyimmhJR8UGhcKNLVeyIks4AxxYUvBkpA4TYEhk2KeWSXjTqcPPk03shgM2USDkrUoA70ZYG0kGjOVWsagPbxZZYPmIAmJsk6B4/P7gn1lRtQD8AhPWuDt7LnUkaQSePa5HmtVJUY0AvDYcrO2ll0vv8MD8gwS0GetcvcYwKmlpQWsm4Pu2/gG5STLKhFy00bA1rqPdEg2BkYOVEyoVTXowVIbWLtQu9HygJWAJeCQ5LJIlmAoMCVX6i0nCBKztUT8XbbREGBdTmYDQYuDYB7uKB1+54lTF7jUQKpaphQqhQCwCXCpZco5rIdEm8BiSIwkcNcai20By7EILD0a+1iZPy1Wm7lsUI+ID99GOFahWQ2ZRH3fLSSWVx+rdjn7dfzQKKw6F1efOOiyBy0tt9e5dQhLk9CbZsz1um7a+Gay6AFx3bs1Yr7knousrPIA1rBHXJeW3pgGgHeps2Wy8SORuJnwOBSU0ZluW/9QEQlM5b8UPae0FvzL8g+A661l+7+GaQAAAABJRU5ErkJggg=="
      }
  },
  {
      "_id": "5c4113719c78c8001556e7e2",
      "geometry": {
          "coordinates": [
              106.70153617858888,
              10.778110515231079
          ],
          "type": "Point"
      },
      "editor": {
          "customMarker": false,
          "customEntrance": false
      },
      "access": {
          "accessGroups": [
              "5c402a8a9c78c8001556db57"
          ],
          "isPublic": false
      },
      "order": 1,
      "isPublished": true,
      "isSearchable": true,
      "isVisible": true,
      "isClickable": true,
      "tags": [],
      "sourceId": null,
      "universes": [
          "5c402a8a9c78c8001556db54"
      ],
      "name": "Entrance",
      "floor": 0,
      "marker": {
          "latitude": 10.778110515231079,
          "longitude": 106.70153617858888
      },
      "entrance": {
          "latitude": 10.778110515231079,
          "longitude": 106.70153617858888
      },
      "placeTypeId": "57d918f706c9900b007293a4",
      "style": {
          "markerDisplay": true
      },
      "owner": "5c402a869c78c8001556db52",
      "venueId": "5c4111f09c78c8001556e7d8",
      "translations": [
          {
              "_id": "5c4113719c78c8001556e7e3",
              "title": "Entrance",
              "details": "",
              "language": "en",
              "hasDetails": false
          }
      ],
      "venue": {
          "_id": "5c4111f09c78c8001556e7d8",
          "name": "Vincom sample",
          "translations": [
              {
                  "_id": "5c4111f09c78c8001556e7d9",
                  "title": "Sample venue",
                  "details": "",
                  "language": "en",
                  "hasDetails": false
              }
          ],
          "isPublished": true,
          "geometry": {
              "coordinates": [
                  [
                      [
                          106.70142978440711,
                          10.778181218132376
                      ],
                      [
                          106.70182317495347,
                          10.778625635965788
                      ],
                      [
                          106.70244187122081,
                          10.778082848748015
                      ],
                      [
                          106.7020431160927,
                          10.777645456394296
                      ],
                      [
                          106.70142978440711,
                          10.778181218132376
                      ]
                  ]
              ],
              "type": "Polygon"
          },
          "defaultLanguage": "en"
      },
      "placeType": {
          "_id": "57d918f706c9900b007293a4",
          "name": "Entrance-Exit",
          "translations": [
              {
                  "title": "",
                  "details": "",
                  "language": "",
                  "_id": "57d918f706c9900b007293a5"
              }
          ],
          "style": {
              "strokeOpacity": 0.5,
              "fillOpacity": 0.2,
              "strokeColor": "#5AA971",
              "fillColor": "#5AA971",
              "strokeWidth": 1,
              "markerUrl": "https://mapwizecdn2.azureedge.net/placetypes/30/e-e.png"
          }
      },
      "alias": "entrance",
      "created": "2019-01-17T23:44:49.095Z",
      "updated": "2019-01-22T10:10:47.848Z",
      "latitudeMin": 10.778110515231079,
      "longitudeMin": 106.70153617858888,
      "latitudeMax": 10.778110515231079,
      "longitudeMax": 106.70153617858888,
      "cache": {
          "30": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsSAAALEgHS3X78AAACDElEQVRIx62Xv0oDQRDG8wh5hDxCHiGPYGcbBDvBdFpG60AqbYONCAqHFrEJRASxENlCBG2MaKWI15jCar3vmDnGvb292+wOfGCQ29/s3Py7VsvDtNZrmYaZkkxzoUmmQaZuK5Zlh3Xo4FSTff586ceP50LL36UWtiDn2qsC25nGfNrdu9Kj6wO9cbat1483S9o639VH9yf69fuNH4GjA19olzzPgTjUBqvS3myUR4UsaXR7gqYIH27oAzR19XLDcOWES+jO5X4QlHV4O2H43AVWMaGs04cLhg9tUGRiniDmg3BEZu70aeYNR/aTdc0MTvHPOij+xg2aCGGWWV8KOd8W2eiC+pp5EZFsHQYvUH9mXYZAbWBx6zF3pjw0jnKIAoaowSjuv6Uwx4DbwEhMWPF+q1qhCQ8tN1TNP3CTB2zZ6itE1gtcJUQKh7Hq+no0sO+r4BYKcL+qhuXMrZM0F5zbJw+GUqvkkKxqVXByUhUNxEz9UDDPcjMfigZC4HzTkIkRCkajMEtUTKme3KvyJInxjm1Q/KYWrMyxOHF1sKZZbYPKjlXc1hyN8MrVxerq2Pas2EKSqg2k5/J6FYnRWrt39RkeugKJm6aNln2Cp7xt+AJRHSglsWF2fHfrOX85wIG6PowIGWN0HPJF0eflnp3AbXhSIVstnzFJtO8oisCQorAw+oUi2KBpWP8AmBfnvPg63N4AAAAASUVORK5CYII="
      }
  },
  {
      "_id": "5c4113e02ddb280015e3a9fa",
      "geometry": {
          "coordinates": [
              [
                  [
                      106.70193403962004,
                      10.77805737823359
                  ],
                  [
                      106.70203596356261,
                      10.778170678568499
                  ],
                  [
                      106.70217365031932,
                      10.778046838665375
                  ],
                  [
                      106.70207530268273,
                      10.777931781715257
                  ],
                  [
                      106.70193403962004,
                      10.77805737823359
                  ]
              ]
          ],
          "type": "Polygon"
      },
      "editor": {
          "customMarker": false,
          "customEntrance": false
      },
      "access": {
          "accessGroups": [
              "5c402a8a9c78c8001556db57"
          ],
          "isPublic": false
      },
      "order": 2,
      "isPublished": true,
      "isSearchable": true,
      "isVisible": true,
      "isClickable": true,
      "tags": [],
      "sourceId": null,
      "universes": [
          "5c402a8a9c78c8001556db54"
      ],
      "name": "Office 2",
      "floor": 0,
      "marker": {
          "latitude": 10.778051230141877,
          "longitude": 106.70205384496968
      },
      "entrance": {
          "latitude": 10.778051230141877,
          "longitude": 106.70205384496968
      },
      "placeTypeId": "56616a3f9bdf600b008e1f2d",
      "style": {
          "markerDisplay": true
      },
      "owner": "5c402a869c78c8001556db52",
      "venueId": "5c4111f09c78c8001556e7d8",
      "translations": [
          {
              "_id": "5c4113e02ddb280015e3a9fb",
              "title": "Office 2",
              "details": "",
              "language": "en",
              "hasDetails": false
          }
      ],
      "venue": {
          "_id": "5c4111f09c78c8001556e7d8",
          "name": "Vincom sample",
          "translations": [
              {
                  "_id": "5c4111f09c78c8001556e7d9",
                  "title": "Sample venue",
                  "details": "",
                  "language": "en",
                  "hasDetails": false
              }
          ],
          "isPublished": true,
          "geometry": {
              "coordinates": [
                  [
                      [
                          106.70142978440711,
                          10.778181218132376
                      ],
                      [
                          106.70182317495347,
                          10.778625635965788
                      ],
                      [
                          106.70244187122081,
                          10.778082848748015
                      ],
                      [
                          106.7020431160927,
                          10.777645456394296
                      ],
                      [
                          106.70142978440711,
                          10.778181218132376
                      ]
                  ]
              ],
              "type": "Polygon"
          },
          "defaultLanguage": "en"
      },
      "placeType": {
          "_id": "56616a3f9bdf600b008e1f2d",
          "name": "Office",
          "translations": [
              {
                  "title": "",
                  "details": "",
                  "language": "",
                  "_id": "56616a3f9bdf600b008e1f2e"
              }
          ],
          "style": {
              "strokeOpacity": 0.5,
              "fillOpacity": 0.2,
              "strokeColor": "#706655",
              "fillColor": "#706655",
              "strokeWidth": 1,
              "markerUrl": "https://mapwizecdn2.azureedge.net/placetypes/30/office.png"
          }
      },
      "alias": "office_2",
      "created": "2019-01-17T23:46:40.755Z",
      "updated": "2019-01-22T10:10:47.850Z",
      "latitudeMin": 10.777931781715257,
      "longitudeMin": 106.70193403962004,
      "latitudeMax": 10.778170678568499,
      "longitudeMax": 106.70217365031932,
      "cache": {
          "30": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsSAAALEgHS3X78AAAB90lEQVRIx8VXvUoDQRDOI/gIPkIeJZW11oJYaWNxhY0oBIRUIlpoJcEqpPNSCVooCNoIphELQa4RLdf9lp0wt9ndmQvqDQxsyO5+M9/87XU6SjHGdK1uWr20Wka0wJ7Ob4m9bNXqvfHy/fVpXp4fa1p9vBsmU2/E0qKAXQLExVfjC3NQrJudjZWo4r/h2cC8vU7JgMpqbxEvnXej4WkSLKXnR/uchRMtKGhyluc8lHR3e83c3Ux04OQpQHEwden1ZDQLKGKc2yuC+5iKoKA+FFye856B92LAJWIq0fv0cDsHjHhKtPuYV7VsJ4qRuVLsQG0oMFg6d3xY0PZiztscxaQwLhSwoEk4b3RFoMv4hYTRHEYoYCQXeKM5izqfxZpo1h4e7G25vTAUHmCtPQtGvfQB3MdKAgOd5CkyH5QDnCcb1mgeCrpLF19clLMypJZKCJfE/oOhQmlVDhgXKOKilly+UHKKwLG6lSRX1zXgFNUsGZwB4TgMlXWoJN2c6mRy4TD3ookgRFJyZcuJOlUsiUKhWQwjY80oLKdsAyGv2YAXJVVStQaiaZl8DEpJlUvUWsvUDAkYhHEoJRfOp4yPDonUWMSaWmJsDsfql/bzrE6OxdRDADGRvEwpz5nsQ6DJ06eJNnl3/f9jr9XnbasP+lY/Yf76o+0HV1+rZ7sL9uAAAAAASUVORK5CYII="
      }
  }
]`;

export { signin, getLayersFromVanue, getPlacesInVenue, getDirections };
