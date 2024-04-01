import $ from 'jquery';
import { onLoadHtmlSuccess } from './include';

function generateImg() {
    const pokemonsImgs = [
        { imagePath: '/imgs/pokemon1.png', imgInfo: ['flying', 'dragon'] },
        { imagePath: '/imgs/pokemon2.png', imgInfo: ['psychic', 'metal'] },
        { imagePath: '/imgs/pokemon3.png', imgInfo: ['grass'] },
        { imagePath: '/imgs/pokemon4.png', imgInfo: ['poison', 'ghost'] },
        { imagePath: '/imgs/pokemon5.png', imgInfo: ['fire'] },
        { imagePath: '/imgs/pokemon6.png', imgInfo: ['grass', 'ghost'] },
        { imagePath: '/imgs/pokemon7.png', imgInfo: ['dragon', 'steel'] },
        { imagePath: '/imgs/pokemon8.png', imgInfo: ['fire', 'psychic'] },
        { imagePath: '/imgs/pokemon9.png', imgInfo: ['water'] },
        { imagePath: '/imgs/pokemon10.png', imgInfo: ['dragon', 'ghost'] },
        { imagePath: '/imgs/pokemon11.png', imgInfo: ['normal', 'flying'] },
        { imagePath: '/imgs/pokemon12.png', imgInfo: ['normal'] }
    ];


    pokemonsImgs.forEach((pokemonsImg, index) => {
        if (!Array.from(ids).includes(index)) {
            const imgDiv = $('<div>').addClass(['col-12', 'col-md-6', 'col-lg-3', 'col-xl-2', 'm-2', 'p-0'])
                .append($('<img>').addClass(['img-thumbnail','w-100', 'h-100', 'p-2'])
                    .attr({ src: pokemonsImg.imagePath, 'galery-pokemon': pokemonsImg.imgInfo }));
            $('#containerImgRow').append(imgDiv);

            ids.add(index);
        }
        else {
            onLoadHtmlSuccess(function () {
                generateImg();
            })
            return;
        }
    });

};


const ids = new Set;

onLoadHtmlSuccess(function () {
    $('#containerImgRow').attr({ know: true });
    if ($('#containerImgRow').attr('know')) {
        generateImg();
    };
})

