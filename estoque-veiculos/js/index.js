import add from "./pages/add.js";
import list from "./pages/list.js";
import login from "./pages/login.js";
import report from "./pages/report.js";

window.load = function load(page) {
    //pegando o conteudo da variavel page e colocando no HTMl da tag <main>
    //content.innerHTML = window[page]();

    if (page === "add") {
        content.innerHTML = add();
    }
    if (page === "list") {
        content.innerHTML = list();
    }

}


