function cardHTML(items) {
    return items.map((item) => {
      return `
                <li class="pizza-item">
                    <button value="${item.id}"class="delete">&times;</button>
                    <div class="pizza-item-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="pizza-items-details">
                        <div class="pizza-items-details-top">
                            <div class="itemHeader">
                                <input 
                                    value="${item.id}" 
                                    type="checkbox"
                                    ${item.selected === true ? 'checked' : ''}>
                                <span class ="itemName">${item.title}</span>
                            </div>
                            <span class="itemPrice">${item.price}</span>
                        </div>
                        <span class="pizza-items-details-bottom">${item.description}</span>
                    </div>
                </li>
            `;
    })
    .join("");
}

export default cardHTML