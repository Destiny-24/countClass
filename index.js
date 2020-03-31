class Count{
  constructor(props){
    this.state={
      id:props.id,
      value:props.value || 0,
      change:props.change,
      _countNumberInpit:null,
    };
    this._$ = selector =>document.querySelector(selector);
    this._createElement = type => document.createElement(type);
    this._setContent = (elem,content) => elem.textContent = content;
    this._appendChild = (container,Node) => container.appendChild(Node);
    this._init();
  }
 _init(){
   this._addHTML();
 }
  _addHTML(){
    let $ = this._$;
    let idContainer = $(`#${this.state.id}`);
    let countNumberContainer = this._createElement('div');
    let countNumberContent = this._createElement('div');
    let countNumberBtnDecrease = this._createElement('span');
    let countNumberBtnIncrease = this._createElement('span');
    let countNumberInpit = this._createElement('input');
    countNumberContainer.setAttribute('class','count-number-content');
    countNumberContent.setAttribute('class','count-number-content');
    countNumberBtnDecrease.setAttribute('class','count-number-btn_decrease');
    countNumberBtnIncrease.setAttribute('class','count-number-btn_increase');
    countNumberInpit.setAttribute('class','count-number-input','type','text');
    countNumberInpit.value = this.state.value;
    countNumberInpit.disabled = true;
    this._setContent(countNumberBtnDecrease,'-');
    this._setContent(countNumberBtnIncrease,'+');
    this._appendChild(countNumberContent,countNumberInpit);
    this._appendChild(countNumberContainer,countNumberBtnDecrease);
    this._appendChild(countNumberContainer,countNumberBtnIncrease);
    this._appendChild(countNumberContainer,countNumberContent);
    this._appendChild(idContainer,countNumberContainer);
    this.state._countNumberInpit = countNumberInpit;

    countNumberBtnDecrease.addEventListener('click',this.decrease.bind(this));
    countNumberBtnIncrease.addEventListener('click',this.increase.bind(this));
  }
  setValue(val){
    let isNumber = (typeof val === 'number');
    if(isNumber){
      this.state.value = val;
      this.state._countNumberInpit.value = val;
      typeof this.state.change === 'function' && this.state.change(val);
    }else{
      console.log('参数必须为数字');
    }
  }
  getValue(){
    return this.state.value
  }
  decrease(){
    let value = this.state.value - 1;
    this.setValue(value)
  }
  increase(){
    let value = this.state.value + 1;
    this.setValue(value)
  }
}
const PAGE={
  data:{
    count_1:null,
    count_2:null,
  },
  init:function(){
    this.initCount();
  },
  initCount:function(){
    PAGE.data.count_1 = new Count({
      id:'count_1',
      value:1,
      change:function(){
      }
    })
    PAGE.data.count_2 = new Count({
      id:'count_2',
      value:10,
      change:function(){
      }
    })
  }
}
PAGE.init();