
export type StackState = 'idle' | 'scanning' | 'pass' | 'fail' | 'suppressed';

export interface Layer {
  id: string;
  label: string;
  status: StackState;
  logs: string[];
}

export const STACK_LAYERS: string[] = [
  'INTENT',
  'AUTHORITY',
  'CONTEXT',
  'ADMISSIBILITY',
  'EXECUTION',
  'PHYSICAL ANCHOR'
];
