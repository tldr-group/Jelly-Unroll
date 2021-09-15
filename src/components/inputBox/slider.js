import React, { useContext } from "react";
import { Context } from '../../Store'

const Slider = (props) => {
    const [state, dispatch] = useContext(Context);

    const updateParameter = (e) => {
        if (props.name ==="cathodeThickness"){
            dispatch({type: "UPDATE_CATHODE_THICKNESS", payload: e.target.value})
        }
        else if (props.name ==="cathodeMaterial"){
            dispatch({type: "UPDATE_CATHODE_MATERIAL", payload: e.target.value})
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
    return (
        <input type="range" min={props.min} max={props.max} id={props.name} name="points1" onChange={updateParameter}></input>
   );
};

export default Slider;