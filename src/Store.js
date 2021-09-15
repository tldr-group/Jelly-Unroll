import React, {createContext, useReducer} from "react";
import Reducer from './Reducer'

const initialState = {
    components: {
        cathode:{
            thickness: 90,
            material: "NMC",
            porosity: 3,
            binderFraction: 0.10,
            solidPhaseDensity: 4,
            effectiveLayerDensity: 3.19,
            mass: 16.7
        },
        anode: {
            thickness: 99,
            material: "Graphite",
            porosity: 3,
            binderFraction: 0.05,
            solidPhaseDensity: 2.26,
            effectiveLayerDensity: 1.97,
            mass: 10.4
        },
        cathodeCC: {
            thickness: 15,
            material: "Aluminium",
            porosity: 0,
            solidPhaseDensity: 2.7,
            effectiveLayerDensity: 2.7,
            mass: 1.3
        },
        anodeCC: {
            thickness: 10,
            material: "Copper",
            porosity: 0,
            solidPhaseDensity: 8.96,
            effectiveLayerDensity: 8.96,
            mass: 3
        },
        separator: {
            thickness: 20,
            material: "PP",
            porosity: 4,
            solidPhaseDensity: 0.94,
            effectiveLayerDensity: 1.08,
            mass: 0.7
        },
        electrolyte:{
            material: "EC",
            solidPhaseDensity: 1.3,
            mass: 5.6
        },
    },
        jr:{
            jrThickness: 443,
            effectiveJRDensity: 2.57,
            jrLength: 54.3,
            totalJRMass: 37.7,
    },
        cellProperties:{
            dimensions:{
                height: 6.1,
                length: 53.1,
                cellDensity: 2.8,
        },
            specificEnergyCell: 237,
            capacity: 0,
            energyDensityCell:0,
    
    },
    

    error: null
}



const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return(
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;

