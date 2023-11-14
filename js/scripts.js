import { presidents } from "../presidents.js"

const cards = document.querySelector('#cards')


for(let p of presidents) {
  let fig = document.createElement('figure')
  let pName = document.createElement('h2')
  let img = document.createElement('img')
  let figC = document.createElement('figCaption')

  // set up figure
  fig.appendChild(pName)
  fig.appendChild(img)
  fig.appendChild(figC)

  //prepare content
  let desc = `<p>Served ${p.took_office} to ${p.left_office}<br>Lived ${p.born} - ${p.died}<br>Party: ${p.party}</p>`

  // add content
  pName.textContent = p.name
  img.src = `https://www.loc.gov/static/portals/free-to-use/public-domain/presidential-portraits/${p.photo}`
  figC.innerHTML = desc
  

  cards.appendChild(fig)
}

