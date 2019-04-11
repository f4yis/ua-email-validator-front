
$('#btn').click(te => {
    document.getElementById('result').innerHTML = ''
    let d = $('#validator').val()
    $.ajax({
        url: 'http://68.183.129.118:2222/validate',
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
