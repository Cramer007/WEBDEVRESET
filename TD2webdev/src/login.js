export function LogIn(event){
    event.preventDefault()
    const username  = usernameEl.value
    const email  = emailEl.value
    const password  = passwordEl.value

    const data = {
        // propertyName : 'property value'
        username : username,
        email : email,
        password : password,
    }

    fetch('/api/user',{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    }).then((res)=> {
        return res.text()
    }).then((res)=>{
        console.log(res)
    }).catch(function(error){
        console.log('Promise rejected with :', error)
    })
}