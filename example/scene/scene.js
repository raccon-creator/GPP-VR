var num=1
console.log(22)
AFRAME.registerComponent('scale-on-mouseenter', {
    schema: {
        to: {default: '2.5 2.5 2.5'}
    },
    init: function () {
        var data = this.data;
        this.el.addEventListener('mouseenter', function () {
            this.setAttribute('scale', data.to);
        });
        this.el.addEventListener('mouseleave',function(){
            this.setAttribute('scale', '0.2 0.2 0.2')
        })
    }
});
AFRAME.registerComponent('jumpleft', {
    init: function () {
        this.el.addEventListener('mouseenter', function () {
            var sceneEl = document.querySelector('a-scene');
            if(num%3!=0){
                num=num+1;
                console.log(num);
                sceneEl.querySelector('#panorama').setAttribute('src','../img/'+num+'.JPG');
            }

        });
    }
});
AFRAME.registerComponent('jumpright', {
    init: function () {
        this.el.addEventListener('mouseenter', function () {
            var sceneEl = document.querySelector('a-scene');
            if(num!=1&&num!=4){
                num=num-1;
                console.log(num);
                sceneEl.querySelector('#panorama').setAttribute('src','../img/'+num+'.JPG');
            }
        });
    }
});
AFRAME.registerComponent('jumpforward', {
    init: function () {
        this.el.addEventListener('mouseenter', function () {
            var sceneEl = document.querySelector('a-scene');
            if(num<=3){
                num=num+3;
                console.log(num);
                sceneEl.querySelector('#panorama').setAttribute('src','../img/'+num+'.JPG');
            }
        });
    }
});
AFRAME.registerComponent('jumpback', {
    init: function () {
        this.el.addEventListener('mouseenter', function () {
            var sceneEl = document.querySelector('a-scene');
            if(num>3){
                num=num-3;
                console.log(num);
                sceneEl.querySelector('#panorama').setAttribute('src','../img/'+num+'.JPG');
            }
        });
    }
});