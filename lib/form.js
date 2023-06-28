function formHTML(items){
    return items.map(item => {
        return (
            `<form class="edit-pizza-form" autocomplete="off" id="${item.id}">
                <input type="text" name="title" value="${item.title}" placeholder="title"> 
                <input type="text" name="price" value="${item.price}" placeholder="price"> 
                <input type="text" name="image" value="${item.image}" placeholder="image"> 
                <input type="text" name="description" value="${item.description}" placeholder="description"> 
                <button type="submit"> + Редактировать </button> 
            </form>
            `
        )
    }).join("");
}

export default formHTML