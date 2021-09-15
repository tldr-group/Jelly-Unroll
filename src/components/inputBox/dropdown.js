import React, { useContext } from "react";
import { Context } from '../../Store'

const Dropdown = (props) => {
    const [state, dispatch] = useContext(Context);

    const updateParameter = (e) => {
        if (props.name ==="cathodeThickness"){
            dispatch({type: "UPDATE_CATHODE_THICKNESS", payload: e.target.value})
        }
        else if (props.name ==="cathodeMaterial"){
            dispatch({type: "UPDATE_CATHODE_MATERIAL", payload: e.target.textContent})
            if(e.target.textContent==="NMC"){
                var binderFraction = 0.1
            }
            else if(e.target.textContent==="LFP"){
                var binderFraction = 0.2
            }
            else if(e.target.textContent==="Cobalt"){
                var binderFraction = 0.3
            }
            dispatch({type: "UPDATE_CATHODE_BINDER_FRACTION", payload: binderFraction})
        }
        else if (props.name ==="cathodePorosity"){
            dispatch({type: "UPDATE_CATHODE_POROSITY", payload: e.target.value})
        }
        else if (props.name ==="cathodeBinderFraction"){
            dispatch({type: "UPDATE_CATHODE_BINDERFRACTION", payload: e.target.value})
        }
        else if (props.name ==="anodeMaterial"){
            dispatch({type: "UPDATE_ANODE_MATERIAL", payload: e.target.value})
        }
        else if (props.name ==="anodePorosity"){
            dispatch({type: "UPDATE_ANODE_POROSITY", payload: e.target.value})
        }
        else if (props.name ==="anodeBinderFraction"){
            dispatch({type: "UPDATE_ANODE_BINDERFRACTION", payload: e.target.value})
        }
        else if (props.name ==="cathodeCCMaterial"){
            dispatch({type: "UPDATE_CATHODECC_MATERIAL", payload: e.target.value})
        }
        else if (props.name ==="cathodeCCPorosity"){
            dispatch({type: "UPDATE_CATHODECC_POROSITY", payload: e.target.value})
        }
        else if (props.name ==="cathodeCCBinderFraction"){
            dispatch({type: "UPDATE_CATHODECC_BINDERFRACTION", payload: e.target.value})
        }
        else if (props.name ==="anodeCCMaterial"){
            dispatch({type: "UPDATE_ANODECC_MATERIAL", payload: e.target.value})
        }
        else if (props.name ==="anodeCCPorosity"){
            dispatch({type: "UPDATE_ANODE_POROSITY", payload: e.target.value})
        }
        else if (props.name ==="anodeCCBinderFraction"){
            dispatch({type: "UPDATE_ANODE_BINDERFRACTION", payload: e.target.value})
        }
        else if (props.name ==="separatorMaterial"){
            dispatch({type: "UPDATE_SEPARATOR_MATERIAL", payload: e.target.value})
        }
        else if (props.name ==="separatorPorosity"){
            dispatch({type: "UPDATE_SEPARATOR_POROSITY", payload: e.target.value})
        }
        else if (props.name ==="separatorBinderFraction"){
            dispatch({type: "UPDATE_SEPARATOR_BINDERFRACTION", payload: e.target.value})
        } 
    }
    
    const itemListMap = props.itemlist.map((item) =>
    <button class="dropdown-item" onClick={updateParameter}>{item}</button>
    )

    return (
        <div class="dropdown">
            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {props.active}
            </button>
            <div class="dropdown-menu" aria-labelledby="cathodeMaterial">
            {itemListMap}
            </div>
        </div>
   );
};

export default Dropdown;