import Card from "./Card"
import CardPanel from "./CardPanel";
import { VenueJson } from "../interface";

interface VenueCatalogProps {
  venuesJson: VenueJson;
}

export default async function VenueCatalog({
  venuesJson
}:{venuesJson:Promise<VenueJson>}){

  const venueJsonReady = await venuesJson

  return(

    <div className="grid grid-cols-3 gap-8 mt-6 justify-items-center">

      {
        venueJsonReady.data.map((item)=>(
          <Card
            key={item.id}
            vid={item.id.toString()}
            name={item.name}
            picture={item.picture}
          />
        ))
      }


    </div>

  )

}