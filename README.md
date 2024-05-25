## Introduction:

A lightweight library with a singleton caching module that allows for the manipulation of keys and values pairs through set, get, and delete functions. 
By importing the library, an additional function called loadJson and loadJsonFile makes it possible to load the JSON value to cache and utilize across application files.

**MOTO: Load once and use it anywhere in your application. This library allows you to store the state of a key-value pair.**

## Install
``npm i env-json-cache``

## How to use ?

env-json-cache is the singleton object library, user can set get and delete the cache, also they can pass a json object to load.
By deafult all the process.env value will be loaded. if user wants to load JSON value they can use "loadJson(data)" or loadJsonFile(filepath) function to push the data to cache.


## Functions

- set()
- get()
- getKeys()
- has()
- delete()
- loadJson()
- loadJsonFile() 

### Example to fetch all the keys
```js
const env = require('env-json-cache')

// to get all the keys from cache 
console.log(env.getKeys())

```

### Example of get and set functions
```js
const env = require('env-json-cache')

// to set key and value 
env.set("TEST_KEY","TEST_VALUE")

//to get the value from cache
const value = env.get("TEST_KEY")

//env.set("TEST_DEFAULT_VALUE",true)

// get the value if the value is not present default value will return, i.e, second parameter
if(env.get("TEST_DEFAULT_VALUE",false)){
    console.log("Hey am here")
}
```


### Example of delete and has functions
```js
const env = require('env-json-cache')

// function to delete the key value pair
env.delete("TEST_KEY")

// returns boolean value if the key is exist
if(env.has("TEST_KEY")){
    console.log("Hey i have a value")
}

```

### Example of loadJson and loadJsonFile
// test.json
```json
{
    "EXAMPLE1": "TEST"
}
```

```js

// test1.js file 


const env = require('env-json-cache')

// to load json file in cache 
env.loadJson({JSON_TEST_KEY1:"value", JSON_TEST_KEY2:"value2"}, console) //you can also pass logger as second parameter 

// to load json data from json file location internally uses fs to read the file
env.loadJson("./test.json", console) //you can also pass logger as second parameter to print logs

```

```js
//test2.js no need to load json or process.env

const env = require('env-json-cache')

//to get the value from cache, this has been set in test1.js as a json value
const value = env.get("JSON_TEST_KEY1")

//to get the value from cache, this has been set in test1.js from json file
const value = env.get("EXAMPLE1")

```

