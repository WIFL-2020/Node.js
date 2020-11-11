< !DOCTYPE html >
    <
    html lang = "en" >
    <
    head >
    <
    meta charset = "UTF-8" / >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" / >
    <
    title > Document < /title> <
    script src = "https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js" > < /script> <
    /head> <
    body >
    <
    button id = "btnGET" > GET < /button> <
    button id = "btnPOST" > POST < /button> <
    button id = "btnDelete" > DELETE < /button> <
    button id = "btnJSONP" > JSONP < /button>

<
script >
    $(function() {
        // 1. 测试GET接口
        $('#btnGET').on('click', function() {
                $.ajax({
                    type: 'GET',
                    url: 'http://127.0.0.1/api/get',
                    data: { name: 'zs', age: 20 },
                    success: function(res) {
                        console.log(res)
                    },
                })
            })
            // 2. 测试POST接口
        $('#btnPOST').on('click', function() {
            $.ajax({
                type: 'POST',
                url: 'http://127.0.0.1/api/post',
                data: { bookname: '水浒传', author: '施耐庵' },
                success: function(res) {
                    console.log(res)
                },
            })
        })

        // 3. 为删除按钮绑定点击事件处理函数
        $('#btnDelete').on('click', function() {
            $.ajax({
                type: 'DELETE',
                url: 'http://127.0.0.1/api/delete',
                success: function(res) {
                    console.log(res)
                },
            })
        })

        // 4. 为 JSONP 按钮绑定点击事件处理函数
        $('#btnJSONP').on('click', function() {
            $.ajax({
                type: 'GET',
                url: 'http://127.0.0.1/api/jsonp',
                dataType: 'jsonp',
                success: function(res) {
                    console.log(res)
                },
            })
        })
    }) <
    /script> <
    /body> <
    /html>