import Colcade from 'colcade';

const ColcadeWrapper = function $ColcadeWrapper(obj) {
  this.data = obj;

  this.init = () => { this.colc = this.createGrid(); };
  this.createGrid = () => new Colcade(this.data.el, this.data.config);
  this.apprendGrid = item => this.colc.append(item);
  this.prependGrid = item => this.colc.prepend(item);
  this.destroyGrid = () => new Promise((resolve) => {
    this.colc.destroy();
    this.colc = null;
    delete this.colc;
    resolve();
  });

  this.init();
};

const ColcadeFactory = function $ColcadeFactory() {};
ColcadeFactory.prototype = {
  create: function $create(obj) {
    this[obj.name] = !this[obj.name] && new ColcadeWrapper(obj);
  },
  destroy: function $destroy(name) {
    if (Object.prototype.hasOwnProperty.call(this, name)) {
      this[name].destroyGrid();
      this[name] = null;
      delete this[name];
    } else {
      throw new Error(`${name} is not a property of $colcade`);
    }
  },
  update: function $update(name) {
    if (Object.prototype.hasOwnProperty.call(this, name)) {
      this[name].destroyGrid().then(() => {
        this[name].init();
      });
    } else {
      throw new Error(`${name} is not a property of $colcade`);
    }
  },
};

const VueColcade = {
  install: function $install(Vue) {
    Vue.prototype.$colcade = new ColcadeFactory();
  },
};

export default VueColcade;
