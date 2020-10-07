import {
    LANG
} from './mock-language.js'
let counter = 1
export function setLang() {

    LANG.forEach(lang => {
        let template = `<tr class='item-${counter}'>
            <td> ${counter++} </td>
            <td> ${lang.name} </td>
            <td> 
                <button class="delete bg-gray-200 ml-2 p-1 focus:outline-none text-xs m-2">
                    Supprimer
                </button>
            </td>
        </tr>`
        $('tbody').append(template)
    })

}

export function AddLang(name) {
    $('#submit').click(function () {
        name = $('input').val()
        if (name === "") {
            let _err = $(".form");
            let _errTemplate =
                '<p class="err text-red-500 text-center m-2">Veuillez saisir un nom</p>';
            if ($(".err").length === 0) {
                _err.append(_errTemplate);

                //Remove err message after delay
                setTimeout(function () {
                    $(".err").remove();
                }, 2000);
            }
        } else {
            LANG.push({
                name
            })
            let _tbody = $("tbody");
            let template =
                '<tr class=" item-' +
                counter +
                '  " ><td> ' +
                counter +
                " </td><td>" +
                name +
                '</td><td><button id="delete" class="delete bg-gray-200 ml-2 p-1 focus:outline-none text-xs m-2">Supprimer</button></td></tr>';
            _tbody.append(template);
            $('input').val(null)
            counter++;
        }
    })
}