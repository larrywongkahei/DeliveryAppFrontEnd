const API = {
    createUser (newUser){
        return fetch("http://172.20.10.2:3000/createuser", {
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
        return fetch('http://172.20.10.2:3000/login', {
          method: "post",
          body: JSON.stringify(user),
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
    UpdateUser(data){
        return fetch('http://172.20.10.2:3000/update', {
          method: "put",
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json'
          }
        })
    },
    GetUser(name){
        return fetch('http://172.20.10.2:3000/'+ name, {
          method:'get'
        })
    },
    AddToLog(data){
      return fetch('http://172.20.10.2:3000/addDelivery', {
          method: "put",
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json'
          }
      })
    },
    DeleteDelivery(data){
      return fetch('http://172.20.10.2:3000/deleteDelivery', {
          method: "put",
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json'
          }
      })
    },
}

export default API