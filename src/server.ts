import Fastify from 'fastify'

async function booststrap(){
    const fastify= Fastify({
        logger: true,


    })
   //http://localhost:3333/pools/count 
   
   fastify.get('/pools/count', ()=>{
     return {count:1}
   } )



    await fastify.listen({port:3333})


}

 booststrap()