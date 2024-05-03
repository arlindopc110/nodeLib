import chalk from './chalk'; 

function extraLinks (arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus (listaURls) {
    const arrStatus = await Promise.all(
     listaURls.map(async (url)  => {
        
        try {
            const response = await fetch(url)
            return response.status;
        } catch (erro) {
            return manejaErros(erro); //
        }
    })
    )
    return arrStatus;
}

function manejaErros (erro) {
    if (erro.cause.code === 'ENNOUTFOUND') {
        return 'Link não encontrado'
    } else {
        return 'ocorreu algum erro'
    }
}

export default  async function listaValidada (listaDeLinks) {
    const links = extraLinks(listaDeLinks);
    const status = await checaStatus(links);
    
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto, 
        status: status[indice]
    }))
}