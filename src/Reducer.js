const Reducer = (state, action) => {
    switch(action.type) {
        case "UPDATE_CATHODECC_THICKNESS":
            state.components.cathodeCC.thickness = action.payload
            return {
                ...state,
            };

        case "UPDATE_CATHODECC_MATERIAL":
            state.components.cathodeCC.material = action.payload
                return {
                    ...state
                };
                
        case "UPDATE_CATHODECC_POROSITY":
            state.components.cathodeCC.porosity = action.payload
                return {
                    ...state,    
                };
        case "UPDATE_CATHODECC_ELD":
            state.components.cathodeCC.effectiveLayerDensity = action.payload
                return {
                    ...state,
                };
        case "UPDATE_CATHODECC_MASS":
            state.components.cathodeCC.mass = action.payload
                return {
                    ...state,
                };

        case "UPDATE_CATHODE_THICKNESS":
            state.components.cathode.thickness = action.payload
            return {
                ...state,
            };

        case "UPDATE_CATHODE_MATERIAL":
            state.components.cathode.material = action.payload
                return {
                    ...state
                };
                
        case "UPDATE_CATHODE_POROSITY":
            state.components.cathode.porosity = action.payload
                return {
                    ...state,    
                };

        case "UPDATE_CATHODE_BINDERFRACTION":
            state.components.cathode.binderFraction = action.payload
                return {
                    ...state,        
                };
        
        case "UPDATE_CATHODE_ELD":
            state.components.cathode.effectiveLayerDensity = action.payload
                return {
                    ...state,
                };
        case "UPDATE_CATHODE_MASS":
            state.components.cathode.mass = action.payload
                return {
                    ...state,
                };        

        case "UPDATE_SEPARATOR_MATERIAL":
            state.components.separator.material = action.payload
                return {
                    ...state
                };
                
        case "UPDATE_SEPARATOR_POROSITY":
            state.components.separator.porosity = action.payload
                return {
                    ...state,    
                };
        case "UPDATE_SEPARATOR_ELD":
            state.components.separator.effectiveLayerDensity = action.payload
                return {
                    ...state,
                };

        case "UPDATE_SEPARATOR_MASS":
            state.components.separator.mass = action.payload
                return {
                    ...state,
                };

         case "UPDATE_ANODE_THICKNESS":
            state.components.anode.thickness = action.payload
            return {
                ...state,
            };

        case "UPDATE_ANODE_MATERIAL":
            state.components.anode.material = action.payload
                return {
                    ...state
                };
                
        case "UPDATE_ANODE_POROSITY":
            state.components.anode.porosity = action.payload
                return {
                    ...state,    
                };

        case "UPDATE_ANODE_BINDERFRACTION":
            state.components.anode.binderFraction = action.payload
                return {
                    ...state,        
                };
        
        case "UPDATE_ANODE_ELD":
            state.components.anode.effectiveLayerDensity = action.payload
                return {
                    ...state,
                };

        case "UPDATE_ANODE_MASS":
            state.components.anode.mass = action.payload
                return {
                    ...state,
                };

        case "UPDATE_ANODECC_THICKNESS":
            state.components.anodeCC.thickness = action.payload
            return {
                ...state,
            };

        case "UPDATE_ANODECC_MATERIAL":
            state.components.anodeCC.material = action.payload
                return {
                    ...state
                };
                
        case "UPDATE_ANODECC_POROSITY":
            state.components.anodeCC.porosity = action.payload
                return {
                    ...state,    
                };

        case "UPDATE_ANODECC_ELD":
            state.components.anodeCC.effectiveLayerDensity = action.payload
                return {
                    ...state,
                };

        case "UPDATE_ANODECC_MASS":
            state.components.anodeCC.mass = action.payload
                return {
                    ...state,
                };
        
        case "UPDATE_JR_THICKNESS":
            state.jr.jrThickness = action.payload
                return {
                    ...state,
                };

        case "UPDATE_JR_LENGTH":
            state.jr.jrLength = action.payload
                return {
                    ...state,
                };

        case "UPDATE_EFFECTIVE_JR_DENSITY":
            state.jr.effectiveJRDensity = action.payload
                return {
                    ...state,
                };

        case "UPDATE_TOTAL_JR_MASS":
            state.jr.totalJRMass = action.payload
                return {
                    ...state,
                };
        
        case "UPDATE_CAPACITY":
            state.cellProperties.capacity = action.payload
                return {
                    ...state,
                };        
     
        case "UPDATE_SPECIFIC_ENERGY_CELL":
            state.cellProperties.specificEnergyCell = action.payload
                return {
                    ...state,
                };
        
        case "UPDATE_CELL_DENSITY":
            state.cellProperties.dimensions.cellDensity = action.payload
                return {
                    ...state,
                };
        case "UPDATE_EFFECTIVE_JR_DENSITY":
            state.jr.effectiveJRDensity = action.payload
                return {
                    ...state,
                };
        
        case "UPDATE_ENERGY_DENSITY_CELL":
            state.cellProperties.energyDensityCell = action.payload
                return {
                    ...state,
                };

        default:
            return state;

    }
};

export default Reducer