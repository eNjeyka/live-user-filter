let result = document.getElementById('result')
let filter = document.getElementById('filter')
let listItems = []

filter.addEventListener('input', (e) => filterData(e.target.value))

getData()

async function getData () {
    let res = await fetch('https://randomuser.me/api?results=50')

    let { results } = await res.json()

    result.innerHTML = ''
    
    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    });
    
}

function filterData (searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}