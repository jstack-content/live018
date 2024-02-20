/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldPath, FieldValues, useController } from "react-hook-form";
import { Switch } from "./ui/Switch";

interface IControlledSwitchProps<T extends FieldValues> {
  control?: Control<T>;
  name: FieldPath<T>;
}

export function ControlledSwitch<T extends FieldValues>({ control, name }: IControlledSwitchProps<T>) {
  const { field } = useController({
    name,
    control,
  });

  return (
    <Switch
      ref={field.ref}
      name={field.name}
      onBlur={field.onBlur}
      onCheckedChange={field.onChange}
      checked={field.value}
      disabled={field.disabled}
    />
  );
}
