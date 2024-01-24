const images = document.querySelectorAll('.slider-one-move img');
const sliderOne = document.querySelector('.slider-one');
const sliderOnemove = document.querySelector('.slider-one-move');
let count = 0;
let width;

function init() {
    width = sliderOne.offsetWidth;
    images.forEach(el => {
        el.style.width = width + 'px';
        el.style.height = '90vh';
    });
    moveSlider();
}

window.addEventListener('resize', init)
init();

const prevOne = document.querySelector('.prev-one');
const nextOne = document.querySelector('.next-one');
const removeText1 = document.querySelector('.slider-one-alltext-1')
const removeText2 = document.querySelector('.slider-one-alltext-2');

prevOne.addEventListener('click', () => {
    count--;
    removeText1.style.opacity = '1';
    removeText2.style.opacity = '0';
    if (count < 0) {
        count = images.length - 1;
        removeText1.style.opacity = '0';
        removeText2.style.opacity = '1';
    }
    moveSlider()
})

nextOne.addEventListener('click', () => {
    count++;
    removeText1.style.opacity = '0';
    removeText2.style.opacity = '1';
    if (count > images.length - 1) {
        count = 0;
        removeText1.style.opacity = '1';
        removeText2.style.opacity = '0';
    }
    moveSlider()
})

function moveSlider() {
    sliderOnemove.style.transform = 'translate(-' + width * count + 'px)';
}

setInterval(() => {
    count++;
    removeText1.style.opacity = '0';
    removeText2.style.opacity = '1';
    if (count > images.length - 1) {
        count = 0;
        removeText1.style.opacity = '1';
        removeText2.style.opacity = '0';
    }
    moveSlider();
}, 10000);


const popupImages = document.querySelectorAll('.pop-up-slider img');
const popupSlider = document.querySelector('.pop-up-slider-container');
const popupSliderimg = document.querySelector('.pop-up-slider');
let popupcount = 0;
let popupwidth;
let popupheight;

function popupinit() {
    popupwidth = popupSlider.offsetWidth;
    popupheight = popupSlider.offsetHeight;
    popupImages.forEach(popupel => {
        popupel.style.width = popupwidth + 'px';
        popupel.style.height = popupheight + 'px';
    })
    movePopupslider()
}

window.addEventListener('resize', popupinit)
popupinit();

const popupPrev = document.querySelector('.prev-pop-up');
const popupNext = document.querySelector('.next-pop-up');

popupNext.addEventListener('click', () => {
    popupcount++;
    if (popupcount > popupImages.length - 1) {
        popupSliderimg.style.transition = 'transform 0s ease';
        popupcount = 0;
    } else {
        popupSliderimg.style.transition = 'transform 0.4s ease';
    }
    movePopupslider();
});

popupPrev.addEventListener('click', () => {
    popupcount--;
    if (popupcount < 0) {
        popupSliderimg.style.transition = 'transform 0s ease';
        popupcount = popupImages.length - 1;
    } else {
        popupSliderimg.style.transition = 'transform 0.4s ease';
    }
    movePopupslider();
});

function movePopupslider() {
    popupSliderimg.style.transform = 'translate(-' + popupwidth * popupcount + 'px)';
}


popupSliderimg.addEventListener('touchstart', handleTouchStart, false);
popupSliderimg.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    x1 = event.touches[0].clientX;
    y1 = event.touches[0].clientY;
}

function handleTouchMove(event) {
    if (x1 == 0 || y1 == 0) {
        return false;
    }

    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        //rigth or left
        if (xDiff < 0) {
            popupcount++;
            if (popupcount > popupImages.length - 1) {
                popupSliderimg.style.transition = 'transform 0s ease';
                popupcount = 0;
            } else {
                popupSliderimg.style.transition = 'transform 0.4s ease';
            }
            movePopupslider();
        } else {
            popupcount--;
            if (popupcount < 0) {
                popupSliderimg.style.transition = 'transform 0s ease';
                popupcount = popupImages.length - 1;
            } else {
                popupSliderimg.style.transition = 'transform 0.4s ease';
            }
            movePopupslider();
        }
    } else {
        //close
        popupSliderimg.style.transition = 'transform 0s ease';
        document.body.style.overflow = 'scroll';
        specialistsPopup.classList.remove('open');
    }
    x1 = 0;
    y1 = 0;
}

const popupOpen = document.querySelector('.pop-up-open');
const specialistsPopup = document.querySelector('.specialists-pop-up-container');
const popupClose = document.querySelector('.pop-up-close');

popupOpen.addEventListener('click', () => {
    for (let i = 0; i < popupImages.length; i++) {
        popupImages[i].src = './images/specialists-pop-up-' + i + '.jpeg';
    }
    document.body.style.overflow = 'hidden';
    specialistsPopup.classList.add('open');
    popupcount = 0;
    movePopupslider();
});

popupClose.addEventListener('click', () => {
    popupSliderimg.style.transition = 'transform 0s ease';
    document.body.style.overflow = 'scroll';
    specialistsPopup.classList.remove('open');
})

const popupOpentwo = document.querySelector('.pop-up-open-2');

