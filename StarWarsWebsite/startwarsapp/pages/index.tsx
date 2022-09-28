import type { NextPage } from 'next'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Home: NextPage = () => {
  const [buttonTypes, setbuttonTypes] = useState([
    {
      title: "Characters",
      subtitle: "A People resource is an individual person or character within the Star Wars universe.",
      enlace: "",
      image: "https://www.seekpng.com/png/full/13-134908_star-wars-characters-star-wars-characters-png.png"
    },
    {
      title: "Locations",
      subtitle: "A Planet resource is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY.",
      enlace: "",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f4c4b7d-a2ad-49a4-ad0d-2327cab52046/de6c8ft-163f01c9-61c9-4790-a531-6e509ada0b53.png/v1/fill/w_894,h_894,strp/coruscant__icon_2__by_schinyman_de6c8ft-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAwMCIsInBhdGgiOiJcL2ZcLzNmNGM0YjdkLWEyYWQtNDlhNC1hZDBkLTIzMjdjYWI1MjA0NlwvZGU2YzhmdC0xNjNmMDFjOS02MWM5LTQ3OTAtYTUzMS02ZTUwOWFkYTBiNTMucG5nIiwid2lkdGgiOiI8PTIwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Z6sDSwrW3d9D0RyzqJe6F5bVDrms70Oa3yhB3u-Ag5c"
    },
    {
      title: "Species",
      subtitle: "A Species resource is a type of person or character within the Star Wars Universe.",
      enlace: "",
      image: "https://i.pinimg.com/originals/8f/93/fa/8f93fa92526b62b916d87d53edd0609c.png"
    }
  ])



  return (

    <div className="container my-5">
      <div className="text-center py-5">
        <h1>START WARS PRUEBA TECNICA</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum delectus in. Assumenda debitis cum
          deserunt illum hic doloribus amet!</p>
      </div>

      <div className="bg-white text-left menubg text-dark" >
        {
          buttonTypes.map((button, i) => (
            <div className="row p-5" key={i}>
              <div className="col-12 col-md-6 text-center text-md-left">
                <h2>{button.title}</h2>
                <p>{button.subtitle}</p>
                <Link href={{
                  pathname: "/lista",
                  query: { name: button.title }
                }}><p className='botonEnlace'>view {button.title}</p></Link>
              </div>
              <div className="col-12 col-md-6 mt-3 mt-md-0">
                <div className="text-center">
                  <Image
                    className="image-menu img-fluid"
                    width={200} height={200}
                    src={button.image}
                  />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
