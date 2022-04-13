const arr =[
    {
        id: 1,
        name: "MacBook Air 13-inch",
        rang: ["Gold","Silver","Gray"],
        ram: ['8','16'],
        xotira: ['256GB','512GB','1TB'],
        rasm: [
                [
                "./imgs/gold/003a584a-0d7d-4123-9f03-b3386914c6c2.webp",
                "./imgs/gold/b8166836-a68f-4886-bf74-04d2ae1e38da.webp",
                "./imgs/gold/dfd7cc8c-8f26-430c-ba64-7820b90d4df1.webp",
                "./imgs/gold/355da324-69f8-41d0-a143-605d8e470bad.webp",
                "./imgs/gold/2aa0ef46-60b7-469c-8eea-11d8bf09d9f3.webp"
                ],
                [
                "./imgs/silver/cf510327-b4e8-4378-a001-cbd8779504b8.webp",
                "./imgs/silver/67762a5d-aa1e-4d3c-b3cd-fda8b50b937f.webp",
                "./imgs/silver/51b73a16-4170-4944-80cf-6f8bca51351e.webp",
                "./imgs/silver/e622b5e0-65fc-4e91-a70d-9025fc30fd58.webp",
                "./imgs/silver/d90e01d1-2087-48a3-9462-912f58ea138c.webp"
                ],
                [
                "./imgs/gray/edb6411f-3f34-47b1-a118-36045811f045.webp",
                "./imgs/gray/7f956a88-c90a-44b4-ba40-50aac4807181.webp",
                "./imgs/gray/dfda6000-e242-4442-ad59-bac513806275.webp",
                "./imgs/gray/eb6d4a3e-b892-4c4f-aff6-46d333c494ae.webp",
                "./imgs/gray/66715875-b08c-45a0-9f79-5f4a222e5943.webp"
                ]
        ],
        price: [
            {
                '8-256': [12497000, 14621000],
                '8-512': [15066000, 17627500],
            },
            {
                '16-256': [16935000, 19813500],
                '16-512': [19270500, 22546500],
                '16-1': [20438500, 23913000],
            }
        ]
    }
];

const imgContent = document.querySelector('.imgcontent');
const btnImgContainer = document.querySelector('.img-carusel-indicator');
const titleSection = document.querySelector('#title_section');
// count
let count = 1;
let transform = 0;


arr.forEach(item =>{
    item.rasm.forEach((slide) =>{
        let imgslide = document.createElement('div');
        imgslide.className = "img-slider";
        let imgSlidebtn = document.createElement('div');
        imgSlidebtn.className = 'btn-images';

        slide.forEach((imgs,idx) =>{
            let images = document.createElement('img');
            images.className = 'images';
            let changeImgBtn = document.createElement('button');
            changeImgBtn.className = 'img-category';
            changeImgBtn.innerHTML = `
            <img src="${imgs}" width="100%" height="100%">
            `
            images.src = imgs;
            imgslide.appendChild(images);
            imgSlidebtn.appendChild(changeImgBtn);

            changeImgBtn.addEventListener('click', ()=>{
                transform = idx;
                imgslide.style.transform = `translate(${-transform * 20}%)`;
            })
        })
        imgContent.appendChild(imgslide);
        btnImgContainer.appendChild(imgSlidebtn);
    })
})

// modal section start
const modalFullScreen = document.querySelector('.modal-fullscreen');
const modalContainer = document.querySelector('.modal-container');
const modalIndicator = document.querySelector('.modal_indicator');
const closeModal = document.querySelector('.close_modal');
const openModal = document.querySelector('.btn_modal');

openModal.addEventListener('click', ()=>{
    modalFullScreen.classList.remove('d-none');
});
closeModal.addEventListener('click', ()=>{
    modalFullScreen.classList.add('d-none');
});

let changeModal = 0;

arr.forEach(item =>{
    item.rasm.forEach((slide) =>{
        let modalSlider = document.createElement('div');
        modalSlider.className = "modal-slider";
        let modalSlideBtn = document.createElement('div');
        modalSlideBtn.className = 'modal_btn_slide';
        slide.forEach((imgs,idx) =>{
            let modalItem = document.createElement('div');
            modalItem.className = 'modal-item';
            modalItem.innerHTML = `
            <img src=${imgs}>
            `;
            let changeImgBtn = document.createElement('button');
            changeImgBtn.innerHTML = `
            <img src=${imgs} width="100%" height="100%">
            `
            changeImgBtn.addEventListener('click', ()=>{
                changeModal = idx;
                modalSlider.style.transform = `translate(${-changeModal * 500}px)`;
            })
            modalSlider.appendChild(modalItem);
            modalSlideBtn.appendChild(changeImgBtn);
        })
        modalContainer.appendChild(modalSlider);
        modalIndicator.appendChild(modalSlideBtn)
    })
})
let slideModal = document.querySelectorAll('.modal-slider');
let btnModal = document.querySelectorAll('.modal_btn_slide');

