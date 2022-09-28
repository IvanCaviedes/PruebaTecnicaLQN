const Pokemones = ["audino", "bagon", "baltoy", "banette", "bidoof", "braviary", "bronzor", "carracosta", "charmeleon",
    "cresselia", "croagunk", "darmanitan", "deino", "emboar", "emolga", "exeggcute", "gabite", "girafarig",
    "gulpin", "haxorus", "heatmor", "heatran", "ivysaur", "jellicent", "jumpluff", "kangaskhan", "kricketune",
    "landorus", "ledyba", "loudred", "lumineon", "lunatone", "machamp", "magnezone", "mamoswine",
    "nosepass", "petilil", "pidgeotto", "pikachu", "pinsir", "poliwrath", "poochyena", "porygon2", "porygonz",
    "registeel", "relicanth", "remoraid", "rufflet", "sableye", "scolipede", "scrafty", "seaking", "sealeo", "silcoon",
    "simisear", "snivy", "snorlax", "spoink", "starly", "tirtouga", "trapinch", "treecko", "tyrogue", "vigoroth", "vulpix",
    "wailord", "wartortle", "whismur", "wingull", "yamask"]


let temp = {}


const obtenerPokemonesPosibles = (tempUltimaLetra, res) => {
    return tempUltimaLetra.filter(e => !res.includes(e));
}

const crearCadena = () => {

    const BuscarPalabras = (word, res) => {
        let ultimaLetra = word[word.length - 1]
        const listaPokemones = obtenerPokemonesPosibles((temp[ultimaLetra] || []), res)
        return listaPokemones.length ? listaPokemones.map(e => BuscarPalabras(e, [...res, e])) : res;
    };

    let listaOrganizada = [];
    let NumeroPokemones = 0
    const oraganizarResultado = (listPokemons) => {
        if (typeof listPokemons[0] === 'object') listPokemons.forEach(poke => oraganizarResultado(poke))
        if (listPokemons.length === NumeroPokemones) listaOrganizada.push(listPokemons)
        if (listPokemons.length > NumeroPokemones) {
            NumeroPokemones = listPokemons.length
            listaOrganizada = [listPokemons];
        }
    };

    Pokemones.forEach(Pokemon => {
        let LetraInicial = Pokemon[0]
        temp = { ...temp, [LetraInicial]: [...(temp[LetraInicial] || []), Pokemon] }
        const res = BuscarPalabras(Pokemon, [Pokemon])
        oraganizarResultado(res)
    })
    console.log(listaOrganizada[0]);
}

crearCadena()