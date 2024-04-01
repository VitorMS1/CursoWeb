import $ from 'jquery';

const loadHtmlSuccessCallbacks = [];

export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback);
    }
    else{
        loadHtmlSuccessCallbacks = loadHtmlSuccessCallbacks.filter(callback)
    };
};


function loadIncludes(tagParent) {
    if (!tagParent) tagParent = 'body';
    $(tagParent).find('[galery-include]').each(function (i, elemento) {
        const url = $(elemento).attr('galery-include');
        $.ajax({
            url,
            success(data) {
                $(elemento).html(data);
                $(elemento).removeAttr('galery-include');
                
                loadHtmlSuccessCallbacks.forEach(callback => callback(data))
                loadIncludes(elemento);
            }
        })
    })
}

loadIncludes();