// title section
arr.forEach(item =>{
    titleSection.innerHTML = `
        <h1 class="mac-title"><span>${item.name}</span> <br> <span class="chip">M1</span>/<span class="ram-hajmi">${item.ram[0]}</span>/<span class="xotira-hajmi">${item.xotira[0]}</span> <span class="desktop-color">${item.rang[0]}</span></h1>
        <div class="group-btn">
            <p>Ram</p>
            <button  class="change_ram active_btn">${item.ram[0]}GB</button>
            <button class="change_ram">${item.ram[1]}GB</button>
        </div>
        <div class="group-btn">
            <p>Xotira Hajmi</p>
            <button class="change_memory active_btn">${item.xotira[0]}</button>
            <button class="change_memory">${item.xotira[1]}</button>
            <button class="change_memory d-none">${item.xotira[2]}</button>
        </div>
        <div class="group-btn padding-60">
            <p>Ranglar</p>
            <button id="${item.rang[0]}" class="btn-rang active_btn">
                <div class="ranglar">
                    <p class="rang-icon"><span class="active-yellow"></span></p>
                    <p>TILLA RANG</p>
                </div>
            </button>
            <button id="${item.rang[1]}" class="btn-rang">
                <div class="ranglar">
                    <p class="rang-icon"><span class="active-silver"></span></p>
                    <p>KUMUSH RANG</p>
                </div>
            </button>
            <button id="${item.rang[2]}" class="btn-rang">
                <div class="ranglar">
                    <p class="rang-icon"><span class="active-gray"></span></p>
                    <p>KOSMIK RANG</p>
                </div>
            </button>
        </div>
        <div class="product_costs">
            <button class="dec_price">-</button>
            <div class="input_count"><span id="input_count">${count}</span></div>
            <button class="inc_price">+</button>
        </div>
        <div class="product-price">
            <h6><span class="sale-price">${item.price[0]["8-256"][0]}</span> so'm</h6>
            <p><del><span class="old-price">${item.price[0]["8-256"][1]}</span> so'm</del></p>
        </div>
        <button class="savatcha btn-primary">Savatchaga qo'shish</button>
        <button class="taqqoslash">Taqqoslash</button>
        <div class="podilitsa">
            <svg width="25" height="25" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7175 3.09494V0.660671C10.7175 0.112103 11.3232 -0.182752 11.7346 0.123532L11.8055 0.185245L16.9449 5.23664C17.1849 5.47321 17.2066 5.85264 17.01 6.11435L16.9449 6.18863L11.8055 11.2435C11.4192 11.6229 10.7918 11.3795 10.7232 10.8617L10.7175 10.768V8.37262L10.4226 8.39891C8.3655 8.61948 6.39294 9.56918 4.49466 11.264C4.04895 11.6617 3.36096 11.2869 3.4341 10.6857C4.00324 6.01149 6.38837 3.43437 10.4603 3.11208L10.7175 3.09494V3.09494Z" fill="#0066cc"></path><path d="M2.85712 1.14294C2.09937 1.14294 1.37265 1.44396 0.836832 1.97978C0.301018 2.51559 0 3.24231 0 4.00007V13.1429C0 13.9006 0.301018 14.6273 0.836832 15.1632C1.37265 15.699 2.09937 16 2.85712 16H11.9999C12.7577 16 13.4844 15.699 14.0202 15.1632C14.556 14.6273 14.857 13.9006 14.857 13.1429V12C14.857 11.8485 14.7968 11.7031 14.6897 11.596C14.5825 11.4888 14.4372 11.4286 14.2856 11.4286C14.1341 11.4286 13.9887 11.4888 13.8816 11.596C13.7744 11.7031 13.7142 11.8485 13.7142 12V13.1429C13.7142 13.5975 13.5336 14.0336 13.2121 14.355C12.8906 14.6765 12.4546 14.8571 11.9999 14.8571H2.85712C2.40247 14.8571 1.96644 14.6765 1.64495 14.355C1.32346 14.0336 1.14285 13.5975 1.14285 13.1429V4.00007C1.14285 3.54541 1.32346 3.10938 1.64495 2.78789C1.96644 2.4664 2.40247 2.28579 2.85712 2.28579H6.28567C6.43722 2.28579 6.58257 2.22559 6.68973 2.11843C6.7969 2.01126 6.8571 1.86592 6.8571 1.71437C6.8571 1.56282 6.7969 1.41747 6.68973 1.31031C6.58257 1.20315 6.43722 1.14294 6.28567 1.14294H2.85712Z" fill="#0066cc"></path></svg>
        </div>
    `
})

