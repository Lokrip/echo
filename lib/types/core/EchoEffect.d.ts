type VisualEffects = 'wave' | 'pulse' | 'flash'

interface VisualEffectConfig {}

interface IEchoEffect {
    /**
    * Создает визуальный эффект (например, волны)
    * @param {HTMLElement} element
    * @param {Object} config
    */
    _createVisualEffect(element: HTMLElement, config: VisualEffectConfig): void;
}
