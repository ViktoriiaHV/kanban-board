type StagesActionTypes = "ADD_STAGE" | "REMOVE_STAGE";

type Action<T extends StagesActionTypes, P> = {
    readonly type: T;
    readonly payload: P;
  };

export type StagesAction =
  | Action<"ADD_STAGE", string>
  | Action<"REMOVE_STAGE", string>
  ;