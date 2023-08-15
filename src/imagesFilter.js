import React from "react";
import alimentacion from "../src/assets/images/alimentacion.svg";
import salud from "../src/assets/images/salud.svg";
import utilidades from "../src/assets/images/utilidades.svg";
import transporte from "../src/assets/images/transporte.svg";
import otros from "../src/assets/images/otros.svg";
import {Icono, Iconotema} from "../src/Components/UI/index.js"


export default (type) => {
    const Images = {
        Restaurante: <Iconotema src={alimentacion} />,
        Utilidades: <Iconotema src={utilidades} />,
        Salud: <Iconotema src={salud} />,
        Transporte: <Iconotema src={transporte} />,
        default: <Iconotema src={otros} />
    }

    return Images[type] || Images["default"];
}