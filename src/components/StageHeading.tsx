import { useLayoutEffect, useRef, useState } from "react";

interface StageHeadingProps {
  name: string;
}

const Input = ({ onBlur }: { onBlur: () => void }) => {
  const headerInput = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    headerInput.current?.focus();
  }, []);

  return (
    <input className="stage-header__input" ref={headerInput} onBlur={onBlur} />
  );
};

export const StageHeading = ({ name }: StageHeadingProps) => {
  const [headingInput, setHeadingInput] = useState(false);

  if (headingInput) {
    return <Input onBlur={() => setHeadingInput(false)} />;
  } else {
    return (
      <h3
        className="stage-header__heading"
        onClick={() => setHeadingInput(true)}
      >
        {name}
      </h3>
    );
  }
};
