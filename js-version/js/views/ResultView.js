import View from './View.js';

const tag = '[ResultView]';

const ResultView = Object.create(View);

ResultView.setup = function (el) {
    this.init(el);
    return this;
}

ResultView.render = function (data = []) {
    console.log(tag, 'render', data) ; 
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : '검색 결과가 없습니다.';
}

ResultView.getSearchResultsHtml = function (data) {

}

export default ResultView;