# KspCfg
A library for encoding and decoding ksp cfg strings and js objects

## Usage

### Import
#### NodeJS: 
```
var CfgKsp = require('CfgKsp');
```
#### Browser:
###### Requires you copy kspCfg.js to directory of website
```
<script src="kspCfg.js"></script>
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

console.log(KspCfg.encode(Example));

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

console.log(KspCfg.decode(KspCfg.encode(Example)));

// This should in theory print the following in the console
// { PART: { name: 'Example part', module: 'Part', autor: 'eliassjogreen', scale: 100 } }
```
