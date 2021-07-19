# vue-prototype-pins

![Rollup badge](https://img.shields.io/badge/Rollup-^0.53.3-ff69b4.svg)
![Jest](https://img.shields.io/badge/Jest-^22.0.4-blue.svg)
![Vue](https://img.shields.io/badge/Vue-^2.5.13-brightgreen.svg)
![Storybook](https://img.shields.io/badge/Storybook-^3.3.3-ff70a3.svg)
![Commitizen](https://img.shields.io/badge/Commitizen-enabled-brightgreen.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Npm badge](https://img.shields.io/npm/v/vue-prototype-pins.svg)
[![Build Status](https://travis-ci.org/gwenaelp/vue-prototype-pins.svg?branch=master)](https://travis-ci.org/gwenaelp/vue-prototype-pins)

> description

> Generated using [vue-cli-template-library](https://github.com/julon/vue-cli-template-library).

## Installation

```shell
npm install vue-prototype-pins
```

`vue-prototype-pins` can be used as a module in both CommonJS and ES modular environments.

When in non-modular environment, vue-prototype-pins will register all the components to vue by itself.</p>

### ES6

```javascript
//
// You can register a component manually
//
import { PrototypePins } from 'vue-prototype-pins';

export default {
  ...
  components: {
    PrototypePins
  },
  ...
};

//
// or register the whole module with vue
//
import ModuleLibrary from 'vue-prototype-pins';

// Install this library
Vue.use(ModuleLibrary);
```

### CommonJS

```javascript
//
// You can register a component manually
//
var Vue = require('vue');
var ModuleLibrary = require('vue-prototype-pins');

var YourComponent = Vue.extend({
  ...
  components: {
    'vue-prototype-pins': ModuleLibrary.PrototypePins
  },
  ...
});

//
// or register the whole module with vue
//
var Vue = require('vue');
var ModuleLibrary = require('vue-prototype-pins');

// Install this library
Vue.use(ModuleLibrary);
```

### Browser

```html
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/vue-prototype-pins/dist/vue-prototype-pins.min.js"></script>
<!-- Components are registered globally -->
```

## Changelog

See the GitHub [release history](https://github.com/gwenaelp/vue-prototype-pins/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
