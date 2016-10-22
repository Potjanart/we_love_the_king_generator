    var username = document.getElementById('username');
    var offset = document.getElementById('offset');
    var fontsize = document.getElementById('fontsize');
    var download = document.getElementById('download');
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d');


    var render = function () {
                window.location.hash = username.value;
                var img = new Image();
                img.onload = function () {
                    context.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
                    context.fillStyle = '#fff';
                    context.font = 'normal ' + (+fontsize.value) + 'px noworry';
                    context.fillText(username.value, +offset.value, 310);
                    context.font = 'normal 70px noworry';
                    context.fillText('ในหลวง', 400, 310);
                };
                img.src = 'bg.png';
            }

   var isFacebookApp = function () {
                var ua = navigator.userAgent || navigator.vendor || window.opera;
                return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
            };
        
        if (isFacebookApp()) {
            var dialog = document.getElementById('fb_app_browser');
            if (!dialog.showModal) {
                dialogPolyfill.registerDialog(dialog);
            }
            dialog.showModal();
            
        }
        
        if (window.location.hash) {
            username.value = decodeURIComponent(window.location.hash.replace(/#|@(.)+/g, '') || 'เรา');
        }
        render();
        username.onkeyup = render;
        username.onchange = render;
        offset.oninput = render;
        fontsize.oninput = render;
        download.onclick = function (e) {
            ga('Main.send', 'event', 'สร้างรูปเรารักในหลวง - Download', 'view', username.value);
            this.href = canvas.toDataURL();
            this.download = 'We_Love_the_King.png';
        };