import { Effect } from "../types/enum/effect";

class Echo implements IEcho {
    private defaultOptions: EchoDefaultOptions
    private echoEffects: IEchoEffect;
    private echoAudio: IEchoAudio;
    private echoVibration: IEchoVibration;

    constructor(defaultOptions = {}) {
        this.defaultOptions = {
            visualEffect: Effect.WAVE,
            sound: null,
            delay: 0,
            vibration: false,
            duration: 500,
            color: "#3498db",
            size: 100,
            ...defaultOptions,
        }

        this.echoEffects = new EchoEffects();
        this.echoAudio = new EchoAudio();
        this.echoVibration = new EchoVibration();
    }

    public trigger(element: HTMLElement, options: TriggerOptions): void {
        const config = {...this.defaultOptions, ...options};

        setTimeout(() => {
            if(config.visualEffect)
                this.echoEffects._createVisualEffect(element, config)
            if(config.sound) {
                this.echoAudio._playSound(config.sound);
            }
            if(config.vibration) {
                this.echoVibration._triggerVibration();
            }

        }, config.delay)
    }
}

export default Echo;
