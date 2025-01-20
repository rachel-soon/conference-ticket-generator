import { Box, TextField } from "@radix-ui/themes";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function TicketForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", zIndex: "10" }}
      >
        <Box maxWidth="500px">
          <TextField.Root size="3" placeholder="Search the docs…" />
        </Box>
        {/* <input defaultValue="test" {...register("example")} /> */}

        <input {...register("exampleRequired", { required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
}
