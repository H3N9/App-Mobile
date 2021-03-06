import path from "./path"

export const getLoad = (navigation, token, url, state, signal) => {
    fetch(url, {
        method: 'GET',
        signal:signal,
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token,
        }     
    })
    .then( async (response) => {
        if(response.status === 200){
            const json = await response.json()
            state(json)

            
        }
        else if(response.status === 401){
            navigation.navigate("Login")
        }
    })
    .catch((error) => {
        console.log(error)
    })
}

export const postLoad = (navigation, token, url, body, state, signal) => {
    fetch(url, {
        method: 'POST',
        signal:signal,
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(body)
    })
    .then( async (response) => {
        if(response.status === 200){
            const json = await response.json()
            state(json)
        }
        else if(response.status === 401){
            navigation.navigate("Login")
        }
    })
    .catch((error) => {
        console.log(error)
    })
}

export const postLoadCb = (navigation, token, url, body, cb, signal) =>{
    fetch(url, {
      method: 'POST',
      signal,
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token,
      },
      body: JSON.stringify(body)
    })
    .then( async (response) =>{
      if(response.status === 200){
        const json = await response.json()
        cb(response.status, json)
      }
      else if(response.status === 401){
        navigation.navigate("Login")
      }
      else{
        cb(response.status, {})
      }
    })
    .catch((error) => {
        console.log(error)
    })
  }

export const putLoad = (token, url, body, cb, signal) =>{
    fetch(url, {
      method: 'PUT',
      signal,
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token,
      },
      body: JSON.stringify(body)
    })
    .then( async (response) =>{
      if(response.status === 200){
        const json = await response.json()
        cb(response.status, json)
      }
      else{
        cb(response.status, {})
      }
    })
  }

export const imageUpload = (imageUri, state) =>{
    const xhr = new XMLHttpRequest()
    let formData = new FormData()
    formData.append("image", {uri: imageUri, name: 'image.jpg', type: 'image/jpeg'})
    //xhr.upload.addEventListener('progress', handleProgress)
    // xhr.addEventListener('load', () =>{
    // })
    const url = path.urlImage
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE){
          state(xhr.response.filename)
        }
    }
    xhr.open('POST', url)
    xhr.responseType = 'json'
    xhr.send(formData)
}
