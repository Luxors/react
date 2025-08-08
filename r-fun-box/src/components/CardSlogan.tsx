import { useDynamicClass } from '../hooks/useCardDynamicClass';
import '../assets/styles/card-slogan.css';

export function CardSlogan({
  slogan,
  isSelected,
  isDisabled,
  onClick,
}: {
  slogan: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}) {
  const className = useDynamicClass('card-slogan', isSelected, isDisabled);

  const handleButtonClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
    if (onClick) onClick();
  };

  return (
    <p className={className}>
      {isDisabled && 'Печалька, с курой закончился.'}
      {isSelected && !isDisabled && slogan}
      {!isDisabled && !isSelected && (
        <>
          Чего сидишь? Порадуй котэ,{' '}
          <button
            type="button"
            className="card-slogan__btn"
            onClick={handleButtonClick}
          >
            купи.
          </button>
        </>
      )}
    </p>
  );
}
