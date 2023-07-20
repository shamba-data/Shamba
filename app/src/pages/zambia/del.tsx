import { useForm, SubmitHandler } from "react-hook-form";

type formInputs = {
  example: string;
  exampleRequired: string;
};

export default function del() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInputs>();
  const onSubmit: SubmitHandler<formInputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && (
        <span className="text-red-500">This field is required</span>
      )}

      <input type="submit" />
    </form>
  );
}
