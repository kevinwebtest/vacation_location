import React from "react"
import Header from "./components/Header"
import Cards from "./components/Cards"
import data from "./data"


export default function App() {
    const items = data.map(dt => {
        const loc = dt.location.toUpperCase()
        return <Cards 
                    title={dt.title}
                    location={loc}
                    googleMaps={dt.googleMapsUrl}
                    startDate={dt.startDate}
                    endDate={dt.endDate}
                    description={dt.description}
                    imageUrl={dt.imageUrl}
                />
    })
    
    return (
        <div>
            <Header />
            <div id="body">
                {items}
            </div>
        </div>
    )
}