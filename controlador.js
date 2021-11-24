window.addEventListener('DOMContentLoaded', function () {
    console.log('jfkdfjkdjfjf');
})

function inserccion(publicaciones,numero){
    document.getElementById("nombre_usuario").textContent="Brenda";

    // Se añade el articulo
    let article = document.createElement('article')
    let section = document.getElementById("section")
    section.appendChild(article)

    // Se añade el header article
    let header_article = document.createElement('div')
    header_article.className += ' header__article'
    let user_article = document.createElement('div')
    user_article.className += ' user__article'
    let img_user = document.createElement('img')
    img_user.src= 'images/user.png'
    img_user.className += ' img_user_article'

    let data_article = document.createElement('div')
    data_article.className += ' data__article'
    let username = document.createElement('h2')
    username.textContent ="ulisses"
    let hour = document.createElement('h4')
    hour.textContent= publicaciones.fecha
    data_article.appendChild(username)
    data_article.appendChild(hour)

    let container_tittle_article = document.createElement('div')
    container_tittle_article.className +=' tittle-article'
    let tittle = document.createElement('h1')
    tittle.textContent = publicaciones.titulo

    container_tittle_article.appendChild(tittle)

    let footer_article = document.createElement('div')
    footer_article.className += ' footer_article'
    let actions_article_heart = document.createElement('div')
    actions_article_heart.className += ' actions_article'
    let img_heart = document.createElement('img')
    img_heart.src = 'images/heart.png'
    img_heart.className += ' img_actions'
    let amount_like = document.createElement('div')
    amount_like.className += ' amount_like'
    amount_like.textContent= publicaciones.meGustas

    footer_article.appendChild(actions_article_heart)
    actions_article_heart.appendChild(img_heart)
    actions_article_heart.appendChild(amount_like)

    let actions_article_commments = document.createElement('div')
    actions_article_commments.className += ' actions_article'
    let img_comment = document.createElement('img')
    img_comment.src = 'images/comments.png'
    img_comment.className += ' img_actions'
    let amount_comment = document.createElement('div')
    amount_comment.className += ' amount_comment'
    amount_comment.textContent= publicaciones.comentarios

    footer_article.appendChild(actions_article_commments)
    actions_article_commments.appendChild(img_comment)
    actions_article_commments.appendChild(amount_comment)

    article.appendChild(header_article)
    header_article.appendChild(user_article)
    user_article.appendChild(img_user)
    header_article.appendChild(data_article)
    article.appendChild(container_tittle_article)
    article.appendChild(footer_article)

}

function verPublicacion() {
    let publicacion = document.getElementById("publicacion")
    publicacion.style.background="F5F5F5"
    location.assign("publication.html");
}

function focoPublicacion(){
    let color = document.getElementById("publicacion")
    color.style.background ="#F6F5F4"
}

function fuerafocoPublicacion() {
    let color = document.getElementById("publicacion")
    color.style.background ="white"
}

for (let i=0;i<publicaciones.length;i++) {
    inserccion(publicaciones[i],[i+1])
}






