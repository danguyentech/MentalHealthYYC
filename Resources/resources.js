function makeResource(resource) {
    console.log(resource)
        let resourceDiv = document.createElement('div')

        let resourceName = document.createElement('h3')
        resourceName.textContent = resource.name
    
        let description = document.createElement('p')
        description.textContent = resource.description
    
        let link = document.createElement('a')
        link.setAttribute('href', resource.link)
        link.textContent = resource.link
    
        let phone= document.createElement('a')
        phone.setAttribute('href', 'tel:'+resource.phone)
        phone.textContent = resource.phone
    
        resourceDiv.appendChild(resourceName)
        resourceDiv.appendChild(description)
        resourceDiv.appendChild(link)
        resourceDiv.appendChild(document.createElement('br'))
        resourceDiv.appendChild(phone)
        return resourceDiv
}

function fetchResource(resourceNumber){
fetch('http://localhost:8081/resources')
    .then(response => response.json())
    .then(resources => {
        buildResources(resources[resourceNumber]);
    })
}

function buildResources(resources) {
    let resourceList=document.getElementById('resources')
    for (resource = 0; resource < resources.length; resource++) {
        let resourceChild=makeResource(resources[resource])
        resourceList.appendChild(resourceChild)
    }
    
 /*    let randomNumber1=Math.floor(Math.random()*resourceResults.length+1)
    console.log(randomNumber1)
    let chosenResult1=resourceResults.slice(randomNumber1-1,randomNumber1);
    console.log(chosenResult1);
    resourceResults.splice(randomNumber1-1,randomNumber1);
    console.log(resourceResults);
    let randomNumber2=Math.floor(Math.random()*resourceResults.length+1)
    console.log(randomNumber2)
    let chosenResult2=resourceResults.slice(randomNumber2-1,randomNumber2);
    console.log(chosenResult2);
    let resourceList1 = document.getElementById('resource1')
    let resourceList2 = document.getElementById('resource2')
    let resourceDiv1 = makeResource(chosenResult1[0])
    let resourceDiv2 = makeResource(chosenResult2[0])
    resourceList1.appendChild(resourceDiv1)
    resourceList2.appendChild(resourceDiv2) */
}
function goback() {
    window.location = "../Resources.html"
}