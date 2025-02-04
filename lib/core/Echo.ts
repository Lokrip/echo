class Echo implements IEcho {
    private defaultOptions: EchoDefaultOptions

    constructor(defaultOptions = {}) {
        this.defaultOptions = {
            visualEffect: "wave",
            sound: null,
            delay: 0,
            duration: 500,
            color: "#3498db",
            size: 100,
            ...defaultOptions,
        }
    }

    public trigger(element: HTMLElement, options: TriggerOptions): void {

    }
}
