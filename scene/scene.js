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
        this.el.addEventListener('triggerdown', function () {
            var sceneEl = document.querySelector('a-scene');
            if(num>1){
                num=num-1;
                console.log(num);
                sceneEl.querySelector('#panorama').setAttribute('src','#'+'p'+num);
            }

        });
    }
});
AFRAME.registerComponent('jumpright', {
    init: function () {
        console.log(1024)
        this.el.addEventListener('triggerdown', function () {
            console.log(2048)
            var sceneEl = document.querySelector('a-scene');
            if(num<10){
                num=num+1;
                console.log(num);
                sceneEl.querySelector('#vive').setAttribute('src','#'+'p'+num);
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
                sceneEl.querySelector('#panorama').setAttribute('src','#'+'p'+num);
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
                sceneEl.querySelector('#panorama').setAttribute('src','#'+'p'+num);
            }
        });
    }
});



