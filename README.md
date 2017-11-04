[![npm](https://img.shields.io/npm/l/express.svg)]()
[![node](https://img.shields.io/node/v/passport.svg)]()

# KspCfg
A library for encoding and decoding ksp cfg strings and js objects

## Installation
```
npm install kspcfg
```

## Usage

### Import
#### NodeJS: 
```
var kspcfg = require('kspcfg');
```
#### Browser:
###### Requires you copy kspCfg.js to directory of website
```
<script src="kspCfg.js"></script>
<!-- Or -->
<script src="node_modules/kspcfg/kspCfg.js"></script>
```

### Actual usage
#### Encoding a js object:
```
let Example = {
  PART: {
    name: "Example part",
    module: "Part",
    autor: "eliassjogreen",
    scale: 100
  }
}

console.log(kspcfg.encode(Example));

// This should in theory print the following in the console
// PART
// {
// name = Example part
// module = Part
// autor = eliassjogreen
// scale = 100
// }
```

#### Decoding a ksp cfg string to a js object:
```
let Example = {
  PART: {
    name: "Example part",
    module: "Part",
    autor: "eliassjogreen",
    scale: 100
  }
}

console.log(kspcfg.decode(kspcfg.encode(Example)));

// This should in theory print the following in the console
// { PART: { name: 'Example part', module: 'Part', autor: 'eliassjogreen', scale: 100 } }
```
