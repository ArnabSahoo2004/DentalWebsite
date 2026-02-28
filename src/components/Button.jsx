import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for safe tailwind Class merging
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-elevated focus:ring-primary-500",
    secondary: "bg-secondary-100 text-secondary-900 hover:bg-secondary-200 shadow-sm hover:shadow-soft focus:ring-secondary-500",
    accent: "bg-accent-500 text-white hover:bg-accent-600 shadow-soft hover:shadow-elevated focus:ring-accent-500",
    outline: "bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
    ghost: "bg-transparent text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900 focus:ring-secondary-500",
    white: "bg-white text-primary-700 hover:bg-gray-50 shadow-soft hover:shadow-elevated focus:ring-white"
};

const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold uppercase tracking-wide",
    icon: "p-3"
};

const Button = forwardRef(({
    className,
    variant = 'primary',
    size = 'md',
    asLink = false,
    to,
    href,
    children,
    ...props
}, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold outline-none transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 active:scale-95";
    const styles = cn(baseStyles, variants[variant], sizes[size], className);

    if (asLink) {
        if (to) {
            return (
                <Link to={to} className={styles} {...props}>
                    {children}
                </Link>
            );
        }
        return (
            <a href={href} className={styles} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button ref={ref} className={styles} {...props}>
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
