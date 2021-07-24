const singleThread = () => {

     const c = console.log,
           p = process

           c(p.argv[1])
}

module.exports = singleThread