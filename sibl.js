let cols = document.querySelectorAll(".inside-col");
let home = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt, libero nam ipsa ut aliquam doloribus id assumenda tempore! Aperiam consectetur qui distinctio dolores quisquam itaque inventore commodi similique. Obcaecati, laudantium cum laboriosam voluptatem, corrupti et ipsam magni esse possimus placeat quidem necessitatibus repudiandae, aut culpa repellat! At est tenetur vitae amet, nemo beatae error id reprehenderit voluptas nam, eaque voluptatem fugit unde aspernatur quas dicta consectetur repellat iure, illum hic. Hic nulla consequuntur debitis iste odit cumque veritatis porro, nostrum perferendis repudiandae nobis perspiciatis consectetur iusto ut expedita provident unde voluptatibus rerum sequi? Doloremque similique dolores iure quidem dolor.`;
let about = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem earum recusandae neque impedit ab voluptates sequi accusamus, vero minus autem dolor mollitia, possimus nobis. In, laborum. Quaerat et voluptatum temporibus maxime fugit ea molestiae sequi earum rem, beatae aliquid amet, corrupti eveniet facere dolor veniam cum officiis! Nostrum modi odio, excepturi at fugit aperiam mollitia provident eum eos fugiat quasi!`;
let contact = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum in nesciunt sapiente consequuntur molestias eius atque. Accusamus repudiandae et quidem non incidunt iste ipsa reiciendis aliquid obcaecati ut totam eum tenetur sequi qui mollitia esse sit odit corporis nisi minima maiores labore ducimus, eaque unde. Eius pariatur, laborum incidunt nulla et ipsam suscipit, quibusdam architecto eos temporibus dignissimos animi ab saepe asperiores esse accusantium dolorem error maiores doloribus natus non illo vitae! Minus neque facilis expedita deserunt nulla, blanditiis laudantium quo! Error eligendi magni cupiditate quis, ratione eaque magnam repellat accusamus neque? Voluptatum, magni! Ab repellendus minima porro id eaque!`;

cols.forEach(el => {
    el.addEventListener("click", function(){
        cols.forEach(ch =>{
            ch.classList.remove("active");
        });
        el.classList.add("active");
        if (el.getAttribute("data-id") == 1){
            el.parentElement.nextElementSibling.innerText = home;
        }else if (el.getAttribute("data-id") == 2){
            el.parentElement.nextElementSibling.innerText = about;
        }else{
            el.parentElement.nextElementSibling.innerText = contact;
        } 
        console.log(el.parentElement.nextElementSibling);
    });
});