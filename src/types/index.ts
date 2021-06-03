export interface HireFormValues {
  email: string;
  firstName: string;
  lastName: string;
  description: string;
  development_from_scratch_request: boolean;
  feature_request: boolean;
  conversation_request: boolean;
}

export interface QuestionsFormValues {
  email: string;
  firstName: string;
  lastName: string;
  description: string;
}

export type FormValuesType = QuestionsFormValues & HireFormValues;
