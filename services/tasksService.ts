import API from './apiService';

export interface Task {
  id: number;
  platform: string;
  type: 'promos' | 'daily' | 'weekly' | 'monthly';
  url: string;
  reward: number;
  expires_at: string | null;
  description?: string;
}

// ✅ Fetch tasks by type
export const fetchTasks = (type: string) => 
  API.get<Task[]>(`/tasks?type=${type}`);

// ✅ Complete a task with proof (required)
export const completeTask = (taskId: number, proof: string) =>
  API.post<{ reward: number; newPoints: number }>(`/tasks/${taskId}/complete`, {
    proof, // proof must be a string like 'Done' or an actual proof link
  });
