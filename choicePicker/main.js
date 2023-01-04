const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)

    if (e.key ==='Enter'){
        setTimeout(()=>{
            e.target.value = ''
        },10)
        randonSelect()
    }
})



const createTags =(input)=>{
    const tags = input.split(',')
    .filter(tag => tag.trim() !=='')
    .map(tag=>tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag=>{
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText =tag
        tagsEl.appendChild(tagEl)
    })
}




function randonSelect() {
    const times = 30

    const interval = setInterval(() => {

        const randomTag = pickRandonTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHghlightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandonTag()
            highlightTag(randomTag)
        }, 100);
    }, times * 30);

}

function pickRandonTag() {
    const tags = document.querySelectorAll('.tag')
    
    return tags [Math.floor(Math.random() * tags.length)]


}

function highlightTag(tag) {
    tag.classList.add('highlight')
}
function unHghlightTag(tag) {
    tag.classList.remove('highlight')
}

