const API = {
    createUser (newUser){
        return fetch("http://192.168.0.2:3000/createuser", {
            method: "post",
            body: JSON.stringify(newUser),
            headers: {
              'Content-type': 'application/json'
            }
        })
        .then(response => {
            if (response.status === 200){
                return true
            }else{
                return false
            }})
    },
    Login(user) {
        return fetch('http://127.0.0.1:8000/api/login', {
          method: "post",
          body: JSON.stringify(user),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(response => {
            if (response.status === 202){
                return true
            }else{
                return false
            }})
    },
}

export default API