popupOpentwo.addEventListener('click', () => {
    for (let i = 0; i < popupImages.length; i++) {
        popupImages[i].src = './images/specialists-pop-up-' + i + '-two' + '.jpeg';
    }
    document.body.style.overflow = 'hidden';
    specialistsPopup.classList.add('open');
    popupcount = 0;
    movePopupslider();
})


const video = document.querySelector('.specialists-pop-up-video');
const videoOpen = document.querySelector('.video-open');
const videoClose = document.querySelector('.video-close');

videoOpen.addEventListener('click', ()=> {
    video.classList.add('open-video');
    document.body.style.overflow = 'hidden';
})

videoClose.addEventListener('click', ()=> {
    video.classList.remove('open-video');
    document.body.style.overflow = 'scroll';
})


const photoImages = document.querySelectorAll('.photo-popup-img-slider img');
const photoSliderImg = document.querySelector('.photo-popup-img-slider');
const photoImg = document.querySelector('.photo-img');
let photocount = 0;
let photowidth;

function photoinit() {
    photowidth = photoSliderImg.offsetWidth;
    photoImages.forEach(photo => {
        photo.style.width = photowidth + 'px';
        photo.style.height = 'auto';
    })
    movePhoto();
}

window.addEventListener('resize', photoinit)
photoinit();

const photoPrev = document.querySelector('.photo-prev');
const photoNext = document.querySelector('.photo-next');

photoNext.addEventListener('click', () => {
    photoImg.style.transition = 'transform 0.4s ease';
    photocount++;
    if (photocount > photoImages.length - 1) {
        photoImg.style.transition = 'transform 0s ease';
        photocount = 0;
    }
    movePhoto();
})

photoPrev.addEventListener('click', () => {
    photoImg.style.transition = 'transform 0.4s ease';
    photocount--;
    if (photocount < 0) {
        photoImg.style.transition = 'transform 0s ease';
        photocount = photoImages.length - 1;
    }
    movePhoto();
})

function movePhoto() {
    photoImg.style.transform = 'translate(-' + photowidth * photocount + 'px)';
}


photoSliderImg.addEventListener('touchstart', touchStart, false);
photoSliderImg.addEventListener('touchmove', touchMove, false);

let t1 = null;
let z1 = null;

function touchStart(event) {
    t1 = event.touches[0].clientX;
    z1 = event.touches[0].clientY;
}

function touchMove(event) {
    if (t1 == 0 || z1 == 0) {
        return false;
    }

    let t2 = event.touches[0].clientX;
    let z2 = event.touches[0].clientY;

    tDiff = t2 - t1;
    zDiff = z2 - z1;

    if (Math.abs(tDiff) > Math.abs(zDiff)) {
        //rigth or left
        if (tDiff < 0) {
            photoImg.style.transition = 'transform 0.4s ease';
            photocount++;
            if (photocount > photoImages.length - 1) {
                photoImg.style.transition = 'transform 0s ease';
                photocount = 0;
            }
            movePhoto();
        } else {
            photoImg.style.transition = 'transform 0.4s ease';
            photocount--;
            if (photocount < 0) {
                photoImg.style.transition = 'transform 0s ease';
                photocount = photoImages.length - 1;
            }
            movePhoto();
        }
    } else {
        document.body.style.overflow = 'scroll';
        photoPopup.classList.remove('photo-open');
    }
    t1 = 0;
    z1 = 0;
}


const photoOpen = document.querySelectorAll('.photo-container img')
const photoPopup = document.querySelector('.photo-popup-container');
const photoClose = document.querySelector('.photo-close');

photoOpen.forEach(photo => {
    photo.addEventListener('click', () => {
        photoImg.style.transition = 'transform 0s ease';
        photocount = photo.attributes[1].value;
        movePhoto();
        document.body.style.overflow = 'hidden';
        photoPopup.classList.add('photo-open');
    })
})

photoClose.addEventListener('click', () => {
    document.body.style.overflow = 'scroll';
    photoPopup.classList.remove('photo-open');
})


const showMore = document.querySelector('.photo-container.showmore');
const showBtn = document.querySelector('.btn-showmore');
const showBtnClose = document.querySelector('.btn-showmore.close');

showBtn.addEventListener('click', () => {
    showMore.classList.add('showopen');
    showBtn.style.display = 'none';
    showBtnClose.style.display = 'block';
})

showBtnClose.addEventListener('click', () => {
    showMore.classList.remove('showopen');
    showBtn.style.display = 'block';
    showBtnClose.style.display = 'none';
})


const submit = document.querySelector('.submit');
const number = document.querySelector('.number');
const username = document.querySelector('.name');

submit.addEventListener('click', () => {
    submit.innerHTML = 'Отправлено';
    number.value = '';
    username.value = '';
})


