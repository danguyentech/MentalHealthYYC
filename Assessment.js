let tot = 0;
let stressColor = '';
let resourceResults=[];

function myFunction() {
    var x = document.getElementsByTagName("input");
    for (i = 0; i < x.length; i++) {
        if (x[i].checked) {
            tot += parseInt(x[i].value);
        }
        console.log(x[i].value);
    }
    console.log('Total is ' + tot)
    setTimeout(next, 100)
    function next() {
        document.getElementById('questions').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        results();
    }
}

function results() {
    let color = document.getElementById('colorText');
    tot /= 144;
    tot *= 100;
    console.log('Score is now ' + tot);
    if (tot <= 2.5) {
        color.textContent = 'Blue';
        color.style.color = ' rgb(109, 171, 241)';
        stressColor = 'Blue';
    }
    else if (tot > 2.6 && tot < 12) {
        color.textContent = 'Green';
        color.style.color = 'rgb(126, 178, 77)';
        stressColor = 'Green';
    }
    else if (tot > 12.01 && tot < 36) {
        color.textContent = 'Yellow';
        color.style.color = ' rgb(255, 239, 54)';
        stressColor = 'Yellow';
    }
    else if (tot > 36.01 && tot < 79) {
        color.textContent = 'Orange';
        color.style.color = 'rgb(233, 139, 58)';
        stressColor = 'Orange';
    }
    else if (tot > 79.01 && tot <= 100) {
        color.textContent = 'Red';
        color.style.color = ' rgb(214, 38, 49)';
        stressColor = 'Red';
    }
    else {
        color.textContent = 'Figuring this shit out!';

    }
    document.getElementById('indicator').style.width = tot + '%'
    fetch('http://localhost:8081/resources')
        .then(response => response.json())
        .then(resources => {
            buildResources(resources);
        })
}

function buildResources(resources) {
    for (x = 0; x < resources.length; x++) {
        searchResource(resources[x])
    }
    console.log(resourceResults);
    let randomNumber1 = Math.floor(Math.random() * resourceResults.length + 1)
    console.log(randomNumber1)
    let chosenResult1 = resourceResults.slice(randomNumber1 - 1, randomNumber1);
    console.log(chosenResult1);
    resourceResults.splice(randomNumber1 - 1, randomNumber1);
    console.log(resourceResults);
    let randomNumber2 = Math.floor(Math.random() * resourceResults.length + 1)
    console.log(randomNumber2)
    let chosenResult2 = resourceResults.slice(randomNumber2 - 1, randomNumber2);
    console.log(chosenResult2);
    let resourceList1 = document.getElementById('resource1')
    let resourceList2 = document.getElementById('resource2')
    let resourceDiv1 = makeResource(chosenResult1[0])
    let resourceDiv2 = makeResource(chosenResult2[0])
    resourceList1.appendChild(resourceDiv1)
    resourceList2.appendChild(resourceDiv2)
}

function searchResource(resourceChoice) {
    resourceChoice.filter(function (resource) {
        let resourceTest = Object.values(resource)
        if (resourceTest.includes(stressColor)) {
            resourceResults.push(resource);
        }
    })
}

function makeResource(resource) {
    let resourceDiv = document.createElement('div')

    let resourceName = document.createElement('h3')
    resourceName.textContent = resource.name

    let description = document.createElement('p')
    description.textContent = resource.description

    let link = document.createElement('a')
    link.setAttribute('href', resource.link)
    link.textContent = resource.link

    let phone = document.createElement('a')
    phone.setAttribute('href', 'tel:' + resource.phone)
    phone.textContent = resource.phone

    resourceDiv.appendChild(resourceName)
    resourceDiv.appendChild(description)
    resourceDiv.appendChild(link)
    resourceDiv.appendChild(document.createElement('br'))
    resourceDiv.appendChild(phone)

    return resourceDiv
}