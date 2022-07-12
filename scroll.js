'use strict';

class scrollInview{
    constructor(el){
        this.el = document.querySelectorAll(el);
        this.upBoxScroll();
        this._upBoxThreshold();
        this._options();
        this.scrollAction();
        this._inOutAction();
    }

    scrollAction(){
        const callback = function(entries, observer){
            entries.forEach((entry) => {
                this._inOutAction(entry);
           });
        }
        return callback;
    }
    upBoxScroll(){
        this.observer = new IntersectionObserver(this.scrollAction().bind(this), this._options());
        this.el.forEach(element => {
            this.observer.observe(element);
        });
    }

    _upBoxThreshold(){
        let thresholds = [];
        let numSteps = 20;
        for (let i=1.0; i<=numSteps; i++) {
          let ratio = i/numSteps;
          thresholds.push(ratio);
        }
        thresholds.push(0);
        return thresholds;
     }

     _options(){
        let option = {
            root: null,
            rootMargin: "0px",
            threshold: this._upBoxThreshold()
        };
        return option;
     }

    _inOutAction(entry){
        if(entry){
            if(entry.isIntersecting){
                let atyo = entry.boundingClientRect.top / 10;
                entry.target.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${atyo},0, 1)`;
            }
        }
    }
}

class scrollInviewBox extends scrollInview{
    constructor(el){
        super(el);
    }
    _options(){
        let option = {
            root: null,
            rootMargin: "-50% 0px",
            threshold: 0
        };
        return option;
     }
     _inOutAction(entry){
        if(entry){
            let a = document.querySelector('.' + entry.target.dataset.style);
            if(entry.isIntersecting){
                a.classList.add('inview_box_in');
            }else{
                a.classList.remove('inview_box_in');
            }
        }
     }

}
class tagInview extends scrollInview{
    constructor(el){
        super(el);
    }
    _options(){
        let option = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };
        return option;
     }
     _inOutAction(entry){
        if(entry){
            if(entry.isIntersecting){
                entry.target.classList.add('inview');
            }
        }
     }
}
class scrollMove extends scrollInview{
    constructor(el){
        super(el);
    }
     _inOutAction(entry){
        if(entry){
            if(entry.isIntersecting){
                let atyo = entry.boundingClientRect.top / 10;
                entry.target.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${atyo},0, 1)`;
            }
        }
     }
}

class imgInview extends scrollInview{
    constructor(el){
        super(el);
    }
    _options(){
        let option = {
            root: null,
            rootMargin: "80% 0px",
            threshold: 0
        };
        return option;
     }
     _inOutAction(entry){
        if(entry){
            if(entry.isIntersecting){
                let imgSrc = entry.target.dataset.src;
                entry.target.src = imgSrc;
            }
        }
     }
}

class tagInview_re extends scrollInview{
    constructor(el, el2, rm){
        super(el);
        this.el2 = el2;
        this.rm = rm;
    }
    _options(){
        let option = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };
        return option;
     }
     _inOutAction(entry){
        if(entry){
            if(entry.isIntersecting){
                entry.target.classList.add(this.el2);
            }
            else{
                if(this.rm){
                    entry.target.classList.remove(this.el2);
                }
            }
        }
     }
}

window.addEventListener("DOMContentLoaded", (event) => {
    // const main = new scrollInview('.scroll_box_up');
    const scrollBox = new scrollInviewBox('.inview_box');
    const textAnime = new tagInview('.tO');
    const scrollMoveTag = new scrollMove('.scroll_box_up');
    const inviewImg = new imgInview('.inviewImg');
    const textAnime2 = new tagInview_re('.bb', 'tyotyotyo', 0);
}, false);