// desctop images
let sliderImages = document.querySelectorAll('.img-slider');
let btnImagesSlider = document.querySelectorAll('.btn-images');

// desctop color button 
const btnGold = document.querySelector('#Gold');
const btnSilver = document.querySelector('#Silver');
const btnGray = document.querySelector('#Gray');

// title span
const ramVolume = document.querySelector('.ram-hajmi'),
memoryVolume = document.querySelector('.xotira-hajmi'),
desctopColor = document.querySelector('.desktop-color');

// desctop ram 
const changeRam = document.querySelectorAll('.change_ram'),
// desctop memory 
changeMemory = document.querySelectorAll('.change_memory');
// desctop price
const salePrice = document.querySelector('.sale-price'),
oldPrice = document.querySelector('.old-price');
// product cost
const decPrice = document.querySelector('.dec_price');
const incPrice = document.querySelector('.inc_price');
const inputCount = document.querySelector('#input_count');

let saleCount = salePrice.innerText;
let oldCount = oldPrice.innerText;

btnGold.addEventListener("click", ()=>{
    btnGold.classList.add('active_btn');
    btnSilver.classList.remove('active_btn');
    btnGray.classList.remove('active_btn');

    desctopColor.innerHTML = arr[0].rang[0];

    sliderImages[0].classList.remove('d-none');
    btnImagesSlider[0].classList.remove('d-none');
    slideModal[0].classList.remove('d-none');
    btnModal[0].classList.remove('d-none');

    sliderImages[1].classList.add('d-none');
    sliderImages[2].classList.add('d-none');
    btnImagesSlider[1].classList.add('d-none');
    btnImagesSlider[2].classList.add('d-none');
    slideModal[1].classList.add('d-none');
    btnModal[1].classList.add('d-none');
    slideModal[2].classList.add('d-none');
    btnModal[2].classList.add('d-none');
    
});

btnSilver.addEventListener("click", ()=>{
    btnGold.classList.remove('active_btn');
    btnSilver.classList.add('active_btn');
    btnGray.classList.remove('active_btn');

    desctopColor.innerHTML = arr[0].rang[1];

    sliderImages[1].classList.remove('d-none');
    btnImagesSlider[1].classList.remove('d-none');
    slideModal[1].classList.remove('d-none');
    btnModal[1].classList.remove('d-none');

    sliderImages[0].classList.add('d-none');
    sliderImages[2].classList.add('d-none');
    btnImagesSlider[0].classList.add('d-none');
    btnImagesSlider[2].classList.add('d-none');
    slideModal[0].classList.add('d-none');
    btnModal[0].classList.add('d-none');
    slideModal[2].classList.add('d-none');
    btnModal[2].classList.add('d-none');
});

btnGray.addEventListener("click", ()=>{
    btnGold.classList.remove('active_btn');
    btnSilver.classList.remove('active_btn');
    btnGray.classList.add('active_btn');

    desctopColor.innerHTML = arr[0].rang[2];

    sliderImages[2].classList.remove('d-none');
    btnImagesSlider[2].classList.remove('d-none');
    slideModal[2].classList.remove('d-none');
    btnModal[2].classList.remove('d-none');

    sliderImages[1].classList.add('d-none');
    sliderImages[0].classList.add('d-none');
    btnImagesSlider[1].classList.add('d-none');
    btnImagesSlider[0].classList.add('d-none');
    slideModal[1].classList.add('d-none');
    btnModal[1].classList.add('d-none');
    slideModal[0].classList.add('d-none');
    btnModal[0].classList.add('d-none');
});


