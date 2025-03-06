async function page() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    let url = 'https://63870223e399d2e473f1e725.mockapi.io/bloodbuddy'
    let res = await fetch(url);
    let data = await res.json(url);
    let match=false

    for (obj of data) {
        if (username === obj.name && password === obj.password) {
           match = true;
           break;
        }
    }
        if(match){
            console.log(`I am in`);
            // window.location.href = ('./about.html')
            nextPage();
        }
        else {
            console.log("error")
            alert("Invalid user")
        }

        function nextPage(){
            window.open("./about.html")
        }
    
}
