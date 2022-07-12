class itemList{
    constructor(items){
        this.itemList = items;
        this.item = [];
        this._itemArea();
        this._itemDatail();
    }
    _itemArea(){
        this.itemList.forEach(e =>{
            this.itemArea = Object.keys(e);

            this.itemArea.forEach(element => {
                this.list = document.querySelector('.' + element);
                if(this.list){
                this.itemDetail = e[`${element}`];
                this.itemDetail.forEach((info, i) => {

                    this.g = Object.keys(info);
                    let u = [];
                    this.g.forEach(key => {
                        u.push(info[`${key}`]);
                        return u;
                    });
                    this.item += this._itemDatail(...u);
                    
                });
                this.list.innerHTML = this.item;
                }
                this.item = [];
            });
        });
    }
    _itemDatail(a, b){
        return `<p>${a}/${b}</p>`
    }
}

//セールアイテム　画像あり
class saleImage extends itemList{
    constructor(items){
        super(items);
    }
    _itemDatail(a, b, c, d, e, f, g){
        if(g){
            return `
            <div class="itemBox tO">
                <a href="/fs/osmosis/${a}">
                    <span class="itemImg"><img src="https://osmosis.itembox.design/item/img/${e}" alt="${b}"></span>
                    <span class="itemInfo">
                        <span class="itemName">${b}</span>
                        <span class="itemPrice">&yen; ${d}</span>
                        <span class="itemSale">&yen; ${c}</span>
                    </span>
                    <span class="itemColor">${g}</span>
                    <span class="itemRate">${f}%</span>
                </a>
            </div>
            
            `
        }else{
            return `
            <div class="itemBox tO">
                <a href="/fs/osmosis/${a}">
                    <span class="itemImg"><img src="https://osmosis.itembox.design/item/img/${e}" alt="${b}"></span>
                    <span class="itemInfo">
                        <span class="itemName">${b}</span>
                        <span class="itemPrice">&yen; ${d}</span>
                        <span class="itemSale">&yen; ${c}</span>
                    </span>
                    <span class="itemRate">${f}%</span>
                </a>
            </div>
            
            `
        }
    }
}

//セールアイテム　画像なし
class saleNoImage extends itemList{
    constructor(items){
        super(items);
    }
    _itemDatail(a, b, c, d, e, f, g){
       
        if(f){
            return `
            <div class="itemBox">
                <a href="/fs/osmosis/${a}">
                    <span class="itemInfo">
                        <span class="itemName">${b}</span>
                        <span class="itemPrice">&yen; ${d}</span>
                        <span class="itemSale">&yen; ${c}</span>
                    </span>
                    <span class="itemColor">${f}</span>
                    <span class="itemRate">${g}%</span>
                </a>
            </div>
            `
        }else{
            return `
            <div class="itemBox">
                <a href="/fs/osmosis/${a}">
                    <span class="itemInfo">
                        <span class="itemName">${b}</span>
                        <span class="itemPrice">&yen; ${d}</span>
                        <span class="itemSale">&yen; ${c}</span>
                    </span>
                    <span class="itemRate">${g}%</span>
                </a>
            </div>
            `
        }
    }
}

//通常アイテム　画像あり
class normalImage extends itemList{
    constructor(items){
        super(items);
    }
    _itemDatail(a, b, c, d, e, f){
        if(f){
            return `
            <div class="itemBox">
                <a href="/fs/osmosis/${a}">
                    <span class="itemImg"><img src="https://osmosis.itembox.design/item/img/${e}" alt="${b}"></span>
                    <span class="itemInfo">
                        <span class="itemName">${b}</span>
                        <span class="itemSale">&yen; ${c}</span>
                    </span>
                    <span class="itemColor">${f}</span>
                </a>
            </div>
            `
        }else{
            return `
            <div class="itemBox">
                <a href="/fs/osmosis/${a}">
                    <span class="itemImg"><img src="https://osmosis.itembox.design/item/img/${e}" alt="${b}"></span>
                    <span class="itemInfo">
                        <span class="itemName">${b}</span>
                        <span class="itemSale">&yen; ${c}</span>
                    </span>
                </a>
            </div>
            `
        }
    }
}

//通常アイテム　画像なし
class normalNoImage extends itemList{
    constructor(items){
        super(items);
    }
    _itemDatail(a, b, c, d, e, f){
        if(f){
            return `
            <div class="itemBox">
                <a href="/fs/osmosis/${a}">
                    <span class="itemInfo">
                        <span class="itemName">${b}</span>
                        <span class="itemSale">&yen; ${c}</span>
                    </span>
                    <span class="itemColor">${f}</span>
                </a>
            </div>
            `
        }else{
            return `
            <div class="itemBox">
                <a href="/fs/osmosis/${a}">
                    <span class="itemInfo">
                        <span class="itemName">${b}</span>
                        <span class="itemSale">&yen; ${c}</span>
                    </span>
                </a>
            </div>
            `
        }
    }
}
//通常アイテム　画像なし divなし
class normalNoImageNoDiv extends itemList{
    constructor(items){
        super(items);
    }
    _itemDatail(a, b, c, d, e, f){
        if(f){
            return `
                <a href="/fs/osmosis/${a}">
                    <span class="itemInfo">
                        <span class="itemName">${b}</span>
                        <span class="itemSale">&yen; ${c}</span>
                    </span>
                    <span class="itemColor">${f}</span>
                </a>
            `
        }else{
            return `
                <a href="/fs/osmosis/${a}">
                    <span class="itemInfo">
                        <span class="itemName">${b}</span>
                        <span class="itemSale">&yen; ${c}</span>
                    </span>
                </a>
            `
        }
    }
}

