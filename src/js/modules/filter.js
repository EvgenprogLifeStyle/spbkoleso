function filterDropDown() {
    const items = document.querySelectorAll('.filter__item')
    if (items)
        for (const item of items) {
            const btn = item.querySelector('.filter__top')

            btn?.addEventListener('click', () => {
                item.classList.toggle('active')
            })
        }
}

function numberInput() {
    const items = document.querySelectorAll('.filter-price__item input')
    if (items)
        for (const item of items) {
            item.addEventListener('input', () => {
                let val = item.value.replace(/[^0-9]/g, '');
                item.value = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            })
        }
}

function filterCheckBlock() {
    const blocks = document.querySelectorAll('.filter-check')
    if (blocks)
        for (const block of blocks) {
            const btnAll = block.querySelector('.filter-check__btn'),
                countShow = block.dataset.count,
                items = block.querySelectorAll('.filter-check .filter__body .checkbox ')
            items.forEach((e, idx) => idx > countShow ? e.classList.add('hide') : '')

            btnAll.addEventListener('click', () => {
                block.classList.toggle('show')
                if (block.classList.contains('show')) {
                    items.forEach(e => e.classList.remove('hide'))
                    btnAll.textContent = "Скрыть"
                } else {
                    items.forEach((e, idx) => idx > countShow ? e.classList.add('hide') : '')
                    btnAll.textContent = "Показать все"
                }
            })
        }
}



filterDropDown()
numberInput()
filterCheckBlock()