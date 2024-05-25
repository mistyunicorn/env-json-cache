# env-json-cache

## Introduction:

Light weight library with a singleton caching module that has set, get and delete methods to play with keys and values pairs. 
Additonal method like loadJson helps to load the json value to cache and use across application files just by importing the library



## Install
``npm i env-json-cache``

## How to use ?

Here is the singleton object library, user can set get and delete the cache, also they can pass a json object to load.
By deafult all the process.env value will be loaded. if user wants to load JSON value they can use "loadJson(data)" or loadJsonFile(filepath) function to push the data to cache.


MOTO: Load once use it anywhere across your application. this library helps you to save the state of key and value pair


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

// get value from cache if the value is not present in cache deafult value will return 
if(env.get("TEST_DEFAULT_VALUE",false)){
    console.log("Hey am here")
}
```


### Example of delete and has functions
```js
const env = require('env-json-cache')

// to set key and value 
env.set("TEST_KEY","TEST_VALUE",1000) // third parameter is TTL

//to get the value from cache
const value = env.get("TEST_KEY")

// function to delete the key value pair
env.delete("TEST_KEY")

// get value from cache if the value is not present in cache deafult value will return 
if(env.has("TEST_KEY",false)){
    console.log("Hey i have a value")
}

```

### Example of loadJson and loadJsonFile

```json
// test.json
{
    "EXAMPLE1": "TEST"
}
```

```js

// test1.js file 


const env = require('env-json-cache')

// to load json file in cache 
env.loadJson({JSON_TEST_KEY1:"value", JSON_TEST_KEY2:"value2"}, console) //you can also pass logger as second parameter 

// to load json data from json file 
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

