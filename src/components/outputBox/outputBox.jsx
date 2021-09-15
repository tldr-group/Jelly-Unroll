import React, { Component, useEffect, useContext } from 'react';
import { Context } from '../../Store'

const OutputBox = (props) => {
    const [state, dispatch] = useContext(Context);

    const calculateEffectiveLayerDensity = (porosity, solidPhaseDensity, solidPhaseDensityElectrolyte) => {
        return(
            ((porosity/100)*solidPhaseDensityElectrolyte)-(solidPhaseDensity*(1-(porosity/100)))
        )
    }

    const calculateJRThickness = (anodeCCThickness, anodeThickness, cathodeCCThickness, cathodeThickness, separatorThickness) => {
        return(
            anodeCCThickness+cathodeCCThickness+(2*(anodeThickness+cathodeThickness+separatorThickness))
        )
    }

    const calculateEffectiveJRDensity = (anodeCCThickness, anodeThickness, cathodeCCThickness, cathodeThickness, separatorThickness,anodeELD, anodeCCELD, cathodeCCELD, cathodeELD, separatorELD, jrThickness ) => {
        return(
            ((anodeCCThickness*anodeCCELD)+(2*anodeThickness*anodeELD)+(2*separatorThickness*separatorELD)+(2*cathodeThickness*cathodeELD)+(cathodeCCThickness*cathodeCCELD))/(jrThickness)
        )
    }
    
    const calculateJRLength = (jrThickness) => {
        return(
            (24038.09254)/(jrThickness)
        )
    }

    const calculateComponentMassA = (porosity, solidPhaseDensity, thickness, jrLength) => {
        return(
            (1-(porosity/100))*solidPhaseDensity*thickness*jrLength*6.1*0.0001
        )
    }
    
    const calculateComponentMassB = (porosity, solidPhaseDensity, thickness, jrLength) => {
        return(
            (1-(porosity/100))*solidPhaseDensity*thickness*jrLength*6.1*0.0001*2
        )
    }

    const calculateTotalJRMass = (anodeMass, anodeCCMass, separatorMass, cathodeMass, cathodeCCMass) => {
        return(
            anodeMass+anodeCCMass+separatorMass+cathodeMass+cathodeCCMass
        )
    }
    const calculateCellCapacity = (cathodeMass, cathodeBinderFraction) => {
        return(
            (0.2)*cathodeMass*(1-cathodeBinderFraction)
        )
    }
    
    const calculateSpecificEnergyCell = (cellCapacity, totalJRMass) => {
        return(
            (cellCapacity*3.7)/((totalJRMass+9.2)*1000)
        )
    }

    const calculateCellDensity = (totalJRMass) => {
        return(
            (totalJRMass+9.2)/(16.5)
        )
    }

    const calculateEnergyDensityCell = (specificEnergyCell, cellDensity) => {
        return(
            specificEnergyCell/cellDensity
        )
    }


    useEffect(() => {
        const cathodePorosity = state['components']['cathode']['porosity']
        const cathodeBinderFraction = state['components']['cathode']['binderFraction']
        const cathodeSPD = state['components']['cathode']['solidPhaseDensity']
        const cathodeCCPorosity = state['components']['cathodeCC']['porosity']
        const cathodeCCSPD = state['components']['cathodeCC']['solidPhaseDensity']
        const anodePorosity = state['components']['anode']['porosity']
        const anodeSPD = state['components']['anode']['solidPhaseDensity']
        const anodeCCPorosity = state['components']['anodeCC']['porosity']
        const anodeCCSPD = state['components']['anodeCC']['solidPhaseDensity']
        const separatorPorosity = state['components']['separator']['porosity']
        const separatorSPD = state['components']['separator']['solidPhaseDensity']
        const electrolyteSPD = state['components']['electrolyte']['solidPhaseDensity']
        const cathodeThickness = state['components']['cathode']['thickness']
        const cathodeCCThickness = state['components']['cathodeCC']['thickness']
        const anodeThickness = state['components']['anode']['thickness']
        const anodeCCThickness = state['components']['anodeCC']['thickness']
        const separatorThickness = state['components']['separator']['thickness']
        const cathodeELD = calculateEffectiveLayerDensity(cathodePorosity, cathodeSPD, electrolyteSPD)
        const cathodeCCELD = calculateEffectiveLayerDensity(cathodeCCSPD, cathodeCCPorosity , electrolyteSPD)
        const anodeELD = calculateEffectiveLayerDensity(anodePorosity, anodeSPD, electrolyteSPD)
        const anodeCCELD = calculateEffectiveLayerDensity(anodeCCPorosity,  anodeCCSPD, electrolyteSPD)
        const separatorELD = calculateEffectiveLayerDensity(separatorPorosity,  separatorSPD, electrolyteSPD)
        const jrThickness = calculateJRThickness(separatorThickness,anodeCCThickness, anodeThickness, cathodeThickness, cathodeCCThickness)
        const effectiveJRDensity = calculateEffectiveJRDensity(anodeCCThickness, anodeThickness, cathodeCCThickness, cathodeThickness, separatorThickness, anodeELD, anodeCCELD, cathodeCCELD, cathodeELD, separatorELD, jrThickness)
        const jrLength = calculateJRLength(jrThickness)
        const anodeCCMass = calculateComponentMassA(anodeCCPorosity, anodeCCSPD, anodeCCThickness, jrLength)
        const anodeMass = calculateComponentMassB(anodePorosity, anodeSPD, anodeThickness, jrLength)
        const separatorMass = calculateComponentMassB(separatorPorosity, separatorSPD, separatorThickness, jrLength)
        const cathodeMass = calculateComponentMassB(cathodePorosity, cathodeSPD, cathodeThickness, jrLength)
        const cathodeCCMass = calculateComponentMassA(cathodeCCPorosity, cathodeCCSPD, cathodeCCThickness, jrLength)
        const totalJRMass = calculateTotalJRMass(anodeMass, anodeCCMass, separatorMass, cathodeMass, cathodeCCMass)
        const cellCapacity = calculateCellCapacity(cathodeMass, cathodeBinderFraction)
        const specificEnergyCell = calculateSpecificEnergyCell(cellCapacity, totalJRMass)
        const cellDensity = calculateCellDensity(totalJRMass)
        const energyDensityCell = calculateEnergyDensityCell(specificEnergyCell, cellDensity) 

        dispatch({type: "UPDATE_CATHODE_ELD", payload: cathodeELD})

        dispatch({type: "UPDATE_CATHODECC_ELD", payload: cathodeCCELD})

        dispatch({type: "UPDATE_ANODE_ELD", payload: anodeELD})

        dispatch({type: "UPDATE_ANODECC_ELD", payload: anodeCCELD})

        dispatch({type: "UPDATE_SEPARATOR_ELD", payload: separatorELD})

        dispatch({type: "UPDATE_JR_THICKNESS", payload: jrThickness})

        dispatch({type: "UPDATE_EFFECTIVE_JR_DENSITY", payload: effectiveJRDensity})

        dispatch({type: "UPDATE_JR_LENGTH", payload: jrLength})

        dispatch({type: "UPDATE_ANODECC_MASS", payload: anodeCCMass})

        dispatch({type: "UPDATE_ANODE_MASS", payload: anodeMass})

        dispatch({type: "UPDATE_SEPARATOR_MASS", payload: separatorMass})

        dispatch({type: "UPDATE_CATHODE_MASS", payload: cathodeMass})

        dispatch({type: "UPDATE_CATHODECC_MASS", payload: cathodeCCMass})

        dispatch({type: "UPDATE_TOTAL_JR_MASS", payload: totalJRMass})

        dispatch({type: "UPDATE_CAPACITY", payload: cellCapacity})

        dispatch({type: "UPDATE_SPECIFIC_ENERGY_CELL", payload: specificEnergyCell})

        dispatch({type: "UPDATE_CELL_DENSITY", payload: cellDensity})
        
        dispatch({type: "UPDATE_ENERGY_DENSITY_CELL", payload: energyDensityCell})

    }, [state])


        return(
            <div>
                <div class="card text-black bg-info mb-3">
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <div class="card border-primary mb-1">
                    <div class="card-header">Effective Jellyroll Density (kg/L)</div>
                    <div class="card-body text-primary">
                        <p class="card-text">{state.jr.effectiveJRDensity}</p>
                    </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card border-primary mb-1">
                    <div class="card-header">Cell Capacity (Ah)</div> 
                    <div class="card-body text-primary">
                        <p class="card-text">{state.cellProperties.capacity}</p>
                    </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card border-primary mb-1">
                    <div class="card-header">Specific Energy of the Cell (Wh/kg)</div>
                    <div class="card-body text-primary">
                        <p class="card-text">{state.cellProperties.specificEnergyCell}</p>
                    </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card border-primary mb-1">
                    <div class="card-header">Energy Density of the Cell (Wh/L)</div>
                    <div class="card-body text-primary">
                        <p class="card-text">{state.cellProperties.energyDensityCell}</p>
                    </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card border-primary mb-1">
                    <div class="card-header">Performance 5</div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">Insert Output here</h5>
                        <p class="card-text">Insert text</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
}

export default OutputBox