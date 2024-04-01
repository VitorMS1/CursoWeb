import $ from 'jquery';
import { onLoadHtmlSuccess } from '../main/include';

const animationTime = 200;

function typeFilter(type, button) {

    function filtrate(typeFiltrate) {
        $('[galery-pokemon]').each(function (i, e) {
            const types = $(this).attr('galery-pokemon').split(',');
            const typeMatch = types.includes(typeFiltrate) || typeFiltrate === null;

            if (typeMatch) {
                $(this).parent().removeClass('d-none');
                $(this).fadeIn(animationTime);
            }
            else {
                $(this).fadeOut(animationTime, () => {
                    $(this).parent().addClass('d-none');
                })
            }
        })
    }

    function cleanActive() {
        $(button).siblings().removeClass('active').attr({ actualFilter: false });
    }

    const actual = $(button).attr('actualFilter') === "true" ? true : false
    if (!actual) {
        cleanActive();
        $(button).attr({ actualFilter: true });
        $(button).toggleClass('active');
        filtrate(type);
    }
    else {
        $(button).attr({ actualFilter: false });
        $(button).toggleClass('active');
        filtrate(null);
    }
}

$.fn.typeFilterButtons = function () {
    const typeList = new Set;
    $('[galery-pokemon]').each(function (i, e) {
        const types = $(e).attr('galery-pokemon').split(',');

        types.forEach(type => {
            typeList.add(type);
        });
    })

    const filters = Array.from(typeList).map(type => {
        const filter = $('<button>').addClass(['btn', 'btn-info', 'col-4', 'col-sm-2', 'col-md-1', 'px-1', 'py-1', 'border', 'border-info-subtle', 'overflow-hidden']).html(type);
        filter.on("click", e => typeFilter(type, e.target));
        return filter;
    })

    const filtersMenu = $('<div>').addClass(['row', 'd-flex', 'justify-content-center', 'p-0']).append(filters);
    $(this).html(filtersMenu);
    return this
}

onLoadHtmlSuccess(function () {
    $('[galery-pokemon-filters]').typeFilterButtons()
})