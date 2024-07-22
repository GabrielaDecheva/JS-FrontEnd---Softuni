function login(usernameArr) {
    const user = usernameArr[0];
    const passArr = usernameArr.slice(1)
    let tryCount = 0
    let currentPassword = '';
     passArr.forEach(element => {
        currentPassword = element.split("").reverse().join("");
        if (currentPassword !== user) {
            tryCount += 1;
            if (tryCount === 4) {
                console.log(`User ${user} blocked!`)
            }else{
                console.log("Incorrect password. Try again.")
            }           
        } else {
            console.log(`User ${user} logged in.`)
            return
        }
     });
}

login(['sunny','rainy','cloudy','sunny','not sunny'])