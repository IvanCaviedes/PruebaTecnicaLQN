import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersByid } from '../../redux/starwarsSlice'
import { AppDispatch } from '../../redux/store'

const Desctiption = () => {
  const router = useRouter()
  const dispacth = useDispatch<AppDispatch>()
  const { id } = router.query
  const { Character } = useSelector((state: any) => state.StarWarsReducer);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacterId = (id: any) => {
      setLoading(true)
      dispacth(getCharactersByid({ id }))
        .unwrap()
        .then(() => setLoading(false))
        .catch((error) => console.log(error))
    }
    getCharacterId(id ? id : 1)
  }, [dispacth, id])

  if (loading) {
    return (
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-light " role="status" style={{ width: "10rem", height: "10rem" }}>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }


  return (
    <div className="container">
      <div className="text-center py-5">
        <h1>START WARS PRUEBA TECNICA</h1>
      </div>

      <div className="bg-white text-left menubg text-dark" >

        {
          Character ?
            <div className="row p-5">
              <div className="col-12 col-md-6 text-center text-md-left">
                <div className="text-center">
                  <Image className="img-fluid" width={500} height={600}
                    src={Character.image} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 mt-3 mt-md-0">
                <div className="py-3">
                  <h2>{Character.name}</h2>
                  <h5>Planeta {Character.homeworld}</h5>
                </div>
                <div className="itemDescription py-2">
                  <h3>Especie: {Character.species}</h3>
                </div>
                <div className="itemDescription py-2">
                  <h3>affiliations:</h3>
                  <ul>
                    {
                      Character.affiliations &&
                        Character.affiliations.length > 0 ?
                        Character.affiliations.map((affi: any, i: any) => <li key={i}>{affi}</li>)

                        : <p>No tiene affiliations</p>
                    }
                  </ul>
                </div>
                <div className="itemDescription py-2">
                  <h3>masters:</h3>
                  <ul>
                    {
                      Character.masters &&
                        Character.masters.length > 0 ?
                        typeof Character.masters === 'string' ? <li>{Character.masters}</li> :
                          Character.masters.map((mas: any, i: any) => <li key={i}>{mas}</li>)
                        : <p>No tiene masters</p>
                    }
                  </ul>
                </div>
                <div className="itemDescription py-2">
                  <h3>apprentices:</h3>
                  <ul>
                    {
                      Character.apprentices &&
                        Character.apprentices.length > 0 ?
                        Character.apprentices.map((appre: any, i: any) => <li key={i}>{appre}</li>)

                        : <p>No tiene apprentices</p>
                    }
                  </ul>
                </div>
                <div className="itemDescription py-2">
                  <h3>formerAffiliations:</h3>
                  <ul>
                    {
                      Character.formerAffiliations &&
                        Character.formerAffiliations.length > 0 ?
                        Character.formerAffiliations.map((appre: any, i: any) => <li key={i}>{appre}</li>)

                        : <p>No tiene formerAffiliations</p>
                    }
                  </ul>
                </div>
                <a className="botonEnlace" href={Character.wiki}>Ver Mas...</a>
              </div>
            </div>
            :
            <h1>No existe</h1>
        }
      </div>
    </div>
  )
}

export default Desctiption