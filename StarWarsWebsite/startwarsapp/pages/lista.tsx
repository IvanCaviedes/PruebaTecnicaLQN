import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { getCharacters, getSpeciesOrLocations } from '../redux/starwarsSlice'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../redux/store'

function Lista() {
    const { query } = useRouter()
    const dispath = useDispatch<AppDispatch>()
    const [tipo, settipo]: any = useState()

    const { data } = useSelector((state: any) => state.StarWarsReducer);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const { name } = query
        settipo(name)

        if (query.name == "Characters") {
            setLoading(true)
            dispath(getCharacters())
                .unwrap()
                .then(() => setLoading(false))
                .catch((error) => console.log(error))
        }
        if (query.name == "Locations") {
            setLoading(true)
            dispath(getSpeciesOrLocations({ type: "planets" }))
                .unwrap()
                .then(() => setLoading(false))
                .catch((error) => console.log(error))
        }
        if (query.name == "Species") {
            setLoading(true)
            dispath(getSpeciesOrLocations({ type: "species" }))
                .unwrap()
                .then(() => setLoading(false))
                .catch((error) => console.log(error))
        }

    }, [query])


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
                <h1>START WARS Lista de {tipo}</h1>
            </div>

            <div className="bg-white text-left menubg text-dark row" >
                {
                    tipo == "Characters" ?
                        data.map((dat: any, i: number) => (
                            <div className="col-12 col-md-4 pt-3" key={i}>
                                <div className="card">
                                    <Image src={dat.image}
                                        width={520} height={520}
                                        className="img-fluid imgPerssonaje" alt="..." />
                                    <div className="card-body">
                                        <h3><Link href={`/descripcion/${dat.id}`}>{dat.name}</Link></h3>
                                    </div>
                                </div>
                            </div>
                        )) :
                        tipo == "Locations" ?
                            data['results'] && data['results'].map((loca: any, i: number) => (
                                <div className="col-12 col-md-4 pt-3" key={i}>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <div className='text-info'>
                                                <h3>{loca.name}</h3>
                                            </div>
                                            <h3>climate</h3>
                                            <p>{loca.climate}</p>
                                            <h3>terrain </h3>
                                            <p>{loca.terrain}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            data['results'] && data['results'].map((spec: any, i: number) => (
                                <div className="col-12 col-md-4 pt-3" key={i}>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <div className='text-info'>
                                                <h3>{spec.name}</h3>
                                            </div>
                                            <div className='text-muted'>
                                                <h3>language</h3>
                                                <p> {spec.language}</p>
                                            </div>
                                            <div className='text-muted'>
                                                <h3>designation</h3>
                                                <p>{spec.designation}</p>
                                            </div>
                                            <div className='text-muted'>
                                                <h3>classification</h3>
                                                <p>{spec.classification}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                }
            </div>
        </div>
    )
}

export default Lista