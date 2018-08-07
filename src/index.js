import Colcade from 'colcade';

const ColcadeWrapper = function(obj) {
	this.data = obj;

  this.init = () => { this.colc = this.createGrid(); };
	this.createGrid = () => new Colcade(this.data.el, this.data.config);
	this.destroyGrid = () => this.colc.destroy();
  this.apprendGrid = item => this.colc.append(item);
  this.prependGrid = item => this.colc.prepend(item);

  this.init();
};

const ColcadeFactory = function(){};
ColcadeFactory.prototype = {
	create: function $create(obj){
    this[obj.name] = !this[obj.name] && new ColcadeWrapper(obj);
  },
  destroy: function $destroy(name){
  	if (this.hasOwnProperty(name)) {
    	this[name].destroyGrid();
      this[name] = null;
    	delete this[name];
    } else {
      throw `${name} is not a property of $colcade`;
    }
  }
};

const VueColcade = {
  install: function $install(Vue) {
    Vue.prototype.$colcade = new ColcadeFactory();
  },
};

export default VueColcade;
