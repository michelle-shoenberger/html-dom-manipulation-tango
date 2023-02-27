

const replaceImages = () => {
  let images_coll = document.body.getElementsByTagName("img")
  let images_arr = []
  let alts = []
  for(let i=0; i<images_coll.length; i++) {
    images_arr.push(images_coll[i])
    alts.push(images_coll[i].alt)
  }
  for (let i=0; i<alts.length; i++){
    let node = document.createTextNode(alts[i])
    let parent = document.getElementById(i+1)
    parent.replaceChild(node, images_arr[i])

  }
};

let btn = document.querySelector("button")
btn.addEventListener("click", replaceImages)

