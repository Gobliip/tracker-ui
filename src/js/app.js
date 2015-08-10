var app = angular.module('tracking-ui', []);

var streamData = [
  {
    "type": "workMetric",
     "data": {
       "start": {
         "epochSecond": 5646565,
         "nano": 0
       }
       "end": {
         "epochSecond": 5646565,
         "nano": 0
       }
       "keyboardStrokes": 50,
       "mouseActions": 50,
       "screenImage": "BASE64JPEGIMAGE"
     }
  }
]

$(function () {

    var data = [
  {
    "id": 12,
    "start": {
      "id": 97,
      "memo": "Started from whisper",
      "type": "START",
      "attachments": [
        {
          "id": 51,
          "status": "AVAILABLE",
          "url": "/attachments/51/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156088
      },
      "trackingId": 31
    },
    "end": {
      "id": 98,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 52,
          "status": "AVAILABLE",
          "url": "/attachments/52/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156090
      },
      "trackingId": 31
    },
    "mouseActionsCount": 2,
    "keyboardActionsCount": 0,
    "parentId": null
  },
  {
    "id": 13,
    "start": {
      "id": 98,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 52,
          "status": "AVAILABLE",
          "url": "/attachments/52/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156090
      },
      "trackingId": 31
    },
    "end": {
      "id": 99,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 53,
          "status": "AVAILABLE",
          "url": "/attachments/53/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156094
      },
      "trackingId": 31
    },
    "mouseActionsCount": 2,
    "keyboardActionsCount": 0,
    "parentId": 12
  },
  {
    "id": 14,
    "start": {
      "id": 99,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 53,
          "status": "AVAILABLE",
          "url": "/attachments/53/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156094
      },
      "trackingId": 31
    },
    "end": {
      "id": 100,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 54,
          "status": "AVAILABLE",
          "url": "/attachments/54/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156104
      },
      "trackingId": 31
    },
    "mouseActionsCount": 1,
    "keyboardActionsCount": 0,
    "parentId": 13
  },
  {
    "id": 15,
    "start": {
      "id": 100,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 54,
          "status": "AVAILABLE",
          "url": "/attachments/54/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156104
      },
      "trackingId": 31
    },
    "end": {
      "id": 101,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 55,
          "status": "AVAILABLE",
          "url": "/attachments/55/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156115
      },
      "trackingId": 31
    },
    "mouseActionsCount": 1,
    "keyboardActionsCount": 0,
    "parentId": 14
  },
  {
    "id": 16,
    "start": {
      "id": 101,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 55,
          "status": "AVAILABLE",
          "url": "/attachments/55/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156115
      },
      "trackingId": 31
    },
    "end": {
      "id": 102,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 56,
          "status": "AVAILABLE",
          "url": "/attachments/56/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156125
      },
      "trackingId": 31
    },
    "mouseActionsCount": 10,
    "keyboardActionsCount": 0,
    "parentId": 15
  },
  {
    "id": 17,
    "start": {
      "id": 102,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 56,
          "status": "AVAILABLE",
          "url": "/attachments/56/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156125
      },
      "trackingId": 31
    },
    "end": {
      "id": 103,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 57,
          "status": "AVAILABLE",
          "url": "/attachments/57/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156136
      },
      "trackingId": 31
    },
    "mouseActionsCount": 4,
    "keyboardActionsCount": 0,
    "parentId": 16
  },
  {
    "id": 18,
    "start": {
      "id": 103,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 57,
          "status": "AVAILABLE",
          "url": "/attachments/57/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156136
      },
      "trackingId": 31
    },
    "end": {
      "id": 104,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 58,
          "status": "AVAILABLE",
          "url": "/attachments/58/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156146
      },
      "trackingId": 31
    },
    "mouseActionsCount": 5,
    "keyboardActionsCount": 0,
    "parentId": 17
  },
  {
    "id": 19,
    "start": {
      "id": 104,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 58,
          "status": "AVAILABLE",
          "url": "/attachments/58/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156146
      },
      "trackingId": 31
    },
    "end": {
      "id": 105,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 59,
          "status": "AVAILABLE",
          "url": "/attachments/59/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156157
      },
      "trackingId": 31
    },
    "mouseActionsCount": 8,
    "keyboardActionsCount": 6,
    "parentId": 18
  },
  {
    "id": 20,
    "start": {
      "id": 105,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 59,
          "status": "AVAILABLE",
          "url": "/attachments/59/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156157
      },
      "trackingId": 31
    },
    "end": {
      "id": 106,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 60,
          "status": "AVAILABLE",
          "url": "/attachments/60/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156167
      },
      "trackingId": 31
    },
    "mouseActionsCount": 9,
    "keyboardActionsCount": 21,
    "parentId": 19
  },
  {
    "id": 21,
    "start": {
      "id": 106,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 60,
          "status": "AVAILABLE",
          "url": "/attachments/60/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156167
      },
      "trackingId": 31
    },
    "end": {
      "id": 107,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 61,
          "status": "AVAILABLE",
          "url": "/attachments/61/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156178
      },
      "trackingId": 31
    },
    "mouseActionsCount": 2,
    "keyboardActionsCount": 11,
    "parentId": 20
  },
  {
    "id": 22,
    "start": {
      "id": 107,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 61,
          "status": "AVAILABLE",
          "url": "/attachments/61/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156178
      },
      "trackingId": 31
    },
    "end": {
      "id": 108,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 62,
          "status": "AVAILABLE",
          "url": "/attachments/62/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156188
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 17,
    "parentId": 21
  },
  {
    "id": 23,
    "start": {
      "id": 108,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 62,
          "status": "AVAILABLE",
          "url": "/attachments/62/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156188
      },
      "trackingId": 31
    },
    "end": {
      "id": 109,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 63,
          "status": "AVAILABLE",
          "url": "/attachments/63/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156199
      },
      "trackingId": 31
    },
    "mouseActionsCount": 2,
    "keyboardActionsCount": 0,
    "parentId": 22
  },
  {
    "id": 24,
    "start": {
      "id": 109,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 63,
          "status": "AVAILABLE",
          "url": "/attachments/63/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156199
      },
      "trackingId": 31
    },
    "end": {
      "id": 110,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 64,
          "status": "AVAILABLE",
          "url": "/attachments/64/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156209
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 0,
    "parentId": 23
  },
  {
    "id": 25,
    "start": {
      "id": 110,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 64,
          "status": "AVAILABLE",
          "url": "/attachments/64/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156209
      },
      "trackingId": 31
    },
    "end": {
      "id": 111,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 65,
          "status": "AVAILABLE",
          "url": "/attachments/65/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156220
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 0,
    "parentId": 24
  },
  {
    "id": 26,
    "start": {
      "id": 111,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 65,
          "status": "AVAILABLE",
          "url": "/attachments/65/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156220
      },
      "trackingId": 31
    },
    "end": {
      "id": 112,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 66,
          "status": "AVAILABLE",
          "url": "/attachments/66/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156230
      },
      "trackingId": 31
    },
    "mouseActionsCount": 5,
    "keyboardActionsCount": 8,
    "parentId": 25
  },
  {
    "id": 27,
    "start": {
      "id": 112,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 66,
          "status": "AVAILABLE",
          "url": "/attachments/66/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156230
      },
      "trackingId": 31
    },
    "end": {
      "id": 113,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 67,
          "status": "AVAILABLE",
          "url": "/attachments/67/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156241
      },
      "trackingId": 31
    },
    "mouseActionsCount": 8,
    "keyboardActionsCount": 0,
    "parentId": 26
  },
  {
    "id": 28,
    "start": {
      "id": 113,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 67,
          "status": "AVAILABLE",
          "url": "/attachments/67/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156241
      },
      "trackingId": 31
    },
    "end": {
      "id": 114,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 68,
          "status": "AVAILABLE",
          "url": "/attachments/68/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156251
      },
      "trackingId": 31
    },
    "mouseActionsCount": 4,
    "keyboardActionsCount": 9,
    "parentId": 27
  },
  {
    "id": 29,
    "start": {
      "id": 114,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 68,
          "status": "AVAILABLE",
          "url": "/attachments/68/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156251
      },
      "trackingId": 31
    },
    "end": {
      "id": 115,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 69,
          "status": "AVAILABLE",
          "url": "/attachments/69/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156262
      },
      "trackingId": 31
    },
    "mouseActionsCount": 2,
    "keyboardActionsCount": 0,
    "parentId": 28
  },
  {
    "id": 30,
    "start": {
      "id": 115,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 69,
          "status": "AVAILABLE",
          "url": "/attachments/69/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156262
      },
      "trackingId": 31
    },
    "end": {
      "id": 116,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 70,
          "status": "AVAILABLE",
          "url": "/attachments/70/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156272
      },
      "trackingId": 31
    },
    "mouseActionsCount": 4,
    "keyboardActionsCount": 29,
    "parentId": 29
  },
  {
    "id": 31,
    "start": {
      "id": 116,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 70,
          "status": "AVAILABLE",
          "url": "/attachments/70/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156272
      },
      "trackingId": 31
    },
    "end": {
      "id": 117,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 71,
          "status": "AVAILABLE",
          "url": "/attachments/71/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156283
      },
      "trackingId": 31
    },
    "mouseActionsCount": 3,
    "keyboardActionsCount": 23,
    "parentId": 30
  },
  {
    "id": 32,
    "start": {
      "id": 117,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 71,
          "status": "AVAILABLE",
          "url": "/attachments/71/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156283
      },
      "trackingId": 31
    },
    "end": {
      "id": 118,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 72,
          "status": "AVAILABLE",
          "url": "/attachments/72/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156293
      },
      "trackingId": 31
    },
    "mouseActionsCount": 2,
    "keyboardActionsCount": 0,
    "parentId": 31
  },
  {
    "id": 33,
    "start": {
      "id": 118,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 72,
          "status": "AVAILABLE",
          "url": "/attachments/72/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156293
      },
      "trackingId": 31
    },
    "end": {
      "id": 119,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 73,
          "status": "AVAILABLE",
          "url": "/attachments/73/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156304
      },
      "trackingId": 31
    },
    "mouseActionsCount": 4,
    "keyboardActionsCount": 0,
    "parentId": 32
  },
  {
    "id": 34,
    "start": {
      "id": 119,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 73,
          "status": "AVAILABLE",
          "url": "/attachments/73/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156304
      },
      "trackingId": 31
    },
    "end": {
      "id": 120,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 74,
          "status": "AVAILABLE",
          "url": "/attachments/74/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156314
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 0,
    "parentId": 33
  },
  {
    "id": 35,
    "start": {
      "id": 120,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 74,
          "status": "AVAILABLE",
          "url": "/attachments/74/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156314
      },
      "trackingId": 31
    },
    "end": {
      "id": 121,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 75,
          "status": "AVAILABLE",
          "url": "/attachments/75/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156325
      },
      "trackingId": 31
    },
    "mouseActionsCount": 6,
    "keyboardActionsCount": 5,
    "parentId": 34
  },
  {
    "id": 36,
    "start": {
      "id": 121,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 75,
          "status": "AVAILABLE",
          "url": "/attachments/75/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156325
      },
      "trackingId": 31
    },
    "end": {
      "id": 122,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 76,
          "status": "AVAILABLE",
          "url": "/attachments/76/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156335
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 25,
    "parentId": 35
  },
  {
    "id": 37,
    "start": {
      "id": 122,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 76,
          "status": "AVAILABLE",
          "url": "/attachments/76/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156335
      },
      "trackingId": 31
    },
    "end": {
      "id": 123,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 77,
          "status": "AVAILABLE",
          "url": "/attachments/77/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156346
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 13,
    "parentId": 36
  },
  {
    "id": 38,
    "start": {
      "id": 123,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 77,
          "status": "AVAILABLE",
          "url": "/attachments/77/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156346
      },
      "trackingId": 31
    },
    "end": {
      "id": 124,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 78,
          "status": "AVAILABLE",
          "url": "/attachments/78/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156356
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 27,
    "parentId": 37
  },
  {
    "id": 39,
    "start": {
      "id": 124,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 78,
          "status": "AVAILABLE",
          "url": "/attachments/78/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156356
      },
      "trackingId": 31
    },
    "end": {
      "id": 125,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 79,
          "status": "AVAILABLE",
          "url": "/attachments/79/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156367
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 44,
    "parentId": 38
  },
  {
    "id": 40,
    "start": {
      "id": 125,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 79,
          "status": "AVAILABLE",
          "url": "/attachments/79/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156367
      },
      "trackingId": 31
    },
    "end": {
      "id": 126,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 80,
          "status": "AVAILABLE",
          "url": "/attachments/80/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156377
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 6,
    "parentId": 39
  },
  {
    "id": 41,
    "start": {
      "id": 126,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 80,
          "status": "AVAILABLE",
          "url": "/attachments/80/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156377
      },
      "trackingId": 31
    },
    "end": {
      "id": 127,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 81,
          "status": "AVAILABLE",
          "url": "/attachments/81/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156388
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 0,
    "parentId": 40
  },
  {
    "id": 42,
    "start": {
      "id": 127,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 81,
          "status": "AVAILABLE",
          "url": "/attachments/81/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156388
      },
      "trackingId": 31
    },
    "end": {
      "id": 128,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 82,
          "status": "AVAILABLE",
          "url": "/attachments/82/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156398
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 0,
    "parentId": 41
  },
  {
    "id": 43,
    "start": {
      "id": 128,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 82,
          "status": "AVAILABLE",
          "url": "/attachments/82/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156398
      },
      "trackingId": 31
    },
    "end": {
      "id": 129,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 83,
          "status": "AVAILABLE",
          "url": "/attachments/83/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156409
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 0,
    "parentId": 42
  },
  {
    "id": 44,
    "start": {
      "id": 129,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 83,
          "status": "AVAILABLE",
          "url": "/attachments/83/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156409
      },
      "trackingId": 31
    },
    "end": {
      "id": 130,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 84,
          "status": "AVAILABLE",
          "url": "/attachments/84/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156419
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 0,
    "parentId": 43
  },
  {
    "id": 45,
    "start": {
      "id": 130,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 84,
          "status": "AVAILABLE",
          "url": "/attachments/84/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156419
      },
      "trackingId": 31
    },
    "end": {
      "id": 131,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 85,
          "status": "AVAILABLE",
          "url": "/attachments/85/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156430
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 24,
    "parentId": 44
  },
  {
    "id": 46,
    "start": {
      "id": 131,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 85,
          "status": "AVAILABLE",
          "url": "/attachments/85/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156430
      },
      "trackingId": 31
    },
    "end": {
      "id": 132,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 86,
          "status": "AVAILABLE",
          "url": "/attachments/86/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156440
      },
      "trackingId": 31
    },
    "mouseActionsCount": 6,
    "keyboardActionsCount": 0,
    "parentId": 45
  },
  {
    "id": 47,
    "start": {
      "id": 132,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 86,
          "status": "AVAILABLE",
          "url": "/attachments/86/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156440
      },
      "trackingId": 31
    },
    "end": {
      "id": 133,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 87,
          "status": "AVAILABLE",
          "url": "/attachments/87/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156451
      },
      "trackingId": 31
    },
    "mouseActionsCount": 1,
    "keyboardActionsCount": 0,
    "parentId": 46
  },
  {
    "id": 48,
    "start": {
      "id": 133,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 87,
          "status": "AVAILABLE",
          "url": "/attachments/87/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156451
      },
      "trackingId": 31
    },
    "end": {
      "id": 134,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 88,
          "status": "AVAILABLE",
          "url": "/attachments/88/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156461
      },
      "trackingId": 31
    },
    "mouseActionsCount": 10,
    "keyboardActionsCount": 0,
    "parentId": 47
  },
  {
    "id": 49,
    "start": {
      "id": 134,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 88,
          "status": "AVAILABLE",
          "url": "/attachments/88/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156461
      },
      "trackingId": 31
    },
    "end": {
      "id": 135,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 89,
          "status": "AVAILABLE",
          "url": "/attachments/89/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156472
      },
      "trackingId": 31
    },
    "mouseActionsCount": 5,
    "keyboardActionsCount": 0,
    "parentId": 48
  },
  {
    "id": 50,
    "start": {
      "id": 135,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 89,
          "status": "AVAILABLE",
          "url": "/attachments/89/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156472
      },
      "trackingId": 31
    },
    "end": {
      "id": 136,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 90,
          "status": "AVAILABLE",
          "url": "/attachments/90/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156482
      },
      "trackingId": 31
    },
    "mouseActionsCount": 0,
    "keyboardActionsCount": 0,
    "parentId": 49
  },
  {
    "id": 51,
    "start": {
      "id": 136,
      "memo": "Added from work registry",
      "type": "HEARTBEAT",
      "attachments": [
        {
          "id": 90,
          "status": "AVAILABLE",
          "url": "/attachments/90/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156482
      },
      "trackingId": 31
    },
    "end": {
      "id": 137,
      "memo": "Stoped from whisper",
      "type": "STOP",
      "attachments": [
        {
          "id": 91,
          "status": "AVAILABLE",
          "url": "/attachments/91/raw",
          "public": false
        }
      ],
      "instant": {
        "nano": 0,
        "epochSecond": 1439156486
      },
      "trackingId": 31
    },
    "mouseActionsCount": 4,
    "keyboardActionsCount": 0,
    "parentId": {
      "id": 50,
      "start": {
        "id": 135,
        "memo": "Added from work registry",
        "type": "HEARTBEAT",
        "attachments": [
          {
            "id": 89,
            "status": "AVAILABLE",
            "url": "/attachments/89/raw",
            "public": false
          }
        ],
        "instant": {
          "nano": 0,
          "epochSecond": 1439156472
        },
        "trackingId": 31
      },
      "end": {
        "id": 136,
        "memo": "Added from work registry",
        "type": "HEARTBEAT",
        "attachments": [
          {
            "id": 90,
            "status": "AVAILABLE",
            "url": "/attachments/90/raw",
            "public": false
          }
        ],
        "instant": {
          "nano": 0,
          "epochSecond": 1439156482
        },
        "trackingId": 31
      },
      "mouseActionsCount": 0,
      "keyboardActionsCount": 0,
      "parentId": 49
    }
  }
];


    var stops = data.map(function (item) {
        return {
            when: item.end.instant.epochSecond * 1000,
            mouseActionsCount: item.mouseActionsCount,
            keyboardActionsCount: item.keyboardActionsCount,
            image: item.end.attachments[0].url
        };
    });

    var keyboardActionsData = stops.map(function (item) {
        return [item.when, item.keyboardActionsCount, item.image];
    });

    var mouseActionsData = stops.map(function (item) {
        return [item.when, item.mouseActionsCount, item.image];
    });

    $('#container').highcharts({
        title: 'Recorded Actions Report',
        chart: {
            zoomType: 'x',
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<small>{point.key}</small><table>',
            pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
            '<td style="text-align: right"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            valueDecimals: 2
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Actions'
            }
        },
        series: [{
            type: 'line',
            name: 'Mouse Actions',
            data: mouseActionsData
        }, {
            type: 'line',
            name: 'Keyboard Actions',
            data: keyboardActionsData
        }]
    });
});
