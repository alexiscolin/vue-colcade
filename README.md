# 📐 Vue Colcade

A small wrapper for integrating [Colcade](https://github.com/desandro/colcade) to Vuejs.

Vue.js plugin accessible globally from any component to run multiple colcade grid instances. This plugin lets you interact with different grid throughout different components.

## Install

``` bash
  npm install vue-colcade
  yarn add vue-colcade
```

Import vue-colcade.js in the main project file

``` javascript
  import Vue from 'vue';
  import VueColcade from 'vue-colcade';

  Vue.use(VueColcade);
```

## Usage

In your Vue.js components, to create a new grid, simply use:

``` javascript

  this.$colcade.create({
      name: 'myGridName',  // name of colcade instance
      el: myGridElement,  // element that host the grid
      config: {  // native colcade configuration
        columns: '.grid-col',
        items: '.grid-item',
      },
    });
```

That grid is accessible between all components by using the new global `$colcade` vue property. So you can create as many grid as you want, storing them by their `name`.

In order to destroy a grid, just call: `this.$colcade.destroy('myGridName')`.

All native colcade methods are accessibles :

``` javascript
  this.$colcade.myGridName.append();
  this.$colcade.myGridName.prepend();
```

By Alexis Colin, thanks to Colcade by David DeSandro

MIT License. Have at it.
