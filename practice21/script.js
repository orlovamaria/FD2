//  https://jsonplaceholder.typicode.com/posts/3     /3 это id отображаемой новости


const getAllPosts = (count = 3) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=${count}`).then(    /* /?_limit=5 добавили чтобы отображать только 5 элементов на странице */
    (res) => {
        // console.log(res.json())
        return res.json();
    }
)

    .then(
        (data) => {
        // console.log(data)
            const containerNews = document.querySelector('#posts')
            containerNews.innerHTML = '';
            data.forEach((post) => {
            containerNews.innerHTML += `
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">${post.title}</span>
                  <p>${post.body}</p>
                 </div>
             </div>
            `;
        })
    }
)
}

document.querySelector('#five-bews').addEventListener('click', () => {
    getAllPosts(5);
})

document.querySelector('#ten-news').addEventListener('click', () => {
    getAllPosts(10);
})

const getPOst = (postID = 9) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=${postID}`).then(    /* /?_limit=5 добавили чтобы отображать только 5 элементов на странице */
    (res) => {
        // console.log(res.json())
        return res.json();
    }
)

    .then(
        (data) => {
        // console.log(data[9].title)
            const containerNews = document.querySelector('#posts')
            containerNews.innerHTML = '';
            
            containerNews.innerHTML += `
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">${data.title}</span>
                  <p>${data.body}</p>
                 </div>
             </div>
            `;
    }
)
}

document.querySelector('#third-news').addEventListener('click', () => {
    getPOst(3);
})