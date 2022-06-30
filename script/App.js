import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity } from 'react-native';

import Torch from "react-native-torch";
import RNShake from "react-native-shake";

import style from "../component/style";
import imageLightOn from "../assets/icons/eco-light.png"
import imageLightOff from "../assets/icons/eco-light-off.png"
import imageLogo from "../assets/icons/logo-dio.png"
import imageLogoWhite from "../assets/icons/logo-dio-white.png"



const App = () => {

    const [toggleLight, setToggleLight] = useState(false);
    const handleChangeToggle = () => setToggleLight(oldToggleLight => !oldToggleLight); //Troca o "valor" booleano de toggleLight para ligar/desligar a lanterna

    useEffect(() => { //Liga/desliga a lanterna do celular
        Torch.switchState(toggleLight);
        console.log("Trocou o estado da lanterna");
    }, [toggleLight]);

    useEffect(() => { //"Shake"do celular para ligar/desligar a lanterna
        const shake = RNShake.addListener(() => {
            setToggleLight(oldToggleLight => !oldToggleLight);
        });

        return () => shake.remove();
    })

    return (
        <View style={toggleLight ? style.containerLight : style.container}>
            <TouchableOpacity onPress={handleChangeToggle}>
                <Image style={toggleLight ? style.lightningOn : style.lightningOff}
                    source={toggleLight ? imageLightOn : imageLightOff}/>
                <Image style={style.logoDio}
                    source={toggleLight ? imageLogo : imageLogoWhite}/>
            </TouchableOpacity>
        </View>
    )
}

export default App;
