"use strict";

import Echo from "./core/Echo";
import { Effect } from "./types/enum/effect";

function generatedOption(effect: VisualEffects): EchoDefaultOptions {
    if(!["wave", "pulse", "flash"].includes(effect)) {
        throw new Error("There is no such effect")
    }

    const options: EchoDefaultOptions = {
        visualEffect: effect,
        sound: null,
        delay: 0,
        vibration: false,
        duration: 500,
        color: "#3677c6",
        size: 100
    }

    return options ? options : null
}

const options = generatedOption(Effect.PULSE)
const echo = new Echo(options);

export {echo as echoDefault}
export default Echo;
