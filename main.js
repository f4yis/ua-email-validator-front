
$('#btn').click(te => {
    document.getElementById('result').innerHTML = ''
    let d = $('#validator').val()
    $.ajax({
        url: 'http://127.0.0.1:3000/validate',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log(data.data)
            let result = ''
            if(data.data) {
                result="Valid email"
            }else {
                result = "Not a valid email"
            }
            document.getElementById('result').innerHTML = result

        },
        data: JSON.stringify({email: d})
    })
    console.log('f')
})
