document.querySelector('button').addEventListener("click", myClick);
function myClick() {
    var name = document.getElementById("name");
    var gmail = document.getElementById("gmail");
    var a = name.value;
    var b = gmail.value;
    $.ajax ( {
        type: 'POST',
        url: 'save_submit.php',
        data: { a: a, b: b },
        success: function(response) {
            alert('Дякуємо за Вашу підписку!');
            $('#name').val('');
            $('#gmail').val('');
        },
        error: function() {
            alert('Відбулась невідома помилка!');
        }
    });
}