import {
    LANG
} from './mock-language.js'
export let counter = 1
export function delCounter() {
    counter--
}
export function addCounter() {
    counter++
}
//Set ruby cell line background to green
$(".item-2").children().addClass("bg-green-500");

//Set td 4 id background to yellow
$(".item-3").children().first().addClass("bg-yellow-400");

//Set the background of nom .net to blue
$(".item-4").find($(".item-4").children("td")[1]).addClass("bg-blue-600");

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

        $("tbody").addClass("bg-red-600");

        //Set ruby cell line background to green
        $(".item-2").children().addClass("bg-green-500");

        //Set td 4 id background to yellow
        $(".item-3").children().first().addClass("bg-yellow-400");

        //Set the background of nom .net to blue
        $(".item-4").find($(".item-4").children("td")[1]).addClass("bg-blue-600");
    })

}