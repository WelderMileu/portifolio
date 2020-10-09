(function () {
    async function init() {

        const data = await fetch("certicate.json")
        const list = await data.json()

        console.log(list)

        list.map(item => {
            const e = document.querySelector('.items');

            const container = document.createElement('div');
            container.classList.add('p-5', 'm-1', 'mt-3','rounded')

            const img = new Image();
            img.src = item.image;
            img.width = 300

            const desc = document.createElement('p');
            desc.classList.add('text-center', 'uppercase', 'text-gray-900', 'text-lg', 'font-semibold', 'p-3')
            desc.innerHTML = item.description;

            container.appendChild(desc)
            container.appendChild(img)
            e.appendChild(container)
        })
    }

    init()
})();