export type View = 'process' | 'economics' | 'profile' | 'phone-login';

export interface StepData {
  id: number;
  title: string;
  description: string;
  securityNote: string;
}

export interface ResourceCost {
  name: string;
  unitCost: number;
  bulkCost: number; // For 50 units
  unit: string;
}

export interface ProfileConfig {
  hasAvatar: boolean;
  hasBio: boolean;
  isPrivate: boolean;
  postsCount: number; // 0 or 1
  followingCount: number;
}