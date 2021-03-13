import View from './View.js';

const tag = '[TabView]';

const TabView = Object.create(View);

TabView.setup = function (el) {
    this.init(el);
    return this;
}

TabView.setActiveTab = function (tabName) {
    Array.from(this.el.children).forEach(li => {
      li.className = li.innerHTML === tabName ? 'active' : ''
    })
    this.show()
  }

  export default TabView;