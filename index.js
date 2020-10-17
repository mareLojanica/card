(()=>{
    window.location.href = '#/addcard';   
})()


function renderLayout(cardInfo){
    let card_number = cardInfo ? cardInfo.card_number.join(' ') : '';
    let user_name = cardInfo ? cardInfo.name : '';
    let date_expiry = cardInfo ? cardInfo.expires : '';
    let src = cardInfo ? objConfigImg[cardInfo.type] : '';
    return `<div class="el-group" data-id="c556feb9c4c14d2c86e832f617bf9f51"
        style="opacity: 1; mix-blend-mode: normal; pointer-events: all;"><svg version="1.2" preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="ng-element"
            data-id="3bc3337e4632489baeb897b28d153f72" viewBox="0 0 400 250"
            style="overflow: visible; width: 400px; height: 250px; opacity: 1; mix-blend-mode: normal; transform: rotate(0deg) translate(526px, 172px) rotate(0deg); pointer-events: all;">
            <defs>
                <path id="path-1602928835243330"
                    d="M0 15.000000000000002 C0 6.7157287530000005 6.715728753000001 0 15.000000000000002 0 C15.000000000000002 0 385.0000000000002 0 385.0000000000002 0 C393.2842712470002 0 400.0000000000002 6.715728753000001 400.0000000000002 15.000000000000002 C400.0000000000002 15.000000000000002 400.0000000000002 235 400.0000000000002 235 C400.0000000000002 243.284271247 393.2842712470002 250 385.0000000000002 250 C385.0000000000002 250 15.000000000000002 250 15.000000000000002 250 C6.7157287530000005 250 0 243.284271247 0 235 C0 235 0 15.000000000000002 0 15.000000000000002 Z">
                </path>
                <linearGradient id="gradient-1602928835266513" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stop-color="rgba(117,127,154,1)" stop-opacity="1"></stop>
                    <stop offset="100%" stop-color="rgba(215,221,232,1)" stop-opacity="1"></stop>
                </linearGradient>
            </defs>
            <g transform="translate(0, 0)">
                <path
                    d="M0 15.000000000000002 C0 6.7157287530000005 6.715728753000001 0 15.000000000000002 0 C15.000000000000002 0 385.0000000000002 0 385.0000000000002 0 C393.2842712470002 0 400.0000000000002 6.715728753000001 400.0000000000002 15.000000000000002 C400.0000000000002 15.000000000000002 400.0000000000002 235 400.0000000000002 235 C400.0000000000002 243.284271247 393.2842712470002 250 385.0000000000002 250 C385.0000000000002 250 15.000000000000002 250 15.000000000000002 250 C6.7157287530000005 250 0 243.284271247 0 235 C0 235 0 15.000000000000002 0 15.000000000000002 Z"
                    style="stroke-width: 0; stroke: rgb(140, 140, 140); stroke-linecap: butt; stroke-linejoin: miter; fill: url(&quot;#gradient-1602928835266513&quot;);">
                </path>
            </g>
        </svg>
        <div class="ng-element el-rich-text font-L-fch6crbdd5p7j8hu4996yrkfehqj4b12e1qq6x3kcdt6jw3m9tgput9278h54vv2dxu6ybadcnj6jxbd48p24xk1e9mp2vkm48x24kb5chmqav925gh7etb9cxm788hu6mr30b12d5u62v39cch3mtk1dhtpaz8"
            data-id="95ae63831da4494a930f7e60d587d7c1"
            style="opacity: 1; mix-blend-mode: normal; color: rgba(0, 0, 0, 0.87); font-feature-settings: &quot;liga&quot; 0; font-size: 24px; font-style: normal; font-weight: normal; line-height: 29px; --paragraph:0px; text-align: left; text-transform: none; height: 29px; width: 65px; transform: rotate(0deg) translate(830px, 356px); pointer-events: all;">
            <div class="el-rich-text__content el-rich-text__content--valign-top">
                <p id='expired-date'>${date_expiry}</p>
            </div>
        </div>
        <div class="ng-element el-rich-text font-L-fch6crbdd5p7j8hu4996yrkfehqj4b12e1qq6x3kcdt6jw3m9tgput9278h54vv2dxu6ybadcnj6jxbd48p24xk1e9mp2vkm48x24kb5chmqav925gh7etb9cxm788hu6mr30b12d5u62v39cch3mtk1dhtpaz8"
            data-id="a900da80bdd44ff9b3b4c060f17c47e0"
            style="opacity: 1; mix-blend-mode: normal; color: rgba(0, 0, 0, 0.87); font-feature-settings: &quot;liga&quot; 0; font-size: 32px; font-style: normal; font-weight: normal; line-height: 38px; --paragraph:0px; text-align: left; text-transform: none; height: 38px; width: 339px; transform: rotate(0deg) translate(556px, 297px); pointer-events: all;">
            <div class="el-rich-text__content el-rich-text__content--valign-top">
                <p id="card-number">${card_number}</p>
            </div>
        </div>
        <div class="ng-element el-rich-text font-L-fch6crbdd5p7j8hu4996yrkfehqj4b12e1qq6x3kcdt6jw3m9tgput9278h54vv2dxu6ybadcnj6jxbd48p24xk1e9mp2vkm48x24kb5chmqav925gh7etb9cxm788hu6mr30b12d5u62v39cch3mtk1dhtpaz8"
            data-id="f43fe1e8aea541b4a4a2af0efb7426c7"
            style="opacity: 1; mix-blend-mode: normal; color: rgba(0, 0, 0, 0.87); font-feature-settings: &quot;liga&quot; 0; font-size: 24px; font-style: normal; font-weight: normal; line-height: 29px; --paragraph:0px; text-align: left; text-transform: none; height: 29px; width: 138px; transform: rotate(0deg) translate(556px, 356px); pointer-events: all;">
            <div class="el-rich-text__content el-rich-text__content--valign-top">
                <p id="user-name-display">${user_name}</p>
            </div>
        </div><img id="img-type" class="ng-element el-image" 
        src="${src}" data-id="c7ca02adc9334331884b3d58d2224900"
            style="opacity: 1; mix-blend-mode: normal; border-radius: 0px; object-fit: cover; object-position: center center; width: 136px; height: 136px; transform: rotate(0deg) translate(775px, 140px); pointer-events: all;"><img
            class="ng-element el-image" data-id="ca34f3d5f5f0462881e0759c1738aad1"
            src="../data/files_1050346_1023544_chip-8feb50fbaf1103ec7e20e39eb13c98fa-3dcbaa.png"
            style="opacity: 1; mix-blend-mode: normal; border-radius: 0px; object-fit: cover; object-position: center center; width: 50px; height: 44px; transform: rotate(0deg) translate(556px, 232px); pointer-events: all;">
    </div>`

}

