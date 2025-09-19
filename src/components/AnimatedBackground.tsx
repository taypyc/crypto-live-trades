import React from 'react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(255,255,255,0.1),transparent_120%)]" />
        <div className="absolute inset-0 animate-pulse opacity-50">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 via-indigo-200/20 to-purple-100/20 animate-gradient" />
        </div>
      </div>
    </div>
  );
}