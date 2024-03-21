class Projetos extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const card__left_divLangs_imgs = document.createElement("div")
        card__left_divLangs_imgs.setAttribute("class", "imgs_langs")
        const lang1 = document.createElement("img");
        lang1.src = this.getAttribute("lang1")
        lang1.alt = "";
        const lang2 = document.createElement("img");
        lang2.src = this.getAttribute("lang2")
        lang2.alt = "";
        const lang3 = document.createElement("img");
        lang3.src = this.getAttribute("lang3")
        lang3.alt = "";
        const lang4 = document.createElement("img");
        lang4.src = this.getAttribute("lang4")
        lang4.alt = "";
        const lang5 = document.createElement("img");
        lang5.src = this.getAttribute("lang5")
        lang5.alt = "";
        const lang6 = document.createElement("img");
        lang6.src = this.getAttribute("lang6")
        lang6.alt = "";
        card__left_divLangs_imgs.appendChild(lang1);
        card__left_divLangs_imgs.appendChild(lang2);
        card__left_divLangs_imgs.appendChild(lang3);
        card__left_divLangs_imgs.appendChild(lang4);
        card__left_divLangs_imgs.appendChild(lang5);
        card__left_divLangs_imgs.appendChild(lang6);


        const titulo = document.createElement("h3");
        titulo.textContent = this.getAttribute("titulo");
        const descricao = document.createElement("p");
        descricao.textContent = this.getAttribute('descricao');
        

        const card__left_divButons = document.createElement("div")
        card__left_divButons.setAttribute("class", "links_butons")
        const linkGithub = document.createElement("a");
        linkGithub.textContent = "Github";
        linkGithub.href = this.getAttribute("link-url");
        linkGithub.target = "_blank";
        linkGithub.setAttribute("class", "github");
        const linkLinkedin = document.createElement("a");
        linkLinkedin.textContent = "LinkedIn";
        linkLinkedin.href = this.getAttribute("link-url");
        linkLinkedin.target = "_blank"; 
        linkLinkedin.setAttribute("class", "linkedin");
        card__left_divButons.appendChild(linkGithub);
        card__left_divButons.appendChild(linkLinkedin);
        
        cardLeft.appendChild(card__left_divLangs_imgs);
        cardLeft.appendChild(titulo);
        cardLeft.appendChild(descricao);
        cardLeft.appendChild(card__left_divButons);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");
        const imagemProjeto = document.createElement("img");
        imagemProjeto.src = this.getAttribute("foto")
        cardRight.appendChild(imagemProjeto);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            max-width: 80rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            -webkit-box-shadow: 0px 0px 29px -2px rgba(153,38,153,0.7);
            -moz-box-shadow: 0px 0px 29px -2px rgba(153,38,153,0.7);
            box-shadow: 0px 0px 29px -2px rgba(153,38,153,0.7);
            margin: 60px auto;
            background-color: #1f1f1f;
            border-radius: 8px;
        }
        
        .card__left {
            display: flex;
            flex-direction: column;
            padding: 10px 15px;
        }

        .card__right {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 20px;
        }

        .imgs_langs {
            display: flex;
            gap: 10px;
        }

        .imgs_langs img {
            max-height: 22px;
        }

        .card__left h3 {
            color: #fff;
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: 700;
            margin: 18px 0px 8px 0px;
            cursor: default;
        }

        .card__left p {
            margin-top: 0;
            color: #bbbbbb;
            cursor: default;
        }

        .links_butons {
            display: flex;
            gap: 18px;
            padding: 5px 30px 30px 30px;
        }

        .links_butons a {
            padding: 10px 20px;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            transition: transform 0.3s ease;
        }

        .github {
            background-color: #000;
            color: #fff;
        }

        .linkedin {
            background-color: #fff;
            color: #000;
        }

        .links_butons a:hover {
            transform: translateY(-5px);
        }

        .card__right img {
            max-height: 250px;
            border-radius: 10px;
        }


        @media only screen and (max-width: 1000px) {
            .card {
                flex-direction: column-reverse;
                justify-content: center;
            }

            .links_butons {
                justify-content: center;
            }
        }

        @media only screen and (max-width: 580px) {
            .card__right img {
                max-height: 180px;
            }
        }

        @media only screen and (max-width: 450px) {
            .card__right img {
                max-height: 150px;
            }
        }

        @media only screen and (max-width: 400px) {
            .card__right img {
                max-height: 160px;
            }

            .links_butons {
                flex-direction: column;
            }
        }

        @media only screen and (max-width: 300px) {
            .card__right {
                display: none;
            }
        }
        `;

        return style;
    }

}

customElements.define('projeto-card', Projetos);
