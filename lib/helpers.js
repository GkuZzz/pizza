export function createPizza(items, currentTarget) {
    const title = currentTarget.title.value;
    const price = currentTarget.price.value;
    const image = currentTarget.image.value;
    const description = currentTarget.description.value;
  
    if (!title || !price || !image || !description) {
      return;
    }
  
    const item = {
      title,
      price,
      image,
      description,
      selected: false,
      id: Date.now(),
    };
  
    return [...items, item]
}


export function remove (id, items){
    return items.filter((res) => res.id !== id);
}

export function markAsSelected(id, items) {
    const item = items.find(res => res.id === id)
    const curIndex = items.findIndex(res => res.id === id)

    const itemUpdated = {
        ...item,
        selected: !item.selected
    }

    return [
        ...items.slice(0, curIndex),
        itemUpdated,
        ...items.slice(curIndex + 1)
    ]
}

export function edit(eTarget, items) {
    const id = parseInt(eTarget.id)
    const title = eTarget.title.value;
    const price = eTarget.price.value;
    const image = eTarget.image.value;
    const description = eTarget.description.value;

    if (!title || !price || !image || !description) return;
    

    // Нужно найти нужную пиццу по id
    const itemOriginal = items.find(res => res.id === id);
    const curIndex = items.findIndex(res => res.id === id);

    const itemUpdated = {
        ...itemOriginal,
        title,
        price,
        image,
        description
    }

    return [
        ...items.slice(0, curIndex),
        itemUpdated,
        ...items.slice(curIndex + 1)
    ]
}


export function checkButtons(items) {
    let checkedPizza = 0;
    let itemsChecked = [];

  items.forEach((pizza) => {
    if (pizza.selected === true) {
      checkedPizza += 1;
    }
  });

  if (checkedPizza === items.length) {
    itemsChecked = items.map((pizza) => {
      return {
        ...pizza,
        selected: false,
      };
    });
  } else {
    itemsChecked = items.map((pizza) => {
      return {
        ...pizza,
        selected: true,
      };
    });
  }

  return itemsChecked
}