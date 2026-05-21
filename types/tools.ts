export interface Tool {
  name: string;
  href: string;
  desc: string;
  emoji?: string;
  badge?: string | null;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  href: string;
  gradient: string;
  border: string;
  tools: Tool[];
}
