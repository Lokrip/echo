interface EchoDefaultOptions {
    /**
    * Визуальные эффекты,
    * использует тип @type {VisualEffects}
    */
    visualEffect: VisualEffects;
    /**
    * URL аудиофайла или null
    */
    sound: string | null;
    /**
    * Задержка перед эффектом
    */
    delay: number;
    /**
    * Длительность  эффекта в мс
    */
    duration: number;
    /**
    * Цвет эффекта
    */
    color: string;
    /**
    * Размер эффекта в px
    */
    size: number;
}

interface TriggerOptions {}

interface IEcho {
    /**
    * Триггерит эффект на указанном элементе
    * @param {HTMLElement} element - элемент, на котором сработает эффект
    * @param {TriggerOptions} options - настройки эффекта
    */
    trigger(element: HTMLElement, options: TriggerOptions): void;
}
