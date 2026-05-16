export type QuoteFormState = {
  ok: boolean | null;
  error?: string;
  values?: { name?: string; phone?: string; email?: string; project?: string };
};

export const INITIAL_QUOTE_STATE: QuoteFormState = { ok: null };
