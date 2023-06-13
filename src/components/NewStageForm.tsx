import { useState } from "react"
import { Button } from "../layout/Button"
import { useAddNewStage } from "../store/stages/useAddNewStage";

export const NewStageForm = () => {
    const [stageTitle, setStageTitle] = useState('');
    const handleAddStage = useAddNewStage();

    const onAddNewStage = () => {
        handleAddStage(stageTitle);
    }

    return <div className="header-form__wrapper">
    <h3>Add a new stage</h3>
    <form>
      <input
        className="header-form__input"
        type="text"
        placeholder="Stage Name"
        onChange={(e) => setStageTitle(e.target.value)}
        value={stageTitle}
      />
      <Button
        type="submit"
        size="medium"
        color="secondary"
        onClick={onAddNewStage}
      >
        Add
      </Button>
    </form>
  </div>
}