const HomeComponent = {
    addCardState : {
       name : '',
       card_number : [],
       expires : '',
       type : '',
       errors : {
           name : true,
           card_number: true,
           expires: true,
        }
           
    },
  render: (param,data) => {
    return `
      <section>
        <div id="add-card-section" class="add-card-wrapper">
            <div class="input-controll">
                <label for="input-name" class="label">Name</label>
                <input id="input-name" type="text" name="name" class="name-input clear-form" onchange="handleNameChange(event,HomeComponent)" autocomplete="off">
                <p id="feedback-name" class=""></p>
            </div>
            <div class="input-controll">
                <label for="" class="label">Card Number</label>
                <input type="text" name="name" class="input-card-number clear-form" onkeypress="validationCheck(event,HomeComponent)" onchange="handleChange(event,HomeComponent)" maxlength="4" checkval=true key=0>
                <input type="text" name="name" class="input-card-number clear-form" onkeypress="validationCheck(event,HomeComponent)" onchange="handleChange(event,HomeComponent)" maxlength="4" key=1>
                <input type="text" name="name" class="input-card-number clear-form" onkeypress="validationCheck(event,HomeComponent)" onchange="handleChange(event,HomeComponent)" maxlength="4" key=2>
                <input type="text" name="name" class="input-card-number clear-form" onkeypress="validationCheck(event,HomeComponent)" onchange="handleChange(event,HomeComponent)" maxlength="4"key=3>
                <p id="feedback-para" class=""></p>
                <div id="img-holder" class="st-img-holder">
                    <img id="img-card" src="" alt="">
                </div>
            </div>
            <div class="input-controll">
                <label for="" class="label">Expires on</label>
                <input type="text" name="name" class=" clear-form" onchange="checkForDate(event,HomeComponent)">
                 <p id="feedback-expiry" class="error-msg"></p>
            </div>
        </div>
        <button onclick="handleSave(HomeComponent)" class="submit-btn">Save</button>
      </section> ${renderLayout()}

    `;
  }
} 

const AllCards = {
    render: (param,data) => {
      return renderCards(data);
    }
} 

