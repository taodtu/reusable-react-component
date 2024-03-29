const Button = ({
 onClick,
 className = '',
 children,
}) =>
 <button
  onClick={onClick}
  className={className}
  type="button"
 >
  {children}
 </button>