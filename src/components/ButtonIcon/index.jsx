import './styles.scss';

export function ButtonIcon({ children, onClick, className }) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}