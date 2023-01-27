import chalk from "chalk";

async function checaStatus (listaURLs) {
    const arrStatus = await Promise.
    all(
        listaURLs.map(async (url) => {
            try {
                const response = await fetch(url)
                return response.status;
            } catch (erro) {
                return manejaErros(erro)
            }
        })
    )
    return arrStatus;
}

function extraiLinks(arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

function manejaErros (erro) {
    if (erro.cause.code === 'ENOTFOUND') {
        return 'link não encontrado'
    } else {
        return 'ocorreu algum erro'
    }
    // console.log(chalk.red('algo deu errado'), erro)
}

export default async function listaValidada (listaDelinks) {
    const links = extraiLinks(listaDelinks)
    const status = await checaStatus(links)
    return listaDelinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}