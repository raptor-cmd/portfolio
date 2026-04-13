interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

export default function Loading({ size = 'md', text, fullScreen = false }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const containerClasses = fullScreen 
    ? 'min-h-screen flex items-center justify-center'
    : 'flex items-center justify-center';

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center space-y-4">
        <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-muted border-t-primary`} />
        {text && (
          <p className="text-muted-foreground text-sm animate-pulse">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