//topContents
class topContents extends itemList{
    constructor(items){
        super(items);
    }
    _itemDatail(a, b, c, d, e, f){
        if(e){
            return `
            <div class="contentsBox">
                <a href="${a}"  target="_${e}">
                    <span class="contentsImg"><img src="https://osmosis.itembox.design/item/img/top/${d}.jpg" alt="${b}"></span>
                    <span class="contentsInfo">
                        <span class="contentsDays">${c}</span>
                        <span class="contentsName">${b}</span>
                    </span>
                </a>
            </div>
            `
        }else if(f){
            return `
            <div class="contentsBox">
                <a href="${a}">
                    <span class="contentsImg"><img src="https://osmosis.itembox.design/item/img/top/${d}.jpg?${f}" alt="${b}"></span>
                    <span class="contentsInfo">
                        <span class="contentsDays">${c}</span>
                        <span class="contentsName">${b}</span>
                    </span>
                </a>
            </div>
            `
        }else{
            return `
            <div class="contentsBox">
                <a href="${a}">
                    <span class="contentsImg"><img src="https://osmosis.itembox.design/item/img/top/${d}.jpg" alt="${b}"></span>
                    <span class="contentsInfo">
                        <span class="contentsDays">${c}</span>
                        <span class="contentsName">${b}</span>
                    </span>
                </a>
            </div>
            `
        }
    }
}

//swiperItem
class swiperItem extends itemList{
    constructor(items){
        super(items);
    }
    _itemDatail(a, b, c, d, e){
        if(e){
            return `
            <div class="swiper-slide">
                <a href="${a}" target="_${e}">
                    <span class="swiperImg"><img src="https://osmosis.itembox.design/item/img/top/${d}.jpg" alt="${b}"></span>
                    <span class="swiperInfo">
                        <span class="contentsDays">${c}</span>
                    </span>
                </a>
            </div>
            `
        }else{
            return `
            <div class="swiper-slide">
                <a href="${a}" target="_${e}">
                    <span class="swiperImg"><img src="https://osmosis.itembox.design/item/img/top/${d}.jpg" alt="${b}"></span>
                    <span class="swiperInfo">
                        <span class="contentsDays">${c}</span>
                    </span>
                </a>
            </div>
            `
        }
    }
}

//topSlider
class topSlider extends itemList{
    constructor(items){
        super(items);
    }
    _itemDatail(a, b, c, d){
        if(d){
            return `
            <div>
                <a href="${a}" target="_${d}">
                    <img class="sp" src="https://osmosis.itembox.design/item/img/top/${c}_sp.jpg" alt="${b}">
                    <img class="pc" src="https://osmosis.itembox.design/item/img/top/${c}_pc.jpg" alt="${b}">
                </a>
            </div>
            `
        }else{
            return `
            <div>
                <a href="${a}">
                    <img class="sp" src="https://osmosis.itembox.design/item/img/top/${c}_sp.jpg" alt="${b}">
                    <img class="pc" src="https://osmosis.itembox.design/item/img/top/${c}_pc.jpg" alt="${b}">
                </a>
            </div>
            `
        }
    }
}

//topBanner
class topBanner extends itemList{
    constructor(items){
        super(items);
    }
    _itemDatail(a, b, c, d, e){
        if(e){
            return `
                <a href="${a}">
                    <img class="sp" src="https://osmosis.itembox.design/item/img/top/${d}_sp.jpg?${e}" alt="${b}">
                    <img class="pc" src="https://osmosis.itembox.design/item/img/top/${d}_pc.jpg?${e}" alt="${b}">
                </a>
            `
        }else{
            return `
                <a href="${a}">
                    <img class="sp" src="https://osmosis.itembox.design/item/img/top/${d}_sp.jpg" alt="${b}">
                    <img class="pc" src="https://osmosis.itembox.design/item/img/top/${d}_pc.jpg" alt="${b}">
                </a>
            `
        }
    }
}

//snapSlider
class snapSlider extends itemList{
    constructor(items){
        super(items);
    }
    _itemDatail(a, b){
            return `
            <div>
                <a href="/shopcoordinate/index.php/${a}">
                    <img src="https://store.osmosis.co.jp/shopcoordinate/wp-content/uploads/${b}.jpg">
                </a>
            </div>
            `
    }
}

//topStyle
class topStyle extends itemList{
    constructor(items){
        super(items);
    }
    _itemDatail(a, b, c){
            return `
            <p class="fade_u animated ${c}">
                <a href="/shopcoordinate/index.php/recommend/recommend-styling-${a}/">
                    <img src="https://osmosis.itembox.design/item/img/recommend/${b}.jpg">
                </a>
            </p>
            `
    }
}