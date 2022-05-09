

let tryI = ['https://assets.tatacliq.com/medias/sys_master/images/32466501402654.jpg', 'https://assets.tatacliq.com/medias/sys_master/images/32466501140510.jpg', 'https://assets.tatacliq.com/medias/sys_master/images/32426893279262.jpg', 'https://assets.tatacliq.com/medias/sys_master/images/32466501206046.jpg', 'https://assets.tatacliq.com/medias/sys_master/images/32466501337118.jpg', 'https://assets.tatacliq.com/medias/sys_master/images/32466501271582.jpg'];

setInterval(changeImage, 2500);
let i = 0;
function changeImage() {

    if(i == tryI.length) {
        i = 0;
    }

        document.querySelector('#ravfirstbox').src = tryI[i];

    i = i+1;
}