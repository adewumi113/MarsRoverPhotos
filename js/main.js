    document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${choice}&api_key=ppC7mvim0mbnQhPoBPIoTS0YjU5TO6IevBr3ff99`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.photos)

        let i = 0;
      const intervalId = setInterval(() => {
      // Set the slide stuff here with document.querySelectors
        document.querySelector('h2').innerText = data.photos[i].id
        document.querySelector('img').src = data.photos[i].img_src
        document.querySelector('h3').innerText = data.photos[i].camera.full_name
        document.querySelector('i').innerText = data.photos[i].rover.status

        i = i === data.photos.length-1 ? 0 : i+1;
      }, 2000);
      setTimeout(() => { clearInterval(intervalId); alert('stop showing pictures'); }, 375000);
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
} 