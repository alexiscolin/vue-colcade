# 📐 Vue Colcade

A small wrapper for integrating [Colcade](https://github.com/desandro/colcade) to Vuejs.

Vue.js plugin accessible globally from any component to run multiple colcade grid instances. This plugin lets you interact with differents grids throughout differents components.

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
      name: 'myGridName',  // name of colcade instance -> will be used as a reference for grid instance
      el: myGridElement,  // element that host the grid -> as mentioned in Colcade config
      config: {  // native Colcade configuration -> as mentioned in Colcade config
        columns: '.grid-col',
        items: '.grid-item',
      },
    });
```

That grid is accessible across all components by using the new global vue property: `$colcade`. So you can create as many grids as you want, referencing them by their `name`.Every future modifications thanks to vue-colcade must referred the `name` of the instance in order to affect it.

### Methodes

*vue-colcade* offers following methods:

* `create` - `this.$colcade.create({})` - create a new instance of Colcade grid
* `destroy` - `this.$colcade.destroy('myGridName')` - destroy an instance of Colcade grid
* `update` - `this.$colcade.update('myGridName')` - update grid items (after changing order, removing items...)
* `append` - `this.$colcade.myGridName.append(items)` - add items to the end of layout
* `prepend` - `this.$colcade.myGridName.prepend(items)` - Add items to the beginning of layout

As exemple, in order to destroy a grid, just call: `this.$colcade.destroy('myGridName')`.

Then if you need update items values inside a colcade grid, you may call the following property in order to force colcade to refresh itself: `this.$colcade.update('myGridName')`.

And, all native colcade methods are still accessibles :

``` javascript
  this.$colcade.myGridName.append();
  this.$colcade.myGridName.prepend();
  this.$colcade.myGridName.destroy(); // be carefull, that doesn't destroy the myGridName instance but only the Colcade grid
```

By Alexis Colin, thanks to [Colcade](https://github.com/desandro/colcade) by David DeSandro

MIT License.
