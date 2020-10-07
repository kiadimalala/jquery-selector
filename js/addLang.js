import {
    counter,
    addCounter
} from './setLang.js'

export function addLang(name) {
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

            //     //Appy bg-color on add
            $(document)
                .find($("tbody").children("tr")[1])
                .addClass("bg-green-500");
            $(document)
                .find($("tbody").children("tr")[2])
                .find($("td:first-child"))
                .addClass("bg-yellow-400");
            $(document)
                .find($("tbody").children("tr")[3])
                .find($("td:nth-child(2)"))
                .addClass("bg-blue-600");

            $('input').val(null)
            addCounter();
        }
    })
}