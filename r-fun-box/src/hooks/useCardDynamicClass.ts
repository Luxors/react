/**
 * Хук для динамического формирования строки классов на основе состояний для карточки товара.
 *
 * Этот хук собирает строку классов, которая зависит от состояния компонента, например,
 * от того, выбран ли элемент (isSelected) или отключен ли он (isDisabled).
 * Также можно передать дополнительные классы, которые будут добавлены к основному классу.
 *
 * @param {boolean} isSelected - Флаг, указывающий, выбран ли элемент.
 * @param {boolean} isDisabled - Флаг, указывающий, отключен ли элемент.
 * @param {string} [className='card'] - Основной класс для элемента. По умолчанию 'cars-slogan'.
 * @param {string[]} [additionalClasses=[]] - Дополнительные классы, которые могут быть добавлены к строке классов.
 *
 * @returns {string} Возвращает строку с динамически сформированными классами.
 *
 * @example
 * const className = useDynamicClass(true, false, 'custom-class', ['extra-class']);
 * // className = "custom-class custom-class--selected extra-class"
 */
import { useState, useEffect } from 'react';

export function useDynamicClass(
  className: string = 'card',
  isSelected: boolean | undefined,
  isDisabled: boolean | undefined,
  additionalClasses: string[] = []
) {
  const [computedClassName, setClassName] = useState(className);

  useEffect(() => {
    let newClassName = className;

    if (isDisabled) newClassName += ` ${className}--disabled`;
    if (isSelected && !isDisabled) newClassName += ` ${className}--selected`;

    // Добавляем дополнительные классы, если они переданы
    if (additionalClasses.length > 0) {
      newClassName += ' ' + additionalClasses.join(' ');
    }

    setClassName(newClassName);
  }, [isDisabled, isSelected, additionalClasses, className]);

  return computedClassName;
}
