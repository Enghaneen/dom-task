//first task
const lastElemntChild=document.body.lastElementChild.tagName;
console.log(lastElemntChild)

const lengthOfChildren=document.body.children.length;
console.log(lengthOfChildren)

const childrenLength=document.body.children.length
const childrenNodesLength=document.body.childNodes.length
console.log("children.length:", childrenLength);      // excludes text nodes
console.log("childNodes.length:", childNodesLength); // includes text nodes

const diff = childNodesLength - childrenLength;
console.log("Difference (childNodes - children):", diff);


const firstNode=document.body.childNodes[0]

console.log(firstNode.nodeType)
console.log(firstNode.nodeName)

const firstParagraph = document.getElementsByTagName('p')[0]
const firstParagraph = document.getElementsByTagName('p')[1]

if(firstParagraph.parentElement === secondParagraph.parentElement){
    console.log("Yes , both are siblings")
} // why not use nextSibling? because it confirms they are siblings if they are only ! directly next to each other.


const allNodes = document.body.childNodes;
//console.log(allNodes) 
allNodes.forEach((node, i) => {
  if (node.nodeType === 3 && node.nodeValue.trim() !== "") {
    console.log("Unexpected text node:", node, "at index", i);
  }
})

//second task
const divEl=document.createElement('div')
const h2El=document.createElement('h2')
const pEl=document.createElement('p')

divEl.className="card"
divEl.dataset.role="admain"

h2El.textContent="Access Panel"
pEl.textContent="Authenticated"

document.body.append(divEl)
divEl.insertAdjacentElement("afterbegin",h2El)
divEl.insertAdjacentElement("beforeend",pEl)

console.log(divEl.dataset.role)
pEl.textContent="Welcome back, Admin"

divEl.classList.add("authenticated","highlight")

console.log(divEl.classList) // card ,authenticated,highlight
if(divEl.classList.contains("card")){
    divEl.classList.remove("card")
}
console.log(divEl.classList) //authenticated,highlight
