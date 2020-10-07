import {
    counter,
    delCounter
} from './setLang.js'

export function delLang() {
    $(document).on('click', '.delete', function () {
        $(this).parents()[1].remove();
        delCounter();
        $("tbody")
            .find("tr")
            .each(function (index) {
                var firstTDDomEl = $(this).find("td")[0];
                var $firstTDJQObject = $(firstTDDomEl);
                $firstTDJQObject.text(index + 1);
            });
    })
}