const editCardComponent = {
  render: (param,data) => {
      let id = parseInt(param);
      for(let card of data){
          if (card.id == id){
                return renderEdit(card)
          }
      }
  }
} 

const ErrorComponent = {
    
  render: (param) => {
    return `
      <section>
        <h1>Error</h1>
        <p>This is just a test</p>
      </section>
    `;
  }
}
const routes = [
  { path: '/addcard', component: HomeComponent, },
  { path: '/allcards', component: AllCards, },
  { path: '/edit' , component: editCardComponent, },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
const findComponentByPath = (path, routes) => routes.find(r => {
    const regex = /^\/([^?\/]+)/;
    return path.match(regex)[0] === r.path ? r.component : undefined
})

const router = () => {
  const path = parseLocation();
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
  let param = path.split('/')[2] ? path.split('/')[2] : ''
    data = JSON.parse(localStorage.getItem('card')) ?JSON.parse(localStorage.getItem('card')) : null ;
  document.getElementById('app').innerHTML = component.render(param,data);
};


function validationCheck(e, object){
    const charCode = (e.which) ? e.which : e.keyCode;
    if (charCode == 46 || charCode > 31 && (charCode < 48 || charCode > 57)){
        e.preventDefault();
        return false;
    }

    return true;
}

function checkForDate(e,object){
    const {value} = e.target;
    if(value.includes('/')){
        eraseError('feedback-expiry',object , 'expires');
        let arrVals = value.split('/');
        const month = parseInt(arrVals[0]);
        const year = parseInt(arrVals[1]);
        if(month > 12 || month < 1){
            raiseError('feedback-expiry', 'Invalid expiry date',object, 'expires')
        } else {
            eraseError('feedback-expiry',object , 'expires');
            const strDate = new Date(`${month}/01/${year}`).getTime();
            if(Date.now() > strDate){
                raiseError('feedback-expiry', 'Invalid expiry date',object , 'expires')
            } else {
                eraseError('feedback-expiry',object , 'expires');
                object.addCardState.expires = strDate;
                object.addCardState.errors.expires = false;
                document.querySelector('#expired-date').innerHTML = renderDate(strDate);
            }
        }
    } else {
        raiseError('feedback-expiry', 'Invalid expiry date', object , 'expires')
    }
   
}

function raiseError(str, text , object , offset){
    document.querySelector(`#${str}`).className += " error-msg";
    document.querySelector(`#${str}`).innerHTML = text;
    object.addCardState.errors[offset] = true;
    let submitBtn = document.querySelector('.submit-btn');
    submitBtn.className += ' btn-disabled';
    submitBtn.disabled = true;
}
function eraseError(str,object,offset){
    document.querySelector(`#${str}`).className += "";
    document.querySelector(`#${str}`).innerHTML = '';
    object.addCardState.errors[offset] = false;
    let submitBtn = document.querySelector('.submit-btn');
    submitBtn.classList.remove('btn-disabled');
    submitBtn.disabled = false;
}

function handleNameChange(e , object){
    const {value} = e.target;
    if(value.trim() !== ''){
        eraseError('feedback-name',object , 'name');
        object.addCardState.name = value;
        console.log(value)
        document.querySelector('#user-name-display').innerHTML = value;
    } else {
        raiseError('feedback-name', 'Name is mandatory',object , 'name');
        document.querySelector('#user-name-display').innerHTML = ''
    }
}

function handleChange(e,object){
    const {value} = e.target;
    eraseError('feedback-para',object,'card_number');
     if(e.target.getAttribute('checkval')){
        if(value.charAt(0) == 4 && value.length === 4){
            object.addCardState.errors.card_number = false;
            object.addCardState.type = 'visa';
            setTypeImg('visa')
        } else if (value.charAt(0) == 5 && value.length === 4){
            object.addCardState.type = 'mastercard';
            object.addCardState.errors.card_number = false;
            setTypeImg('mastercard')
        } else if(value.charAt(0) == 6 && value.length === 4) {
            object.addCardState.type = 'discover';
            object.addCardState.errors.card_number = false;
             setTypeImg('discover')
        } else {
            object.addCardState.type = '';
            raiseError('feedback-para', 'Card number Error',object, 'card_number');
        }
    }
    if(value.length !==4){
        raiseError('feedback-para', 'Card number Error',object, 'card_number');
    } else if(object.addCardState.errors.card_number === false) {
        object.addCardState.card_number[e.target.getAttribute('key')] = value;
        document.querySelector('#card-number').innerHTML =object.addCardState.card_number.join(' ')
    }
}

function handleSave(object){
    let objcard = {};
    let prevCards = JSON.parse(localStorage.getItem('card'));
    if(!object.addCardState.errors.name && !object.addCardState.errors.card_number && !object.addCardState.errors.expires ){
        objcard ={
            id : Date.now(),
            ...object.addCardState
        }
        if(prevCards){
          prevCards = [...prevCards,objcard]
            localStorage.setItem('card', JSON.stringify(prevCards));
        } else {
            let arrCars = [objcard]
            localStorage.setItem('card', JSON.stringify(arrCars));
        }
        resetFields(object);
    } else {
        const fields = document.querySelectorAll('.clear-form');
        const event = new Event('change');
        for(let field of fields){
            field.dispatchEvent(event);
        }
    }
    window.location.href = '#/allcards';   
}
function resetFields(object){
    const fields = document.querySelectorAll('.clear-form');
    for(let field of fields){
        field.value = '';
    }
    object.addCardState.errors.name = true;
    object.addCardState.errors.card_number = true;
    object.addCardState.errors.expires = true;
    object.addCardState.name = '';
    object.addCardState.type = '';
    object.addCardState.card_number =[];
    object.addCardState.expires = true;
}

function renderCards(arrCards){
    let domReturn = '';
    if(arrCards){
        for(let card of arrCards){
        domReturn += `<div>
                        <a href="#/edit/${card.id}">
                            <span> ${card.name} </span>
                            <span> ${card.card_number.join('-')}</span>
                            <span> Edit </span>
                        </a>
                    </div>`
        }
    } else {
        domReturn = 'no cards'
    }
    return domReturn
}

function renderEdit(card){
    let date_expiry = renderDate(card.expires);
    card.expires = date_expiry;
   return `<section>
        <div id="add-card-section" class="add-card-wrapper">
            <div class="input-controll">
                <label for="input-name" class="label">Name</label>
                <input id="input-name" type="text" name="name" class="name-input clear-form" onchange="handleNameChange(event,HomeComponent)" value=${card.name}>
                <p id="feedback-name" class=""></p>
            </div>
            <div class="input-controll">
                <label for="" class="label">Card Number</label>
                <input type="text" name="name" class="input-card-number clear-form" onkeypress="validationCheck(event,HomeComponent)" onchange="handleChange(event,HomeComponent)" maxlength="4" checkval=true key=0 value=${card.card_number[0]}>
                <input type="text" name="name" class="input-card-number clear-form" onkeypress="validationCheck(event,HomeComponent)" onchange="handleChange(event,HomeComponent)" maxlength="4" key=1 value=${card.card_number[1]}>
                <input type="text" name="name" class="input-card-number clear-form" onkeypress="validationCheck(event,HomeComponent)" onchange="handleChange(event,HomeComponent)" maxlength="4" key=2 value=${card.card_number[2]}>
                <input type="text" name="name" class="input-card-number clear-form" onkeypress="validationCheck(event,HomeComponent)" onchange="handleChange(event,HomeComponent)" maxlength="4"key=3 value=${card.card_number[3]}>
                <p id="feedback-para" class=""></p>
            </div>
            <div class="input-controll">
                <label for="" class="label">Expires on</label>
                <input type="text" name="name" class=" clear-form" onchange="checkForDate(event,HomeComponent)" value=${date_expiry}>
                 <p id="feedback-expiry" class="error-msg"></p>
            </div>
        </div>
        <button onclick="handleSave(HomeComponent)" class="submit-btn">Save</button>
      </section> ${renderLayout(card)}
    `
    
}

function renderDate(timestamp){
    const date =`${new Date(timestamp).getMonth() +1}/${ new Date(timestamp).getFullYear().toString().substr(-2)}`;
    return date
}
 const objConfigImg = {
        visa : 'data/files_1050346_1023544_visa_01-0a31cd6ab1ed6e52a0f65646ae4b0070-eeb4f4.png',
        mastercard: "data/files_1050346_1023544_mastercard-eb9215199829ef5e3ad671b7b3289480-ce80c8.png",
        discover : 'data/files_1050346_1023544_discovercard-166021f728ac0d4cc1bdf8a5d7def67e-3ea92c.png'
    }
function setTypeImg(type){
   
    document.getElementById('img-type').setAttribute('src', objConfigImg[type]);
     
}
window.addEventListener('hashchange', router);
window.addEventListener('load', router);