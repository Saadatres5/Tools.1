"use client";
import { Component, ReactNode } from "react";

interface Props { children: ReactNode; toolName?: string; }
interface State { hasError: boolean; error?: Error; }

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-center space-y-3">
          <div className="text-4xl">⚠️</div>
          <h3 className="font-semibold text-red-400">Something went wrong</h3>
          <p className="text-white/50 text-sm">
            {this.props.toolName ? `${this.props.toolName} encountered an error.` : "This tool encountered an error."}
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm transition-colors">
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
