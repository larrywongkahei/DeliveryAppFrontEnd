const API = {
  createUser(newUser) {
    return fetch("https://vast-wave-67131.herokuapp.com/createuser", {
      method: "post",
      body: JSON.stringify(newUser),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          return true
        } else {
          return false
        }
      })
  },
  Login(user) {
    return fetch('https://vast-wave-67131.herokuapp.com/login', {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          return true
        } else {
          return false
        }
      })
  },
  UpdateUser(data) {
    return fetch('https://vast-wave-67131.herokuapp.com/update', {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
  },
  GetUser(name) {
    return fetch('https://vast-wave-67131.herokuapp.com/data?name=' + name, {
      method: 'get'
    })
  },
  AddToLog(data) {
    return fetch('https://vast-wave-67131.herokuapp.com/addDelivery', {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
  },
  DeleteDelivery(data) {
    return fetch('https://vast-wave-67131.herokuapp.com/deleteDelivery', {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
  },
  CheckUser(email) {
    return fetch('https://vast-wave-67131.herokuapp.com/data?email=' + email, {
      method: 'get'
    })
  },
  ChangePassword(data) {
    return fetch('https://vast-wave-67131.herokuapp.com/changePassword', {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
  },
}

export default API