changeRam[0].addEventListener('click', ()=>{
    changeRam[1].classList.remove('active_btn');
    changeRam[0].classList.add('active_btn');
    ramVolume.innerHTML = arr[0].ram[0];
    changeMemory[2].style.display = "none"
    
    if(changeRam[0].classList == "change_ram active_btn" && changeMemory[0].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[0]["8-256"][0];
        oldPrice.innerText = arr[0].price[0]["8-256"][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }else if(changeRam[0].classList == "change_ram active_btn" && changeMemory[1].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[0]['8-512'][0];
        oldPrice.innerText = arr[0].price[0]['8-512'][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }
});

changeRam[1].addEventListener('click', ()=>{
    changeRam[1].classList.add('active_btn');
    changeRam[0].classList.remove('active_btn');
    ramVolume.innerHTML = arr[0].ram[1];
    changeMemory[2].classList.remove('d-none')
    changeMemory[2].style.display = "inline-block";

    if(changeRam[1].classList == "change_ram active_btn" && changeMemory[0].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[1]["16-256"][0];
        oldPrice.innerText = arr[0].price[1]["16-256"][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }else if(changeRam[1].classList == "change_ram active_btn" && changeMemory[1].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[1]['16-512'][0];
        oldPrice.innerText = arr[0].price[1]['16-512'][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }else if(changeRam[1].classList == "change_ram active_btn" && changeMemory[2].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[1]['16-1'][0];
        oldPrice.innerText = arr[0].price[1]['16-1'][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }
});

changeMemory[0].addEventListener('click', ()=>{
    changeMemory[0].classList.add('active_btn');
    changeMemory[1].classList.remove('active_btn');
    changeMemory[2].classList.remove('active_btn');
    memoryVolume.innerHTML = arr[0].xotira[0];
    changeRam[0].style.display = "inline-block";
        
    if(changeRam[0].classList == "change_ram active_btn" && changeMemory[0].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[0]["8-256"][0];
        oldPrice.innerText = arr[0].price[0]["8-256"][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }else if(changeRam[0].classList == "change_ram active_btn" && changeMemory[1].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[0]['8-512'][0];
        oldPrice.innerText = arr[0].price[0]['8-512'][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }

    if(changeRam[1].classList == "change_ram active_btn" && changeMemory[0].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[1]["16-256"][0];
        oldPrice.innerText = arr[0].price[1]["16-256"][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }else if(changeRam[1].classList == "change_ram active_btn" && changeMemory[1].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[1]['16-512'][0];
        oldPrice.innerText = arr[0].price[1]['16-512'][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }else if(changeRam[1].classList == "change_ram active_btn" && changeMemory[2].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[1]['16-1'][0];
        oldPrice.innerText = arr[0].price[1]['16-1'][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }

})
changeMemory[1].addEventListener('click', ()=>{
    changeMemory[1].classList.add('active_btn');
    changeMemory[0].classList.remove('active_btn');
    changeMemory[2].classList.remove('active_btn');
    memoryVolume.innerHTML = arr[0].xotira[1];
    changeRam[0].style.display = "inline-block";

    if(changeRam[0].classList == "change_ram active_btn" && changeMemory[0].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[0]["8-256"][0];
        oldPrice.innerText = arr[0].price[0]["8-256"][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }else if(changeRam[0].classList == "change_ram active_btn" && changeMemory[1].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[0]['8-512'][0];
        oldPrice.innerText = arr[0].price[0]['8-512'][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }

    if(changeRam[1].classList == "change_ram active_btn" && changeMemory[0].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[1]["16-256"][0];
        oldPrice.innerText = arr[0].price[1]["16-256"][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }else if(changeRam[1].classList == "change_ram active_btn" && changeMemory[1].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[1]['16-512'][0];
        oldPrice.innerText = arr[0].price[1]['16-512'][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }else if(changeRam[1].classList == "change_ram active_btn" && changeMemory[2].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[1]['16-1'][0];
        oldPrice.innerText = arr[0].price[1]['16-1'][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }

})

changeMemory[2].addEventListener('click', ()=>{
    changeMemory[2].classList.add('active_btn');
    changeMemory[1].classList.remove('active_btn');
    changeMemory[0].classList.remove('active_btn');
    memoryVolume.innerHTML = arr[0].xotira[2];
    changeRam[0].style.display = "none";

    if(changeRam[0].classList == "change_ram active_btn" && changeMemory[0].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[0]["8-256"][0];
        oldPrice.innerText = arr[0].price[0]["8-256"][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }else if(changeRam[0].classList == "change_ram active_btn" && changeMemory[1].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[0]['8-512'][0];
        oldPrice.innerText = arr[0].price[0]['8-512'][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }

    if(changeRam[1].classList == "change_ram active_btn" && changeMemory[0].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[1]["16-256"][0];
        oldPrice.innerText = arr[0].price[1]["16-256"][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }else if(changeRam[1].classList == "change_ram active_btn" && changeMemory[1].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[1]['16-512'][0];
        oldPrice.innerText = arr[0].price[1]['16-512'][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }else if(changeRam[1].classList == "change_ram active_btn" && changeMemory[2].classList == 'change_memory active_btn'){
        salePrice.innerText = arr[0].price[1]['16-1'][0];
        oldPrice.innerText = arr[0].price[1]['16-1'][1];
        saleCount = salePrice.innerText;
        oldCount = oldPrice.innerText;
    }
})

incPrice.addEventListener('click',()=>{
    count++;
    inputCount.innerHTML = count;
    salePrice.innerText = saleCount * count;
    oldPrice.innerText = oldCount * count
})
decPrice.addEventListener('click',()=>{
    if(count > 1){
        count--;
    }
    inputCount.innerHTML = count;
    salePrice.innerText = saleCount * count;
    oldPrice.innerText = oldCount * count
})