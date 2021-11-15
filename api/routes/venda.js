const router = require('express').Router()
const Venda = require('../models/Venda')


// GET all vendas
router.get('/', async (req, res)=>{
    try{
        const vendas = await Venda.find()
        try{
            res.status(200).json(vendas)
        }catch(err){ res.status(404).json(err) }
    }catch(err){ res.status(500).json(err) }
})

// GET vendas by ID

router.get('/:id', async (req, res)=>{
    try{
        const vendasId = await Venda.findById(req.params.id)
        try{
            if(vendasId.username == req.body.username){
                res.status(200).json(vendasId)
            }else{ res.status(401).json('Somente o administrador pode buscar por vendas.') }
        }catch(err){ res.status(404).json(err) }
    }catch(err){ res.status(500).json(err) }
})

//POST new Venda

router.post('/', async (req, res)=>{
    const newVenda = new Venda({
        username: req.body.username,
        nomedocliente: req.body.nomedocliente,
        cpf: req.body.cpf,
        email: req.body.email,
        status: req.body.status,
        totalcompra: req.body.totalcompra,
        totalliquido: req.body.totalliquido,
        situacao: req.body.situacao,
        metododepagamento: req.body.metododepagamento,
        idplayer: req.body.idplayer,
        discord: req.body.discord,
        cupomdesconto: req.body.cupomdesconto,
        datacriacao: req.body.datacriacao,
        ultimaatualizacao: req.body.ultimaatualizacao,
        comprovante: req.body.comprovante,
        produtos: {
            produto: req.body.produtos.produto,
            variacao: req.body.produtos.variacao,
            opcao: req.body.produtos.opcao
        }
    })

    try{
        const savedVenda = newVenda.save()
        res.status(200).json(savedVenda)
    }catch(err){ res.status(500).json(err) }
})

// ATUALIZAR VENDA - ALTERAR PREÇO, NOME, ETC...
router.put('/:id', async (req, res)=>{
    try{
        const updvenda = await Venda.findById(req.params.id)
        try{
            if(updvenda.username ===  req.body.username){

                updvenda = await Venda.findById(req.params.id, {
                    $set: req.body
                }, { new: true })
                res.status(200).json(updvenda)
            }else{ res.status(401).json('Somente o administrador pode atualizar vendas do sistema.') }
        }catch(err){ res.status(404).json(err) }
    }catch(err){ res.status(500).json(err) }
})

// DELETAR VENDA
router.delete('/:id', async (req, res)=>{
    try{
        const deletedVenda = await Venda.findById(req.params.id)
        try{
            if(deletedVenda.username === req.body.username){
                await deletedVenda.delete()
                res.status(200).json('Venda deletada com sucesso.')
            }else { res.status(401).json('Somente o administrador pode deletar vendas do sistema.') }

        }catch(err){ res.status(404).json(err) }
    }catch(err){ res.status(500).json(err) }

})

module.exports = router