import { forwardRef } from 'react';
import { PHONE_PLACEHOLDER } from '@/lib/phoneValidation';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  className?: string;
  inputClassName?: string;
  ariaLabel?: string;
  autoFocus?: boolean;
  id?: string;
}

/**
 * Phone input with fixed FI +358 prefix. The user types only the local part.
 * The visual prefix is uneditable.
 */
const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      value,
      onChange,
      disabled,
      hasError,
      errorMessage,
      className = '',
      inputClassName = '',
      ariaLabel = 'Puhelinnumero',
      autoFocus,
      id,
    },
    ref,
  ) => {
    return (
      <div className={className}>
        <div
          className={`flex items-stretch w-full rounded-xl border bg-white overflow-hidden transition-colors ${
            hasError
              ? 'border-destructive focus-within:border-destructive'
              : 'border-border/60 focus-within:border-primary'
          } ${disabled ? 'opacity-70' : ''}`}
        >
          <span
            aria-hidden="true"
            className="flex items-center px-3 bg-muted/60 text-foreground/80 text-sm font-medium border-r border-border/60 select-none whitespace-nowrap"
          >
            FI&nbsp;+358
          </span>
          <input
            ref={ref}
            id={id}
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            aria-label={ariaLabel}
            aria-invalid={hasError || undefined}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={PHONE_PLACEHOLDER}
            disabled={disabled}
            autoFocus={autoFocus}
            className={`flex-1 min-w-0 px-3 py-2.5 bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed ${inputClassName}`}
          />
        </div>
        {hasError && errorMessage && (
          <p
            role="alert"
            className="mt-2 text-sm text-destructive font-medium"
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