document.getElementById('elastic').oninput = function () {
    let val = this.value.trim().toLowerCase();
    let elasticItems = document.querySelectorAll('.services li');
    if (val != '') {
        elasticItems.forEach(elem => {
            if (elem.innerText.toLowerCase().search(val) == -1) {
                elem.classList.add('hide');
                // kosmetOpen.style.display = 'none';
                // kosmetClose.style.display = 'none';
            } else {
                elem.classList.remove('hide');
                // kosmetOpen.style.display = 'flex';
                // kosmetClose.style.display = 'none';
            }
        })
        // kosmet.forEach(kos => {
        //     if (kos.innerText.toLowerCase().search(val) == -1) {
        //         kos.style.display = 'none';
        //     } else {
        //         kos.style.display = 'flex';
        //         kosmetOpen.style.display = 'none';
        //         kosmetClose.style.display = 'flex';
        //     }
        // })
    } else {
        elasticItems.forEach(elem => {
            elem.classList.remove('hide');
            // kosmet.forEach(kos => {
            //     kos.style.display = 'none';
            // })
            // kosmetOpen.style.display = 'flex';
            // kosmetClose.style.display = 'none';
        })
    }
}


// const kosmetOpen = document.querySelector('.service-open');
// const kosmet = document.querySelectorAll('.service-item.kosmet')
// const kosmetClose = document.querySelector('.service-close')



// kosmetOpen.forEach(k => {
//     k.addEventListener('click', () => {
//         kosmet.forEach(ks => {
//             if (ks.childElementCount = 3) {
//                 ks.style.display = 'flex';
//                 k.style.display = 'none';
//                 kosmetClose.forEach(kc => {
//                     kc.style.display = 'flex';
//                 })
//             }
//         })
//         // console.log(kosmet.childElementCount);
//         // // let kosmetClass = k.classList.(''+className+'');
//         // // kosmet.classList.add(k.attributes[0].value[1]);
//         // console.log(kosmetClass);
//         // kosmetClass.forEach(kos => {
//         //     kos.style.display = 'flex';
//         //     k.style.display = 'none';
//         //     kosmetClose.forEach(kc => {
//         //         kc.style.display = 'flex';
//         //     })
//         // });
//     })
// });

// kosmetClose.forEach(kc => {
//     kc.addEventListener('click', () => {
//         kosmet.forEach(kos => {
//             kos.style.display = 'none';
//             kc.style.display = 'none';
//             kosmetOpen.forEach(k => {
//                 k.style.display = 'flex';
//             });
//         })
//     })
// })

// kosmetClose.addEventListener('click', () => {
//     kosmet.forEach(kos => {
//         kos.style.display = 'none';
//         kosmetOpen.style.display = 'flex';
//         kosmetClose.style.display = 'none';
//     })
// })

// kosmetOpen.addEventListener('click', () => {
//     kosmet.forEach(kos => {
//         kos.style.display = 'flex';
//         kosmetOpen.style.display = 'none';
//         kosmetClose.style.display = 'flex';
//     })
// })


// kosmetClose.addEventListener('click', () => {
//     kosmet.forEach(kos => {
//         kos.style.display = 'none';
//         kosmetOpen.style.display = 'flex';
//         kosmetClose.style.display = 'none';
//     })
// })

const menuOpen = document.querySelector('.menu');
const menuClose = document.querySelector('.menu.close');
const headerOpen = document.querySelector('.header-two');
const headerOne = document.querySelector('.header-one');

const navItems = document.querySelectorAll('.list-item');

if (window.innerWidth < 930) {
    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';

    menuOpen.addEventListener('click', () => {
        headerOpen.classList.add('opened');
        document.querySelector('body').style.overflow = 'hidden';
        menuOpen.style.display = 'none';
        menuClose.style.display = 'block';
    })

    menuClose.addEventListener('click', () => {
        headerOpen.classList.remove('opened');
        document.querySelector('body').style.overflow = 'scroll';
        menuOpen.style.display = 'block';
        menuClose.style.display = 'none';
    })

    navItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            document.querySelector('body').style.overflow = 'scroll';
            headerOpen.classList.remove('opened');
            menuClose.style.display = 'none';
            menuOpen.style.display = 'block';
        })
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 930) {
        // headerOne.style.height = 'auto';
        menuOpen.style.display = 'none';
        menuClose.style.display = 'none';
        navItems.forEach(navItem => {
            navItem.addEventListener('click', () => {
                document.querySelector('body').style.overflow = 'scroll';
                menuClose.style.display = 'none';
                menuOpen.style.display = 'none';
            })
        });
    } else {
        navItems.forEach(navItem => {
            navItem.addEventListener('click', () => {
                document.querySelector('body').style.overflow = 'scroll';
                headerOpen.classList.remove('opened');
                menuClose.style.display = 'none';
                menuOpen.style.display = 'block';
            })
        });
        // headerOne.style.height = 60 + 'px';
        menuOpen.style.display = 'block';
        menuClose.style.display = 'none';

        menuOpen.addEventListener('click', () => {
            headerOpen.classList.add('opened');
            document.querySelector('body').style.overflow = 'hidden';
            menuOpen.style.display = 'none';
            menuClose.style.display = 'block';
        })

        menuClose.addEventListener('click', () => {
            headerOpen.classList.remove('opened');
            document.querySelector('body').style.overflow = 'scroll';
            menuOpen.style.display = 'block';
            menuClose.style.display = 'none';
        })
    }
})
